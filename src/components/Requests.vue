<template>
  <div id="forms">
    <SupportTicketForm/>
    <TKPassRequestForm/>
  </div>
</template>

<script>
import TKPassRequestForm from "./forms/TKPassRequest.vue";
import SupportTicketForm from "./forms/SupportTicket.vue";
export default { components: { TKPassRequestForm, SupportTicketForm } };
</script>

<style>
#forms {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start
}

#forms .v-card {
  flex-basis: auto; /* default value */
  flex-grow: 1;
  flex: 2 1 auto;
}

.v-messages__message {
  color: rgba(255, 0, 0, 0.938);
}
.v-card {
  /* color: rgba(0, 0, 0, 0.87); */

  border-radius: 4px;
  padding: 40px;
  max-width: 800px;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  margin: 1em 1em;
}
</style>


