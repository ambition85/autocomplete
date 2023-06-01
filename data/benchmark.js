import words from "./words.json" assert { type: "json" };
import { Trie } from "../public/trie.js";
import json from "../src/trie.json" assert { type: "json" };
import { appendFileSync, writeFileSync } from "fs";

const wordList = Object.keys(words);
const trie = Trie.from(json);

let maxTime = 0;

console.log("Benchmark for no limit sorted");
writeFileSync(
    "./data/benchmark_results/benchmark_lim_none_sorted.csv",
    `word,length,time,num_suggestions\n`
);

wordList.forEach((word) => {
    const start = process.hrtime();
    const result = trie.suggest(word.toLowerCase(), Infinity, true);
    const stop = process.hrtime(start);
    const milliseconds = stop[0] * 1000 + stop[1] / 1000000;
    const csv = `${word},${word.length},${milliseconds},${result.length}\n`;
    if (milliseconds > maxTime) {
        maxTime = milliseconds;
        console.log(word, maxTime);
    }
    try {
        appendFileSync(
            "./data/benchmark_results/benchmark_lim_none_sorted.csv",
            csv
        );
    } catch (err) {
        console.error(err);
    }
});

maxTime = 0;

console.log("Benchmark for limit 10 words sorted");
writeFileSync(
    "./data/benchmark_results/benchmark_lim_10_sorted.csv",
    `word,length,time,num_suggestions\n`
);

wordList.forEach((word) => {
    const start = process.hrtime();
    const result = trie.suggest(word.toLowerCase(), 10, true);
    const stop = process.hrtime(start);
    const milliseconds = stop[0] * 1000 + stop[1] / 1000000;
    const csv = `${word},${word.length},${milliseconds},${result.length}\n`;
    if (milliseconds > maxTime) {
        maxTime = milliseconds;
        console.log(word, maxTime);
    }
    try {
        appendFileSync(
            "./data/benchmark_results/benchmark_lim_10_sorted.csv",
            csv
        );
    } catch (err) {
        console.error(err);
    }
});

maxTime = 0;

console.log("Benchmark for no limit unsorted");
writeFileSync(
    "./data/benchmark_results/benchmark_lim_none_unsorted.csv",
    `word,length,time,num_suggestions\n`
);

wordList.forEach((word) => {
    const start = process.hrtime();
    const result = trie.suggest(word.toLowerCase(), Infinity, false);
    const stop = process.hrtime(start);
    const milliseconds = stop[0] * 1000 + stop[1] / 1000000;
    const csv = `${word},${word.length},${milliseconds},${result.length}\n`;
    if (milliseconds > maxTime) {
        maxTime = milliseconds;
        console.log(word, maxTime);
    }
    try {
        appendFileSync(
            "./data/benchmark_results/benchmark_lim_none_unsorted.csv",
            csv
        );
    } catch (err) {
        console.error(err);
    }
});

maxTime = 0;

console.log("Benchmark for limit 10 words unsorted");
writeFileSync(
    "./data/benchmark_results/benchmark_lim_10_unsorted.csv",
    `word,length,time,num_suggestions\n`
);

wordList.forEach((word) => {
    const start = process.hrtime();
    const result = trie.suggest(word.toLowerCase(), 10, true);
    const stop = process.hrtime(start);
    const milliseconds = stop[0] * 1000 + stop[1] / 1000000;
    const csv = `${word},${word.length},${milliseconds},${result.length}\n`;
    if (milliseconds > maxTime) {
        maxTime = milliseconds;
        console.log(word, maxTime);
    }
    try {
        appendFileSync(
            "./data/benchmark_results/benchmark_lim_10_unsorted.csv",
            csv
        );
    } catch (err) {
        console.error(err);
    }
});
