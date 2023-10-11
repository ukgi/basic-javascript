function f9() {
  let a = 10;
  const f10 = function (c) {
    return a + b + c;
  };
  let b = 20;
  return f10;
}

const f11 = f9();
console.log(f11(30));

// 클로저의 실용사례
