const fs = require('fs');
const path = require('path');

const files = [
  'src/app/(tr)/hizmetlerimiz/page.tsx',
  'src/app/(en)/en/services/page.tsx',
  'src/app/(ru)/ru/services/page.tsx',
];

for (const file of files) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) continue;
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Remove import
  content = content.replace(/import ServiceApproach from '@\/components\/services\/ServiceApproach';\r?\n/g, '');
  
  // Remove component usage
  content = content.replace(/\s*<ServiceApproach lang="(tr|en|ru)" \/>/g, '');
  
  fs.writeFileSync(fullPath, content);
  console.log('Updated:', file);
}
