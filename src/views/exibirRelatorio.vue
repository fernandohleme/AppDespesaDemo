<template>
    <div id="exibirRelatorio">
        <h1>Relatorios</h1>

        <p><router-link :to="{ name: 'create_relatorio' }" class="btn btn-primary">Cadastrar Relatorio</router-link></p>

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
                <tr v-for="relatorio in relatorios" :key="relatorio.id">
                    <td>{{ relatorio.id }}</td>
                    <td>{{ relatorio.idEmpresa }}</td>
                    <td>{{ relatorio.idUsuario }}</td>
                    <td>{{ relatorio.valor }}</td>
                    <td>{{ relatorio.valor }}</td>
                    <td>
                        <router-link :to="{name: 'edit_relatorio', params: { id: relatorio.id }}" class="btn btn-primary">Editar</router-link>
                        <router-link :to="{name: 'delete_relatorio', params: { id: relatorio.id }}" class="btn btn-danger">Deletar/router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                relatorios: [],
                originalRelatorios: [],
                relatorioSearch: ''
            }
        },

        created: function()
        {
            this.fetchRelatorioData();
        },

        methods: {
            fetchRelatorioData: function()
            {
                this.$http.get('http://localhost:3000/api/relatorios').then((response) => {
                    this.relatorios = response.body;
                    this.originalRelatorios = this.relatorios;
                }, (response) => {

                });
            },

            searchRelatorios: function()
            {
                if(this.relatorioSearch == '')
                {
                    this.relatorios = this.originalRelatorios;
                    return;
                }

                var searchedRelatorios = [];
                for(var i = 0; i < this.originalRelatorios.length; i++)
                {
                    var relatorioName = this.originalRelatorios[i]['name'].toLowerCase();
                    if(relatorioName.indexOf(this.relatorioSearch.toLowerCase()) >= 0)
                    {
                        searchedRelatorios.push(this.originalRelatorios[i]);
                    }
                }

                this.relatorios = searchedRelatorios;
            }
        }
    }
</script>
