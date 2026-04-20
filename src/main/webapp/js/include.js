
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

const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
	menu.classList.toggle("active");
});
