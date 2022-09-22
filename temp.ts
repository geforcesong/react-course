async function delay(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function* numGenerator(times: number) {
  while (times--) {
    await delay(2);
    yield Math.floor(Math.random() * 100);
  }
}

(async () => {
  for await (const d of numGenerator(5)) {
    console.log('generated: ', d);
  }
})();
