<template>
    <div id="delete-relatorio">
        <h1>Deletar Relatório {{ relatorio.id }}</h1>

        <p><router-link :to="{ name: 'exibirRelatorio' }">Retornar</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteRelatorio">
            <p><button class="btn btn-danger">Deletar Relatório</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from './notifications.vue';

    export default{
        data(){
            return{
                relatorio:{},
                notifications:[]
            }
        },

        created: function(){
            this.getRelatorio();
        },

        methods: {
            getRelatorio: function()
            {
                this.$http.get('http://localhost:3000/api/relatorio/' + this.$route.params.id).then((response) => {
                    this.relatorio = response.body;
                }, (response) => {

                });
            },

            deleteRelatorio: function()
            {
                this.$http.delete('http://localhost:3000/api/relatorio/delete/' + this.$route.params.id, this.relatorio, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_products'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Relatorio could not deleted'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
