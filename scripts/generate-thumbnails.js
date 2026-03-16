/**
 * Generates small thumbnails for carousel indicator strips.
 * Run: npm run generate-thumbnails
 * Output: public/<folder>/thumb/<filename> (160px max width, JPEG 80%)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const THUMB_WIDTH = 160;
const JPEG_QUALITY = 80;

const CAROUSEL_FOLDERS = ["vortex", "ajijic", "lakeside-tour"];

async function generateThumbnails() {
  for (const folder of CAROUSEL_FOLDERS) {
    const dir = path.join(publicDir, folder);
    const thumbDir = path.join(dir, "thumb");

    if (!fs.existsSync(dir)) {
      console.warn(`Skipping ${folder}: directory not found`);
      continue;
    }

    fs.mkdirSync(thumbDir, { recursive: true });

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const imageFiles = entries.filter(
      (e) => e.isFile() && /\.(jpe?g|JPG|JPEG|png|PNG|webp|WEBP)$/i.test(e.name),
    );

    for (const file of imageFiles) {
      const inputPath = path.join(dir, file.name);
      const outputPath = path.join(thumbDir, file.name);
      const ext = path.extname(file.name).toLowerCase();

      try {
        const pipeline = sharp(inputPath).resize(THUMB_WIDTH, null, {
          fit: "inside",
          withoutEnlargement: true,
        });

        if (ext === ".png") {
          await pipeline.png({ compressionLevel: 6 }).toFile(outputPath);
        } else if (ext === ".webp") {
          await pipeline.webp({ quality: 80 }).toFile(outputPath);
        } else {
          await pipeline
            .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
            .toFile(outputPath);
        }

        console.log(`  ${folder}/${file.name} → ${folder}/thumb/`);
      } catch (err) {
        console.error(`  ${folder}/${file.name}: ${err.message}`);
      }
    }
  }
}

generateThumbnails().then(
  () => console.log("Thumbnails done."),
  (err) => {
    console.error(err);
    process.exit(1);
  },
);
