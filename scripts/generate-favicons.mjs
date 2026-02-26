import sharp from 'sharp';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const sourceImage = 'public/images/APIX 07.png';
const outputDir = 'public';

if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

async function generateFavicons() {
    console.log('Generating favicons from:', sourceImage);

    try {
        // 16x16
        await sharp(sourceImage)
            .resize(16, 16)
            .toFile(join(outputDir, 'favicon-16x16.png'));
        console.log('Generated favicon-16x16.png');

        // 32x32
        await sharp(sourceImage)
            .resize(32, 32)
            .toFile(join(outputDir, 'favicon-32x32.png'));
        console.log('Generated favicon-32x32.png');

        // favicon.ico (using 32x32)
        await sharp(sourceImage)
            .resize(32, 32)
            .toFile(join(outputDir, 'favicon.ico'));
        console.log('Generated favicon.ico');

        // 180x180 (Apple Touch Icon)
        await sharp(sourceImage)
            .resize(180, 180)
            .toFile(join(outputDir, 'apple-touch-icon.png'));
        console.log('Generated apple-touch-icon.png');

        // 192x192 (Android Chrome)
        await sharp(sourceImage)
            .resize(192, 192)
            .toFile(join(outputDir, 'android-chrome-192x192.png'));
        console.log('Generated android-chrome-192x192.png');

        // 512x512 (Android Chrome)
        await sharp(sourceImage)
            .resize(512, 512)
            .toFile(join(outputDir, 'android-chrome-512x512.png'));
        console.log('Generated android-chrome-512x512.png');

        console.log('All favicons generated successfully!');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

generateFavicons();
