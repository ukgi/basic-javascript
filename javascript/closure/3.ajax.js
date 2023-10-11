const xhr = new XMLHttpRequest();

const promise = new Promise((resolve, reject) => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(new Error(`Request failed with status ${xhr.status}`));
    }
  };
});

xhr.open('GET', 'url');
xhr.send();

promise.then((data) => console.log(data)).catch(console.error);

// 비동기로직은 xhr.onload 이벤트 핸들러에서 이루어진다.
// 그렇기 때문에 프로미스 로직 안에 xhr.onload의 이벤트 핸들러를 작성한다.
// 응답이 오면 이벤트핸들러가 작동할 것이고, 비동기통신에 대한 후속처리를 진행할 수 있다.
