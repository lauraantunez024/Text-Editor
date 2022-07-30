import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Update DB")
  const jateDb = await openDB("jate", 1);
  const text = jateDb.transaction("jate", "readwrite");
  const store = text.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("Database: ", result.value);
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');
  console.log("Get DB");
  const jateDb = await openDB("jate", 1);
  const text = jateDb.transaction("jate", "readonly");
  const store = text.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  result
    ? console.log("Results:", result.value)
    : console.log("No data found")
  return result.value



initdb();
