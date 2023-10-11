// 1
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson('no-such-user.json').catch(alert); // Error: 404

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(response.status);
}

// 2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
  let name = prompt('GitHub username을 입력하세요.', 'iliakan');

  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`이름: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert('일치하는 사용자가 없습니다. 다시 입력해 주세요.');
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();

// 3
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // ...코드...
  // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
  // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!

  wait().then(console.log).catch(console.error);
}
