const content =
  "Hi!👀 \n I'm Front-End Student. \n Welcome to Myoming💚 World ";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 250); //0.25초//

if (i < content.length) {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  setTimeout(typing, 250);
} else {
  cursor.style.animation = "none";
  cursor.style.display = "none";
}
};

typing();
