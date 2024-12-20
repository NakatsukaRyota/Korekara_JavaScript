const forHere = confirm("店内ご利用ですか？");
const taxRate = calc(forHere);
console.log("消費税率 " + taxRate);

function calc(here) {
  let tax = 1.08;
  if(here) {
    tax = 1.1;
  }
  return tax;
}