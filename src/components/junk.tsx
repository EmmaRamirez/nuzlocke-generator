const url = 'https://jsonplaceholder.typicode.com/users';

(async() => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log('Boo');
  }
});