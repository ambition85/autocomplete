import * as fs from "fs";

import { Trie } from "../public/trie.js";

const word_freq = {};

const wordFreqFile = fs.readFileSync("./en_wikt_words_1_4-64.txt", "utf-8");

wordFreqFile.split(/\r?\n/).forEach((line) => {
    let arr = line.split(" ");
    word_freq[arr[0]] = arr[2];
});

let arr = Object.values(word_freq);

let max = arr[0];
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

const wordList = fs.readFileSync("./words_alpha.txt", "utf-8");

const words = {};
wordList.split(/\r?\n/).forEach((line) => {
    if (line in word_freq && line.length <= 12) {
        words[line] =
            Math.round((word_freq[line] / (max * (line.length - 3))) * 10000) /
            10000;
    }
});

let trie = new Trie();
for (let word in words) {
    trie.insert(word, words[word]);
}
trie.sort();

console.time("save");
fs.writeFile("../public/trie.json", JSON.stringify(trie), (err) => {
    if (err) {
        console.error(err);
    }
});
console.timeEnd("save");
