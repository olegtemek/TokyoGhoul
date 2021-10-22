var i = 1007,
   script = document.getElementById('script'),
   timer,
   music = new Audio('./ghoul.mp3');



document.getElementById('btn').onclick = function () {
   timer = setInterval(ghoul, 50)
   ghoulMusic();
}


function ghoulMusic() {
   music.play();
}

function ghoul() {
   i -= 7;
   let p = document.createElement('p');
   script.append(p)
   p.innerHTML = i + ' - 7';
   scrolldown(script.lastChild);
   if (i <= 6) {
      clearInterval(timer);
      music.pause();
      script.style.background = "none";
      close();
   }
}
function close() {
   script.innerHTML = "";
   window.location.reload();
}

function scrolldown(e) {
   window.scroll({
      left: 0,
      top: e.offsetTop
   })
}