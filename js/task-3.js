function getElementWidth(content, padding, border) {return content + padding * 2 + border * 2 + 'px'};
let content = 50;
let padding = 10;
let border = 5;

console.log(getElementWidth(50, 8, 4)); 
console.log(getElementWidth(60, 12, 8.5));
console.log(getElementWidth(200, 0, 0));