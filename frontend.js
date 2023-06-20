fetch('/api')
  .then(response => response.text())
  .then(data => {
    const currentDate = new Date().toLocaleString();
    console.log(`${currentDate} ${data}`);
  })
  .catch(error => console.error(error));
