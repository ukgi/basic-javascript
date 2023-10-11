function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('비동기 통신완료');
    }, 2000);
  });
}

function print() {
  console.log('setteld될때까지 이 코드는 기다려주나요?');
}

async function main() {
  const message = await getData();
  print();
}

main();
