import fs from "node:fs";

export function saveToJSONFile<T>(file: string, db: T): void {
    fs.writeFileSync(file, JSON.stringify(db, null, 2), {
        encoding: 'utf-8',
    });
}
