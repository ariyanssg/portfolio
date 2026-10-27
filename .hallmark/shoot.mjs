// Full-page captures in both themes at phone and desktop widths, for review only.
import { createRequire } from "node:module";
const require = createRequire(process.env.HALLMARK_PUPPETEER + "/package.json");
const puppeteer = require("puppeteer-core");

const base = process.argv[2] ?? "http://localhost:3210";
const routes = (process.argv[3] ?? "/").split(",");
const out = new URL("./shots/", import.meta.url).pathname;
const sizes = { phone: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }, desktop: { width: 1440, height: 900, deviceScaleFactor: 1 } };

const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true });
for (const route of routes) {
  for (const [sizeName, vp] of Object.entries(sizes)) {
    for (const theme of ["light", "dark"]) {
      const page = await browser.newPage();
      await page.setViewport(vp);
      await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: theme }]);
      await page.goto(base + route, { waitUntil: "networkidle0" });
      await new Promise((r) => setTimeout(r, 600));
      const name = `${route === "/" ? "home" : route.replaceAll("/", "-").slice(1)}-${sizeName}-${theme}.png`;
      await page.screenshot({ path: out + name, fullPage: true });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      console.log(name, "horizontal overflow:", overflow);
      await page.close();
    }
  }
}
await browser.close();
