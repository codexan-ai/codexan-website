import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "content");

export function readJSON(relPath) {
  const file = path.join(root, relPath);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function readCollection(folder) {
  const dir = path.join(root, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
