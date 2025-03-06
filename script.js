document.getElementById("root").innerHTML = `
<h1>Meri Bewakoof Larki ❤️</h1>
<button onclick="showSecret()">Secret Button</button>
<audio autoplay loop>
    <source src="tumhiho.mp3" type="audio/mp3">
</audio>
<div id="secretMessage" style="display:none;">
    <p>I Love You Meri Bewakoof Larki ❤️</p>
</div>
`;

function showSecret() {
    let password = prompt("Enter Secret Password 🔐:");
    if (password === "bewakooflarki") {
        document.getElementById("secretMessage").style.display = "block";
    } else {
        alert("Galat Password 😏");
    }
}