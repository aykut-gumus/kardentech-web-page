<?php
// DIKKAT: BU DOSYA SADECE ORNEKTIR (EXAMPLE).
// Guvenliginiz icin SMTP sifrelerinizi barindiran gercek config dosyanizi 
// public_html klasorunuzun disinda guvenli bir dizinde barindirin.
// Ornegin Isimtescil'de: /home/kullaniciadi/secure-config/contact-mail.php
// Eger public_html icinde kullanacaksaniz (contact-mail-config.php), 
// bu dosyaya disaridan erisimi engellediginizden (.htaccess ile) emin olun.

return [
    'SMTP_HOST' => 'smtp.gmail.com',
    'SMTP_PORT' => 465, // Veya 587
    'SMTP_USER' => 'info@kardentech.com',
    'SMTP_PASS' => 'g-workspace-uygulama-sifresi-buraya', // Sifrenizi git/repo'ya girmeyin!
    'SMTP_SECURE' => 'true',
    'CONTACT_FROM_EMAIL' => 'website@kardentech.com' // Veya workspace izni olan bir adres
];
