<?php
// contact-form.php
header('Content-Type: application/json; charset=utf-8');



if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Read JSON body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Geçersiz veri formatı. (Invalid JSON)']);
    exit;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$honeypot = isset($data['_honeypot']) ? trim($data['_honeypot']) : '';

// Honeypot (Spam koruması)
if (!empty($honeypot)) {
    // Botları sessizce reddet (başarılı dönerek spammerı yanılt)
    echo json_encode(['success' => true]);
    exit;
}

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Zorunlu alanları doldurunuz (Ad Soyad, E-posta, Mesaj).']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Geçerli bir e-posta adresi giriniz.']);
    exit;
}

if (mb_strlen($name) > 100 || mb_strlen($email) > 100 || mb_strlen($phone) > 50 || mb_strlen($subject) > 150 || mb_strlen($message) > 3000) {
    http_response_code(400);
    echo json_encode(['error' => 'Girdiğiniz bilgiler izin verilen karakter sınırını aşıyor.']);
    exit;
}

// Güvenlik & XSS Önleme (HTML & Header injection protection)
$safeName = strip_tags($name);
$safeName = str_replace(array("\r", "\n", "%0a", "%0d"), ' ', $safeName);

$safeEmail = strip_tags($email);
$safeEmail = str_replace(array("\r", "\n", "%0a", "%0d"), '', $safeEmail);

$safePhone = strip_tags($phone);
$safeSubject = strip_tags($subject);
$safeSubject = str_replace(array("\r", "\n", "%0a", "%0d"), ' ', $safeSubject);

$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Config Dosyası (Güvenlik gereği public_html dışında aranır)
$possibleConfigPaths = [
    dirname($_SERVER['DOCUMENT_ROOT']) . '/secure-config/contact-mail.php', // İdeal (public_html'in bir üstü)
    dirname(dirname($_SERVER['DOCUMENT_ROOT'])) . '/secure-config/contact-mail.php', // Bazı hosting yapılarında
    __DIR__ . '/contact-mail-config.php' // DİKKAT: Üretim ortamında bu dizinde kullanmaktan kaçının!
];

$configFile = null;
foreach ($possibleConfigPaths as $path) {
    if (file_exists($path)) {
        $configFile = $path;
        break;
    }
}

if (!$configFile) {
    http_response_code(503);
    echo json_encode(['error' => 'Sunucu e-posta ayarları yapılandırılmamış. (Config missing)']);
    exit;
}

$config = require $configFile;

if (empty($config['SMTP_HOST']) || empty($config['SMTP_USER']) || empty($config['SMTP_PASS'])) {
    http_response_code(503);
    echo json_encode(['error' => 'E-posta yapılandırması eksik. (Config invalid)']);
    exit;
}

// PHPMailer import (Composer olmadan statik kullanım)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];
    // Encryption türü
    if (isset($config['SMTP_SECURE']) && $config['SMTP_SECURE'] === 'true') {
        $mail->SMTPSecure = ($config['SMTP_PORT'] == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }
    $mail->Port       = (int)$config['SMTP_PORT'];
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom($config['CONTACT_FROM_EMAIL'], 'Kardentech Web Form');
    $mail->addAddress('info@kardentech.com');
    $mail->addReplyTo($safeEmail, $safeName);

    // Content
    $mail->isHTML(false);
    $mailSubjectText = empty($safeSubject) ? 'Belirtilmedi' : $safeSubject;
    $mail->Subject = "[Kardentech Web] Yeni Mesaj - {$safeName}";
    $mail->Body    = "Yeni İletişim Formu Mesajı\n\n" .
                     "Ad Soyad: {$safeName}\n" .
                     "E-posta: {$safeEmail}\n" .
                     "Telefon: " . (empty($safePhone) ? 'Belirtilmedi' : $safePhone) . "\n" .
                     "Konu: {$mailSubjectText}\n\n" .
                     "Mesaj:\n{$safeMessage}";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Mesajınız başarıyla iletildi. Teşekkür ederiz.']);
} catch (Exception $e) {
    // Hatayı logla, kullanıcıya gösterme
    error_log("Kardentech Contact Mailer Error: {$mail->ErrorInfo}");
    http_response_code(500);
    echo json_encode(['error' => 'Mesajınız gönderilemedi. Lütfen tekrar deneyin veya telefon/WhatsApp üzerinden bizimle iletişime geçin.']);
}
