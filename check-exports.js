const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

console.log('Checking component exports in src/components/:');
console.log('==============================================');

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for export patterns
    const hasDefaultExport = content.includes('export default');
    const hasNamedExport = content.match(/export (const|function) \w+/);
    const hasFunctionExport = content.includes('export function');
    
    console.log(`\n${file}:`);
    console.log(`  Default export: ${hasDefaultExport ? '✓' : '✗'}`);
    console.log(`  Named exports: ${hasNamedExport ? '✓' : '✗'}`);
    console.log(`  Function exports: ${hasFunctionExport ? '✓' : '✗'}`);
    
    if (hasDefaultExport) {
      const defaultLine = content.split('\n').find(line => line.includes('export default'));
      console.log(`  Default export line: ${defaultLine?.trim()}`);
    }
  }
});
