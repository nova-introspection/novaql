import normalize from 'normalize-url';

const postUrl = (url, callback) => {
  const uri = normalize(url, { forceHttps: true });
  console.log(uri);
  const postBody = { uri };
  fetch('http://localhost:3000/api/schema', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBody),
  })
    .then((res) => res.json())
    .then((data) => callback(data));
};

export default postUrl;
