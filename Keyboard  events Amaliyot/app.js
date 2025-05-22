const insret = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insret.innerHTML = `

    <div class = "key">
            ${e.key == ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>
    <div class = "key">
            ${e.keyCode}
        <small>event.keycode</small>
    </div>
    <div class = "key">
            ${e.code}
        <small>event.code</small>
    </div>

`;
});
//   console.log('Event key', e.key);
//   console.log('Event key Code', e.keyCode);
//   console.log('Event Code', e.code);
