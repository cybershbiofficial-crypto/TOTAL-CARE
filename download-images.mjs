import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesToDownload = [
  // Hero Images
  { id: 'hero-1', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop&fm=webp' }, // Luxury Mansion Interior
  { id: 'hero-2', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1920&auto=format&fit=crop&fm=webp' }, // Luxury Living Room
  { id: 'hero-3', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop&fm=webp' }, // Luxury Kitchen
  
  // Service Images
  { id: 'srv-renovation', url: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Interior Renovation
  { id: 'srv-commercial', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Commercial Office
  { id: 'srv-fitout', url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Interior Fit-out
  { id: 'srv-kitchen', url: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Kitchen 
  { id: 'srv-bathroom', url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Luxury Bathroom
  { id: 'srv-flooring', url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Hardwood Flooring
  { id: 'srv-painting', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Painting
  { id: 'srv-electrical', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Electrical
  { id: 'srv-plumbing', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop&fm=webp' }, // Plumbing
  { id: 'srv-maintenance', url: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=800&auto=format&fit=crop&fm=webp' }, // AC Maintenance

  // Projects
  { id: 'proj-1', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop&fm=webp' },
  { id: 'proj-2', url: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop&fm=webp' },
  { id: 'proj-3', url: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200&auto=format&fit=crop&fm=webp' },
  { id: 'proj-4', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop&fm=webp' },
  { id: 'proj-5', url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1200&auto=format&fit=crop&fm=webp' },
  { id: 'proj-6', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop&fm=webp' },
];

const downloadDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadImage(img) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(downloadDir, `${img.id}.webp`);
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${img.id}, already exists.`);
      resolve();
      return;
    }
    
    https.get(img.url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, (redirectRes) => {
          const fileStream = fs.createWriteStream(filePath);
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            console.log(`Downloaded ${img.id}`);
            resolve();
          });
          fileStream.on('error', reject);
        }).on('error', reject);
      } else {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          console.log(`Downloaded ${img.id}`);
          resolve();
        });
        fileStream.on('error', reject);
      }
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading high-quality WebP luxury images from Unsplash...');
  for (const img of imagesToDownload) {
    await downloadImage(img);
  }
  console.log('All images downloaded successfully.');
}

run();
