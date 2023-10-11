function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer();

console.log(counter());
console.log(counter());

// outer를 호출하고 inner함수가 리턴된다
// outer는 함수 정의식이므로 런타임 이전에 함수객체를 만들게 된다.
// 이때 환경레코드 정보에 inner 함수의 정보가 기록이 된다.
// inner 함수의 enviroment 속성값에 현재 실행중인 실행컨텍스트 즉, outer의 정보가 들어가게된다.
// inner 함수를 호출할 때 콜스택에 실행컨텍스트를 생성하고 외부 스코프의 참조값으로 enviroment 속성값에 저장되어있는
// outer 함수의 정보가 들어가게된다.
// 그래서 outer 함수가 콜스택에 팝된 상태임에도 inner 함수는 outer 함수의 내부 환경을 기억하고 변수에 참조할 수 있다.
// 이것이 바로 클로저!
