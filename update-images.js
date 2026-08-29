const fs = require('fs');
const path = require('path');

const indexFiles = [
  'src/app/(tr)/hizmetlerimiz/page.tsx',
  'src/app/(en)/en/services/page.tsx',
  'src/app/(ru)/ru/services/page.tsx',
];

const electricalFiles = [
  'src/app/(tr)/elektrik-sistemleri/page.tsx',
  'src/app/(en)/en/services/electrical-systems/page.tsx',
  'src/app/(ru)/ru/services/electrical-systems/page.tsx',
];

const mechanicalFiles = [
  'src/app/(tr)/mekanik-sistemler/page.tsx',
  'src/app/(en)/en/services/mechanical-systems/page.tsx',
  'src/app/(ru)/ru/services/mechanical-systems/page.tsx',
];

const finishingFiles = [
  'src/app/(tr)/ince-isler/page.tsx',
  'src/app/(en)/en/services/finishing-works/page.tsx',
  'src/app/(ru)/ru/services/finishing-works/page.tsx',
];

const indexReplacement = `  const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' },
    { src: '/images/services/elektrik.png', position: 'object-center' },
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];`;

const electricalReplacement = `  const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];`;

const mechanicalReplacement = `  const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' }
  ];`;

const finishingReplacement = `  const heroImages = [
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];`;

function replaceHeroImages(files, replacement) {
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    
    // Use regex to match the heroImages array definition
    content = content.replace(/const heroImages = \[[\s\S]*?\];/m, replacement);
    
    fs.writeFileSync(fullPath, content);
    console.log('Updated:', file);
  }
}

replaceHeroImages(indexFiles, indexReplacement);
replaceHeroImages(electricalFiles, electricalReplacement);
replaceHeroImages(mechanicalFiles, mechanicalReplacement);
replaceHeroImages(finishingFiles, finishingReplacement);

console.log('Done!');
