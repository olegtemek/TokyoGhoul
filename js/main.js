var btn = document.getElementById('btn'),
   i = 1007,
   timer,
   content = document.getElementById('content'),
   music = new Audio('./ghoul.mp3');

btn.onclick = function () {
   document.getElementById('video').style.display = "block";
   ghoulMusic();
   timer = setInterval(ghoul, 125)
}


function ghoulMusic() {
   music.play();
}
function ghoul() {
   i -= 7;
   let p = document.createElement('p');
   content.append(p);
   p.innerHTML = i + ' - 7'
   scrolldown(content.lastChild);
   if (i <= 6) {
      clearInterval(timer);
      window.location.reload();
   }
}


function scrolldown(e) {
   window.scroll({
      left: 0,
      top: e.offsetTop
   })
}