const quotes ["index 0", "index 1", "index 2", "index 3", "index 4"]
const start = new Date("2023-10-25T00:00:00");
const today = new Date();
console.log("start variable " + start);
console.log("today variable " + today);
const total_mili = today - start;
console.log("milliseconds " + total_mili);
const diff_days = Math.floor(total_mili / (1000 * 60 * 60 * 24));
const index = diff_days % quotes.length;
console.log("diff_days " + diff_days);
console.log("index " + index);
