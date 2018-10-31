<template>
    <div>
        <h1>Editar Relatório</h1>

        <p><router-link :to="{ name: 'exibirRelatorio' }">Retornar</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="editRelatorio">
            <div class="form-group">
                <label name="relatorio_id">ID</label>
                <input type="text" class="form-control" disabled v-model="relatorio.id" id="relatorio_id">
            </div>

            <div class="form-group">
                <label name="relatorio_idEmpresa">Empresa</label>
                <input type="text" class="form-control" v-model="relatorio.idEmpresa" id="relatorio_idEmpresa" required>
            </div>

             <div class="form-group">
                <label name="relatorio_idUsuario">Usuário</label>
                <input type="text" class="form-control" v-model="relatorio.idUsuario" id="relatorio_idUsuario" required>
            </div>

            <div class="form-group">
                <label name="relatorio_valor">Valor</label>
                <input type="text" class="form-control" v-model="relatorio.valor" id="relatorio_valor" required>
            </div>

            <div class="form-group">
                <label name="relatorio_dataCriacao">Data Criação</label>
                <input type="text" class="form-control" v-model="relatorio.dataCriacao" id="relatorio_dataCriacao" required>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Alterar</button>
            </div>
        </form>
    </div>
</template>

<script>
import Notification from "./notifications.vue";

export default {
  name: "EditarRelatorio",
  data() {
    return {
      relatorio: {},
      notifications: []
    };
  },

  created: function() {
    this.getRelatorio();
  },

  methods: {
    getRelatorio: function() {
      this.$http
        .get("http://localhost:3000/api/relatorio/" + this.$route.params.id)
        .then(
          response => {
            this.relatorio = response.body;
          },
          response => {}
        );
    },

    editRelatorio: function() {
      // Validation
      var valor = parseFloat(this.relatorio.valor);
      if (isNaN(valor)) {
        this.notifications.push({
          type: "danger",
          message: "Price must be a number"
        });
        return false;
      }

      this.$http
        .patch(
          "http://localhost:3000/api/relatorio/edit/" + this.$route.params.id,
          this.relatorio,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(
          response => {
            this.notifications.push({
              type: "success",
              message: "Relatorio alterado com sucesso"
            });
          },
          response => {
            this.notifications.push({
              type: "error",
              message: "Relatorio não alterado"
            });
          }
        );
    }
  },

  components: {
    notification: Notification
  }
};
</script>
