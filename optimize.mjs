import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const SRC_DIR = "./src/assets";
const DEST_DIR = "./public/images";

async function optimizeImages() {
  try {
    await fs.mkdir(DEST_DIR, { recursive: true });
    
    const files = await fs.readdir(SRC_DIR);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;
      
      const srcPath = path.join(SRC_DIR, file);
      const filenameBase = path.basename(file, path.extname(file));
      const destPath = path.join(DEST_DIR, `${filenameBase}.webp`);
      
      console.log(`Optimizing ${file} -> ${destPath}`);
      
      await sharp(srcPath)
        .webp({ quality: 80, effort: 6 })
        .resize(1920, null, { withoutEnlargement: true }) // max width 1920
        .toFile(destPath);
    }
    console.log("All images from src/assets optimized to public/images.");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
