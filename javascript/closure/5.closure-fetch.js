function fetchData() {
  let data = null;

  return (url) => {
    if (!data) {
      data = fetch(url)
        .then((res) => res.json())
        .then((json) => {
          data = json;
          return json;
        })
        .catch(console.error);
    }
    return data;
  };
}

const getData = fetchData();

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => console.log(data))
  .catch(console.error);

// 데이터는 리턴하는 함수로만 접근이 가능하다 (정보 은닉)
// 기능의 역할이 분명해진다 (데이터 페칭, 데이터 받아오기)
// 프로미스를 반환하기때문에 후속처리에도 매우 편리함
// 또한 데이터가 있는경우에는 데이터를 그대로 반환하니까 API 호출횟수도 줄일 수 있다.
