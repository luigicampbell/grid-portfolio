let wrapperMenu = document.querySelector('.wrapper-menu');

let x = document.getElementById('navbar').style.height;
console.log(x);
function openNav() {
  x = '100%';
  console.log(`opened ${x}`);
  wrapperMenu.classList.toggle('open');
}

function closeNav() {
  console.log(`closed ${x}`);
  wrapperMenu.classList.toggle('open');
}

function toggleOverlay(){
  if (x === '0%'){
    console.log(`x should be 0%: ${x}`);
    openNav();
  }
  else if (x === '100%'){
    console.log(`x should be 100%: ${x}`);
    closeNav();
  }
}
