<template>
    <div id="create-relatorio">
        <h1>Cadastrar Relatório</h1>

        <p><router-link :to="{ name: 'exibirRelatorio' }">Retornar</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="addRelatorio">
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
                <button class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
import Notification from "./notifications.vue";

export default {
  data() {
    return {
      relatorio: {},
      notifications: []
    };
  },

  methods: {
    addRelatorio: function() {
      // Validation
      var valor = parseFloat(this.relatorio.valor);
      if (isNaN(valor)) {
        this.notifications.push({
          type: "danger",
          message: "Price must be a number"
        });
        return false;
      } else {
        this.relatorio.valor = this.relatorio.valor;
      }

      this.$http
        .post("http://localhost:3000/api/relatorio/create", this.relatorio, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(
          response => {
            this.notifications.push({
              type: "success",
              message: "Relatório cadastroado com sucesso!"
            });
          },
          response => {
            this.notifications.push({
              type: "error",
              message: "Relatório não cadastrado."
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
