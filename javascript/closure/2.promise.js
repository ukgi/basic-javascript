function doAsyncWork() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error('비동기 작업 실패'));
    }
    setTimeout(() => {
      resolve('비동기 작업 완료!');
    }, 2000);
  });
}

const promise = doAsyncWork();

promise.then((res) => console.log(res)).catch(console.error);
