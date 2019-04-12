<template>
  <v-snackbar v-model="snackbar" :left="true" timeout="3000">
    Success! Form submitted.
    <v-btn color="green" flat @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: true
    };
  }
};
</script>
