<template>
  <div>
    <img alt="R6S Logo" id="logo" src="../../assets/r6_logo.png">
    <div class="text">
      <h1>TEAM KILL PASS TRACKER</h1>
      <p>
        The beginnings of an EPIC Rainbow Six Siege (and other
        multiplayer game) Team Kill Pass system.
      </p>

      <h2>Why did I make this?</h2>
      <p>
        To be completely
        <s>hecking</s> honest, I do not know.
      </p>
      <p>
        Actually, to be realer than real, I made this system because I
        was inspired by a guy named yeboizaidey on Discord to do so. He
        sorta started a TK Pass "honor system" that just grew into a
        giant meme. Zaidey also tried to convince me that making this
        website was all a big waste of time, but I did not listen
        because I am always up for a challenge.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  max-width: 95%;
  width: 800px;

  margin: 0 auto;

  font-size: calc(30px);
  text-shadow: -1px -1px 0 rgb(34, 34, 34), 1px -1px 0 rgb(34, 34, 34),
    -1px 1px 0 rgb(34, 34, 34), 1px 1px 0 rgb(34, 34, 34);
}

#logo {
  margin-top: 10px;
  animation: App-logo-spin infinite 0.02s linear,
    App-logo-fx infinite 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  pointer-events: none;
  filter: invert(100%) drop-shadow(1px 0px 0 red) drop-shadow(-1px 0px 0 red)
    drop-shadow(0px 1px 0 red) drop-shadow(0px -1px 0 red);

  max-width: 90%;

  word-break: normal;
}

@keyframes App-logo-spin {
  0% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(-3deg);
  }
}

p {
  text-align: left;

  margin-bottom: 40px;
}

.hello {
  margin-bottom: 140px;
}
</style>
