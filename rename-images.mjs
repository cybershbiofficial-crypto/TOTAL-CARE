import fs from "fs";
import path from "path";

const sourceDir = path.join(process.cwd(), "new-images-assets from-client");
const targetDir = path.join(process.cwd(), "src", "assets", "client");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Based on visual inspection
const mapping = {
  "WhatsApp Image 2026-07-14 at 1.24.06 AM.jpeg": "kitchen-renovation.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (1).jpeg": "interior-fitout.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (2).jpeg": "ac-maintenance.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (3).jpeg": "ac-installation.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (4).jpeg": "tv-wall-mount.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (5).jpeg": "carpenter-woodwork.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (6).jpeg": "carpenter-cutting.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (7).jpeg": "ceiling-gypsum.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (8).jpeg": "plumbing-sink.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (9).jpeg": "plumbing-under-sink.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (10).jpeg": "electrical-panel.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (11).jpeg": "electrical-wiring.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (12).jpeg": "door-installation.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (13).jpeg": "flooring-tiling.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (14).jpeg": "painting-yellow.jpeg",
  "WhatsApp Image 2026-07-14 at 1.24.06 AM (15).jpeg": "painting-wall.jpeg",
};

for (const [oldName, newName] of Object.entries(mapping)) {
  const oldPath = path.join(sourceDir, oldName);
  const newPath = path.join(targetDir, newName);

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldName} to ${newName}`);
  } else {
    console.warn(`File not found: ${oldPath}`);
  }
}
console.log("Image mapping complete.");
