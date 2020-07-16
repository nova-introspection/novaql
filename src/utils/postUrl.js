import normalize from 'normalize-url';

const validURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
};

const postUrl = (url, callback, handleError) => {
  if (!validURL(url)) handleError('Invalid URL');
  else {
    const uri = normalize(url, { forceHttps: true });
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
      .then((data) => callback({ uri, data }))
      .catch((err) => handleError(err));
  }
};

export default postUrl;
