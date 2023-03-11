import * as fs from "fs";

import { Trie } from "./trie.js";

// const word_freq = {};

// const wordFreqFile = fs.readFileSync("en_wikt_words_1_4-64.txt", "utf-8");

// wordFreqFile.split(/\r?\n/).forEach((line) => {
//     let arr = line.split(" ");
//     word_freq[arr[0]] = arr[2];
// });

// let arr = Object.values(word_freq);

// let max = arr[0];
// for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// const wordList = fs.readFileSync("words_alpha.txt", "utf-8");

// const words = {};
// wordList.split(/\r?\n/).forEach((line) => {
//     if (line in word_freq && line.length <= 12) {
//         words[line] =
//             Math.round((word_freq[line] / (max * (line.length-3))) * 10000) / (10000);
//     }
// });

// let words_no_weight = Object.keys(words);

// let trie = new Trie();
// for (let word in words) {
//     trie.insert(word, words[word]);
// }
// trie.sort();

// console.log(trie.suggest("hel"));
// console.log(trie.suggest("held"));
// console.log(trie.suggest("heldentenor"));

// console.log(JSON.stringify(trie));

const jsonFile = fs.readFileSync('./test.json', 'utf8');
const json = JSON.parse(jsonFile)

console.time("load");
let trie = Trie.from(json)
console.timeEnd("load")
console.time("search");
console.log(trie.suggest("hel"));
console.timeEnd("search");

console.time("search2");
console.log(trie.suggest("hop"));
console.timeEnd("search2");
