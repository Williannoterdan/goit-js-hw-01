"use strict";
function getElementWidth(content, padding, border) {
  const contentLegth =
    Number.parseFloat(content) +
    2 * (Number.parseFloat(padding) + Number.parseFloat(border));
  if (contentLegth < 0) {
    return `Eror`;
  }
  return contentLegth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
// console.log(getElementWidth("200.213px", "0.12px", "0px"));
// console.log(getElementWidth("-450px", "0px", "0px"));
