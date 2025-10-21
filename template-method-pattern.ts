/*
Imagine you're building a data parser system.
You need to parse different file types - like CSV, JSON, and XML - but the steps are mostly the same:

Read the file
Parse the data
Process the records
Save to database

If you write each parser manually, you'll have duplicate logic everywhere:
*/

class CSVParser {
  parseFile() {
    console.log("Reading file...");
    console.log("Parsing CSV...");
    console.log("Processing records...");
    console.log("Saving to database...");
  }
}

class JSONParser {
  parseFile() {
    console.log("Reading file...");
    console.log("Parsing JSON...");
    console.log("Processing records...");
    console.log("Saving to database...");
  }
}

/*
Repeated logic (read, process, save).
Each class duplicates algorithm structure.
Hard to maintain or add steps later.
*/
