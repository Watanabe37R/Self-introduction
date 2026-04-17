
fetch("../components/footer.html")
	.then(response => response.text())
	.then(html => {
		document.getElementById("footer").innerHTML = html;
	});

fetch("../components/nav.html")
	.then(responce => responce.text())
	.then(html => {
		document.getElementById("nav").innerHTML = html;
	});


const btn = document.getElementById("menu");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
	nav.classList.toggle("hidden");
});


const messages = ["\n　　＼ﾀﾋﾟｵｶｳﾒｪｽ／\n.　　　　　　　　 |￣\n　　　( ﾟдﾟ )彡.|\n　　　|　ヽﾉヽr┘\n　　　 ＞＞　'Ｔ", "\n\n.　　　　　　　　 |￣\n.　　　(　ﾟдﾟ)　.|\n　　　|　ヽﾉヽr┘\n　　　 ＞＞　'Ｔ"];
const hoverAA=["　∧　ﾓｸﾞﾓｸﾞ\n　/´｡ `ーァ ﾄﾞｰﾓ\n　{○々ﾟ0l´  FBIﾃﾞｽ\n／　っﾟдﾟ )ｱｯｰ!\n|　　　 / ヽﾉヽ\n＞＞　＞＞"];


const aa = document.getElementsByClassName("AAmove")[0];

let index = 0;
let timer = null;

// アニメ開始

function startAnimation(immediate = false) {
  if (immediate) {
    aa.textContent = messages[index]; // ← 即反映
  }

  timer = setInterval(() => {
    index = (index + 1) % messages.length;
    aa.textContent = messages[index];
  }, 1000);
}


// アニメ停止
function stopAnimation() {
  clearInterval(timer);
}

// 初期表示＆開始
aa.textContent = messages[0];
startAnimation();

// マウスオーバー
aa.addEventListener("mouseenter", () => {
  stopAnimation();
  aa.textContent = hoverAA;
});

// マウスアウト

aa.addEventListener("mouseleave", () => {
  stopAnimation();
  startAnimation(true); // ← ここが肝！
});


