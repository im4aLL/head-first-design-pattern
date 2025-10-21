abstract class DataParser {
  // Template Method
  parseFile(): void {
    this.readFile();
    this.parseData();
    this.processData();
    this.saveData();
  }

  protected readFile() {
    console.log("Reading file...");
  }

  protected processData() {
    console.log("Processing records...");
  }

  protected saveData() {
    console.log("Saving to database...");
  }

  // Steps subclasses must define
  protected abstract parseData(): void;
}

// Concrete subclass
class CSVParser extends DataParser {
  protected parseData() {
    console.log("Parsing CSV file...");
  }
}

class JSONParser extends DataParser {
  protected parseData() {
    console.log("Parsing JSON file...");
  }
}

// Usage
const csvParser = new CSVParser();
csvParser.parseFile();
// Reading file...
// Parsing CSV file...
// Processing records...
// Saving to database...

const jsonParser = new JSONParser();
jsonParser.parseFile();
// Reading file...
// Parsing JSON file...
// Processing records...
// Saving to database...
