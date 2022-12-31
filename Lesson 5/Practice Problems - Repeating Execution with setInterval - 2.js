function startCounting() {
  let i = 1;
  
  let id = setInterval(() => {
    console.log(i);
    i += 1;
  }, 1000);

  return id;
}

function stopCounting(id) {
  setTimeout(() => clearInterval(id), 5000);
}

let id = startCounting();

stopCounting(id);