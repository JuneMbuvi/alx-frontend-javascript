export default function handleResponseFromAPI(promise) {
  return promise
  .then((resolvedValue) => {
    console.log('Got a response from the API');
    return ({ status: 200, body: 'success' });
  })
  .catch((rejectionError) => {
    console.log('Got a response from the API');
    return new Error();
  });
}
