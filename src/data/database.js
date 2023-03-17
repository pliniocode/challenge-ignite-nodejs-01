import fs from 'node:fs/promises';

const databasePath = new URL('./db/db.json', import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then((data) => {
        return this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    return fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(search) {
    let data = this.#database ?? [];

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      });
    }

    return data;
  }

  insert(data) {
    if (Array.isArray(this.#database)) {
      this.#database.push(data);
    } else {
      this.#database = [data];
    }

    this.#persist();

    return data;
  }

}