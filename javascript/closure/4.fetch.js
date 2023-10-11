const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const getData = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(console.error);
};

getData();
