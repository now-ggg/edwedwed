
// 3kh0 made most of this its mostly just edited i dont know how to use json files so ummmmmmmmmmmmm

    fetch('/json/g.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.classes');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('homework');
      gamecontainmentchamber.className = 'class';
      gamecontainmentchamber.innerHTML = `<img src="${game.gameroot + "/" + game.gameicon}" onerror="this.src='./imgs/noicon.png'"/>`;
      gamecontainmentchamber.innerHTML += `<h1>${game.game}</h1>`;
      gamesbutton.appendChild(gamecontainmentchamber);

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${game.gameroot}`;
      };
      gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
        gamesbutton.classList.remove('hidden');
        gamerdiv.classList.add('hidden');
        gamerframer.src = '';
      });
      gamerNavigaton.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
            gamerframer.requestFullscreen();
        }
    });
  });
  })
  .catch((e) => {
    alert('Error Classes Not Loaded');
    alert(e);
  });

  function ddiissccoorrdd() {
        var urlObj = new window.URL(window.location.href);
        var url = window.location.hostname + "/others/wb.html";

        if (url) {
          win = window.open();
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = url;
          win.document.body.appendChild(iframe);
        }
  }

  function sm64() {
    var urlObj = new window.URL(window.location.href);
    var url = window.location.hostname + "/files/64/index.html";

    if (url) {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }
}

function mc15() {
  var urlObj = new window.URL(window.location.href);
  var url = window.location.hostname + "/files/15/index.html";

  if (url) {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
  }
}

function mc18() {
  var urlObj = new window.URL(window.location.href);
  var url = window.location.hostname + "/files/18/index.html";

  if (url) {
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
  }
}