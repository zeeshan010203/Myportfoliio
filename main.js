const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url = "https://imessageplex.com/user/message/zeeshan";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
      apiKey:
        "e65f7002f3fe3244e1bbca810c8deee174b48c2a3f988c959f65b8b423f98408",
    }),
  });

  if (response.ok) {
    alert("Message was sent successfully!");
  }
});

var typed = new Typed(".text", {
  strings: ["Web developer", "Game Developer", "Infrastructure"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}
// document.getElementById("toggleButton").onclick = function () {
//   var englishContent = document.getElementById("englishContent");
//   var japaneseContent = document.getElementById("japaneseContent");

//   if (englishContent.style.display === "none") {
//     englishContent.style.display = "block";
//     japaneseContent.style.display = "none";
//     document.getElementById("toggleButton").textContent = "Switch to Japanese";
//   } else {
//     englishContent.style.display = "none";
//     japaneseContent.style.display = "block";
//     document.getElementById("toggleButton").textContent = "Switch to English";
//   }
// };
// document.querySelector(".square").addEventListener("dblclick", function () {
//   document.querySelector(".navbar").classList.toggle("active");
// });
