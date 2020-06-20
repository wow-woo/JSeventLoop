const main = document.querySelector("main");

main.addEventListener("click", cb);

function cb() {
  const pp = new Promise((resolve, reject) => {
    console.log(resolve);
    resolve();
  });
  pp.then();

  console.log("a");
  move();
  requestAnimationFrame(cb);
  console.log("b");
}
main.click();

function move() {
  let left = main.style.left.slice(0, -2);
  let num = 0;
  if (left) {
    num = Number.parseInt(left);
  }
  let currentLeft = (main.style.left = `${num + 1}px`);
  console.log({ left, num, currentLeft });
}

console.log("script");
