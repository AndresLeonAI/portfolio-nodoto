// ─── Lightweight barrel: only data assets that require JS parsing ─────────────
// Videos (.webm/.mp4) moved to /public/videos/ — referenced via string paths.
// This prevents Vite from bundling ~3.1MB of binary data into the JS output.
import earthLottie from './earth.json';

export { earthLottie };
