<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from './components/Heaader';
import Footer from './components/Footer';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>



