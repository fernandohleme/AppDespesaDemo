<template>
<div>
        <h1>Relatórios</h1>
        <div class="form-group">
            <input type="text" name="search" v-model="relatorioSearch" placeholder="Search relatorios" class="form-control" v-on:keyup="searchRelatorios">
        </div>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Empresa</td>
                <td>Valor</td>
                <td>Data Criação </td>
            </tr>
            </thead>

            <tbody>
                <!-- <tr v-for="relatorio in relatorios" :key="relatorio.id">
                    <td>{{ relatorio.id }}</td>
                    <td>{{ relatorio.idEmpresa }}</td>
                    <td>{{ relatorio.idUsuario }}</td>
                    <td>{{ relatorio.valor }}</td>
                    <td>{{ relatorio.valor }}</td>
                    <td>
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: "ListarRelatorio",
  data() {
    return {
      relatorios: [],
      originalRelatorios: [],
      relatorioSearch: ""
    };
  },

  created: function() {
    this.fetchRelatorioData();
  },

  methods: {
    fetchRelatorioData: function() {
      this.$http.get("http://localhost:3000/api/relatorios").then(
        response => {
          this.relatorios = response.body;
          this.originalRelatorios = this.relatorios;
        },
        response => {}
      );
    },

    searchRelatorios: function() {
      if (this.relatorioSearch == "") {
        this.relatorios = this.originalRelatorios;
        return;
      }

      var searchedRelatorios = [];
      for (var i = 0; i < this.originalRelatorios.length; i++) {
        var relatorioName = this.originalRelatorios[i]["name"].toLowerCase();
        if (relatorioName.indexOf(this.relatorioSearch.toLowerCase()) >= 0) {
          searchedRelatorios.push(this.originalRelatorios[i]);
        }
      }

      this.relatorios = searchedRelatorios;
    }
  }
};
</script>
