
/*fetch("../components/footer.html")
	.then(response => response.text())
	.then(html => {
		document.getElementById("footer").innerHTML = html;
	});

fetch("../components/nav.html")
	.then(responce => responce.text())
	.then(html => {
		document.getElementById("nav").innerHTML = html;
	});*/


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

//画像動かし
const input = document.getElementById("placeOfBirth");
const container = document.getElementById("birthPlaceImage");
const img = container.querySelector("img");

// クリックでふんわり表示
input.addEventListener("click", () => {
  container.classList.toggle("active");
});

// 画像ホバーで切替
img.addEventListener("mouseenter", () => {
  img.dataset.original = img.src;
  img.src = img.dataset.hover;
});

img.addEventListener("mouseleave", () => {
  img.src = img.dataset.original;
});

//ギャラリー用
const images = document.querySelectorAll(".gallery img");
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

images.forEach(img => {
  img.addEventListener("click", () => {
    if (img.classList.contains("active")) {
      img.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      images.forEach(i => i.classList.remove("active"));
      img.classList.add("active");
      overlay.classList.add("active");
    }
  });
});

overlay.addEventListener("click", () => {
  images.forEach(i => i.classList.remove("active"));
  overlay.classList.remove("active");
});


