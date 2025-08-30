const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, i like you.\n\n I always admire from afar, from the crowd I always look for you, I always like being near you, I don't know why I always think about you but in fact it's like that\n\n You know? I always pray for you all the time, I always tell my friends about you, and I'm always there for you whenever you need me.\n\nAnyway, I hope you're doing okay, i have a crush on you, i wish you had feelings like me :).`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

