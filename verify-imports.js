import fs from 'fs/promises';
import path from 'path';

async function verifyImports() {
  try {
    const appContent = await fs.readFile('./src/App.tsx', 'utf-8');
    const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
    const imports = [];
    let match;

    while ((match = importRegex.exec(appContent)) !== null) {
      imports.push(match[1]);
    }

    console.log('Found imports in App.tsx:');
    imports.forEach(imp => console.log(`- ${imp}`));

    // Check if imports exist
    const missingImports = [];
    for (const imp of imports) {
      try {
        // Check if it's a relative import
        if (imp.startsWith('.')) {
          const importPath = path.join('./src', imp);
          try {
            await fs.access(importPath + '.tsx');
          } catch {
            await fs.access(importPath + '.ts');
          }
        }
      } catch {
        missingImports.push(imp);
      }
    }

    if (missingImports.length > 0) {
      console.log('\n❌ Missing imports:');
      missingImports.forEach(imp => console.log(`- ${imp}`));
      process.exit(1);
    } else {
      console.log('\n✅ All imports are valid!');
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

verifyImports();
