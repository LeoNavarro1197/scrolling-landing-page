const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, '../public/frames');
const output = path.join(__dirname, '../public/frames.json');

try {
  const files = fs.readdirSync(framesDir)
    .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp'))
    .sort((a, b) => {
      // Sort by number in filename
      const numA = parseInt(a.match(/\d+/g)?.pop() || '0');
      const numB = parseInt(b.match(/\d+/g)?.pop() || '0');
      return numA - numB;
    });

  const data = JSON.stringify(files);
  fs.writeFileSync(output, data);
  console.log(`Generated manifest with ${files.length} frames.`);
} catch (err) {
  console.error('Error generating manifest:', err);
}
