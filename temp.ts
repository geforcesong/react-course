async function Test() {
  const a = 'Hello';

  const b: string = a as unknown as string;

  console.log(a, b);
  await delay(3);
  console.log('hello');
}

async function delay(second: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, second * 1000);
  });
}

Test();
