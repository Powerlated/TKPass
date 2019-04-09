<template>
  <div id="container">
    <v-data-table :headers="headers" :items="players" class="table">
      <template v-slot:items="props">
        <!-- <td>{{ props.item.rank }}</td> -->
        <td>{{ props.item.username }}</td>
        <td class="text-xs-right">{{ props.item.TKPasses }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    let axios = require("axios");

    let playerData = [
      // {
      //   username: "MLGxPwnentz",
      //   TKPasses: "3"
      // },
      // {
      //   username: "OstrichGOD.NBD",
      //   TKPasses: "42069"
      // },
      // {
      //   username: "wow_lag32",
      //   TKPasses: "-7"
      // },
      // {
      //   username: "kambel_soup",
      //   TKPasses: "95"
      // },
      // { username: "Plaute_Optime", TKPasses: "∞" }
    ];

    console.log("Retrieving stats from API...");
    axios.get("http://powerlated.net:8081/api/stats").then(response => {
      let responseData = response.data;
      for (const key in responseData) {
        console.log(
          `Adding entry to data table - K:${key} V:${responseData[key]}`
        );
        playerData.push({ username: key, TKPasses: responseData[key] });
      }

      console.log(response);
    });

    // let times = 10;
    // for (var i = 0; i < times; i++) {
    //   playerData.push({ username: "test", TKPasses: "test" });
    // }

    return {
      headers: [
        // {
        //   text: "Rank",
        //   align: "left",
        //   sortable: true,
        //   value: "rank"
        // },
        {
          text: "Username",
          sortable: false,
          value: "username"
        },
        { text: "TK Passes", value: "TKPasses" }
      ],
      players: playerData,
      rowsPerPageItems: [10, 20, 30, 40],
      pagination: {
        rowsPerPage: 20
      }
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

  flex-basis: auto; /* default value */
  flex-grow: 1;
  flex: 2 1 auto;
}

.table {
  /* color: rgba(0, 0, 0, 0.87); */

  margin: 40px;
  max-width: 800px;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  margin: 1em 1em;
}
</style>
