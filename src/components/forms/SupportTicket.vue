<template>
  <div id="container">
    <v-card id="card">
      <h1>Submit Support Ticket</h1>
      <form>
        <v-text-field
          v-model="username"
          v-validate="'required|max:15'"
          :counter="15"
          :error-messages="errors.collect('username')"
          label="Username"
          data-vv-name="username"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
        <h3>Describe the issue that you have in detail, so we can find the issue and fix it.</h3>
        <v-textarea
          v-model="textarea"
          v-validate="'required'"
          :items="items"
          :error-messages="errors.collect('textarea')"
          data-vv-name="textarea"
          required
        ></v-textarea>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    username: "",
    email: "",
    textarea: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        username: {
          required: () => "Name can not be empty",
          max: "Uplay: 15 characters or less"
          // custom messages
        },
        select: {
          required: "Select field is required"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        let ComponentClass = Vue.extend(FormSubmittedSnackBar);

        let snackbarDiv = document.createElement("div");
        this.$el.appendChild(snackbarDiv);

        new ComponentClass().$mount(snackbarDiv);
      }
    },
    clear() {
      this.username = "";
      this.email = "";
      this.textarea = null;
      this.$validator.reset();
    }
  }
};
</script>