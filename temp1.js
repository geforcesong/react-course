const arr = [];
arr.push(()=>{
  console.log('Not async function');
})

arr.push(async ()=>{
  console.log('Async function');
})

arr.push(()=>{
  return Promise.resolve(0);
})

for (let f of arr){
  const ret = f();
  if(ret?.then){
    console.log('has then');
  } else {
    console.log('no then');
  }
}