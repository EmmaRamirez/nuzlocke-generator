import { watch } from 'fs';
import { readdir, readFile, writeFile } from 'fs/promises';
import { dirname, join, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const UI_DIR = join(__dirname, '../src/components/Common/ui');
const INDEX_FILE = join(UI_DIR, 'index.ts');

// Get component files (excluding index.ts and non-component files)
async function getComponentFiles() {
    try {
        const files = await readdir(UI_DIR);
        return files
            .filter(file => {
                const ext = extname(file);
                return (ext === '.tsx' || ext === '.ts') && file !== 'index.ts';
            })
            .sort();
    } catch (error) {
        console.error('Error reading UI directory:', error);
        return [];
    }
}

// Read current index.ts content
async function readIndexFile() {
    try {
        return await readFile(INDEX_FILE, 'utf-8');
    } catch (error) {
        console.error('Error reading index.ts:', error);
        return '';
    }
}

// Write updated index.ts content
async function writeIndexFile(content) {
    try {
        await writeFile(INDEX_FILE, content, 'utf-8');
        console.log('✓ Updated index.ts');
    } catch (error) {
        console.error('Error writing index.ts:', error);
    }
}

// Generate export statements from component files
function generateExports(files) {
    return files
        .map(file => {
            const name = basename(file, extname(file));
            return `export * from "./${name}";`;
        })
        .join('\n');
}

// Update index.ts with all component exports
async function updateExports() {
    const componentFiles = await getComponentFiles();
    const exports = generateExports(componentFiles);
    
    await writeIndexFile(exports);
    console.log(`Exported ${componentFiles.length} component(s):`, componentFiles.join(', '));
}

// Watch for file changes
async function watchDirectory() {
    console.log(`Watching ${UI_DIR} for new components...`);
    
    watch(UI_DIR, { recursive: false }, async (eventType, filename) => {
        if (!filename) return;
        
        // Only react to .tsx and .ts files, and ignore index.ts
        const ext = extname(filename);
        if ((ext === '.tsx' || ext === '.ts') && filename !== 'index.ts') {
            if (eventType === 'rename') {
                // Small delay to ensure file operations are complete
                setTimeout(async () => {
                    console.log(`\n📦 Detected change: ${filename}`);
                    await updateExports();
                }, 100);
            }
        }
    });
    
    // Initial update
    await updateExports();
    
    console.log('Watcher is running. Press Ctrl+C to stop.');
}

// Start watching
watchDirectory().catch(console.error);

