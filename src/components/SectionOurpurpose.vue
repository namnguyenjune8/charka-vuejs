<template >
   <section class="invitation_template_section flex justify-center">
        <div class="mx-auto max-w-2xl text-center ">
          <h2 class="font-inherit not-italic text-sm tracking-tight text-slate-900 sm:text-sm">OUR PURPOSE
          </h2>
          <p class="font-inherit not-italic font-normal mt-4 text-4xl tracking-tight text-black">We are helping people to find
              love and courage in their hearts to live with
              dignity and 
              <span class="typed-text decoration-1"></span><span class="cursor">&nbsp;</span>
          </p>
          
        </div>
        
    
      </section>
</template>
<script>
export default {
  mounted() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["purpose.", "patience.", "hornestly."];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
  },
};
</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #000;
  color: #eee;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container p {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}
.container p span.typed-text {
  font-weight: normal;
  color: #dd7732;
}
.container p span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
.container p span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0%  { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #ccc; }
}

</style>