class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let currentPrefix = "";
    let candidates = this.products;

    for (const char of searchWord) {
      currentPrefix += char;
      candidates = candidates.filter(product => product.startsWith(currentPrefix));
      result.push(candidates.slice(0, 3));
    }

    return result;
  }
}

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestionSystem = new SearchSuggestionSystem(products);
const suggestions = suggestionSystem.getSuggestions(searchWord);

console.log(JSON.stringify(suggestions, null, 2));