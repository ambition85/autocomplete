function Node(value, weight) {
    this.value = value;
    this.weight = weight;
    this.endOfWord = false;
    this.children = {};
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(word) {
        let curr = this.root;

        for (let character of word) {
            if (curr.children[character] === undefined) {
                curr.children[character] = new Node(character, 1);
            }
            curr = curr.children[character];
        }
        curr.endOfWord = true;
    }

    find(prefix, curr, suggestions, limit) {

        if (curr.endOfWord) {
            suggestions.push(prefix);
            console.log(prefix, suggestions.length);
        }
        if (!Object.keys(curr.children).length || suggestions.length >= limit) {
            return;
        }
        for (let char in curr.children) {
            this.find(
                prefix + char,
                curr.children[char],
                suggestions,
                limit
            );
        }
    }

    suggest(prefix, limit = 1) {
        let len = 0;
        let curr = this.root;
        while (prefix.length > len) {
            if (!curr.children[prefix[len]]) {
                return [];
            }
            curr = curr.children[prefix[len]];
            len++;
        }
        const suggestions = [];
        this.find(prefix, curr, suggestions, limit);
        return suggestions;
    }
}

let list = [
    "hello",
    "dog",
    "hell",
    "cat",
    "a",
    "help",
    "helps",
    "helping",
];
let trie = new Trie();
list.forEach((word) => trie.insert(word));
// console.log(trie.suggest("hel"));
console.log(JSON.stringify(trie));
