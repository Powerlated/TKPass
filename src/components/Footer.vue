<template>
  <div id="container">
    <div class="footer">
      <p>
        This website is completely unrelated and unaffiliated with Rainbow
        Six, Ubisoft, or any of its properties and IP.
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

<style>
#container {
  padding-top: 50px;
}

.footer {
  box-sizing: border-box;

  border-top: 1px solid gray;

  text-align: center;
  display: block;

  padding-top: 50px;
  padding-bottom: 50px;

  color: lightgray;
}

p {
  width: 100%;
}
</style>
