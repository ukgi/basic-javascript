function getData() {
  return new Promise((resolve, reject) => {
    $.get('url주소/products/1', (res) => {
      if (res) {
        resolve(res);
      } else {
        reject(new Error('Request is failed'));
      }
    });
  });
}

getData()
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(console.log('finally!'));
