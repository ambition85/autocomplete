function Node(weight) {
    this.w = weight;
    this.e = 0;
    this.c = {};
}

export class Trie {
    constructor() {
        this.root = new Node(0);
    }

    insert(word, weight) {
        let curr = this.root;

        for (let character of word) {
            if (curr.c[character] === undefined) {
                curr.c[character] = new Node(0);
            }
            curr = curr.c[character];
        }
        curr.w = weight;
        curr.e = 1;
    }

    sort(curr = this.root) {
        const sorted = Object.fromEntries(
            Object.entries(curr.c).sort(([, a], [, b]) => b.w - a.w)
        );
        curr.c = sorted;
        for (let char in curr.c) {
            this.sort(curr.c[char]);
        }
    }

    find(prefix, curr, suggestions, limit) {
        if (suggestions.length >= limit) {
            return;
        }
        if (curr.e) {
            suggestions.push({ name: prefix, weight: curr.w });
        }
        if (!Object.keys(curr.c).length) {
            return;
        }
        for (let char in curr.c) {
            this.find(prefix + char, curr.c[char], suggestions, limit);
        }
    }

    suggest(prefix, limit = 100) {
        let len = 0;
        let curr = this.root;
        while (prefix.length > len) {
            if (!curr.c[prefix[len]]) {
                return [];
            }
            curr = curr.c[prefix[len]];
            len++;
        }
        const suggestions = [];
        this.find(prefix, curr, suggestions, limit);
        suggestions.sort((a, b) => (a.weight > b.weight ? -1 : 1));
        return suggestions.map((a) => ({ name: a.name, char: a.name }));
    }

    static from(json) {
        return Object.assign(new Trie(), json);
    }
}
