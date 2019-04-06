<template>
  <div id="container">
    <v-data-table :headers="headers" :items="players" class="table">
      <template v-slot:items="props">
        <td>{{ props.item.rank }}</td>
        <td>{{ props.item.username }}</td>
        <td class="text-xs-right">{{ props.item.TKPasses }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Rank",
          align: "left",
          sortable: true,
          value: "rank"
        },
        {
          text: "Username",
          align: "left",
          sortable: false,
          value: "username"
        },
        { text: "TK Passes", value: "TKPasses" }
      ],
      players: [
        {
          rank: "1",
          username: "MLGxPwnentz",
          TKPasses: "3"
        },
        {
          rank: "2",
          username: "OstrichGOD.NBD",
          TKPasses: "42069"
        }
      ]
    };
  }
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}

#container {
  flex-basis: auto; /* default value */
  flex-grow: 1;
  flex: 2 1 auto;
}

.table {
  /* color: rgba(0, 0, 0, 0.87); */

  border-radius: 4px;
  margin: 40px;
  max-width: 800px;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  margin: 1em 1em;
}
</style>
