<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
    <ListaRelatorio/>
  </div>
</template>

<script>
// @ is an alias to /src
 import ListaRelatorio from '@/components/ListaRelatorio.vue'

export default {
  name: 'home',
  components: {
    ListaRelatorio
  }
}
</script>
