// keydown, keyup, keypress

document.addEventListener('keyup', (e) => {
  if (e.key == 'm' && e.ctrlKey) {
    console.log('hello');
  }
  //   //   console.log('Code', e.code);
  //   //   console.log('Key', e.key);
  //   //   console.log('keyCode', e.keyCode);
});
