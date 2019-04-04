<template>
  <div class="hello">
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
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  width: 800px;
  margin: 0 auto;
}
</style>
