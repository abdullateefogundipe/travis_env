const FAVOURITE_FOOD = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVOURITE_FOOD} is my favourite food`);
    await sleep(5000);
  }
}

main();
