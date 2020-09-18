<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="black"
    >
      <nuxt-link :to="{ name: 'index', params: {id: id} }">
        <img 
            src="@/assets/img/logo/logo2020-dark-toka.png"
            width="40" 
            height="40" 
        >
      </nuxt-link>
      <v-spacer/>
      <nuxt-link :to="{ name: 'index', params: {id: id} }" class="back-link-home">
      <v-toolbar-title 
        v-text="title" 
        class="font-weight-bold"
      />
      </nuxt-link>
      <v-spacer/>
      <v-btn icon href="https://twitter.com/apmayfes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener">
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
    <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="black">&copy; 2020東大工学部応用物理系学科有志</v-footer>
  </v-app>
</template>

<style>
*{
  font-family: 
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    sans-serif;
}

.back-link-home{
    color: white;
    text-decoration:none;
}

.back-link-home:link,
.back-link-home:active,
.back-link-home:visited,
.back-link-home:hover{
    color: white;
    text-decoration:none;
}
</style>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      tab: null,
      title: '工学博覧会2020'
    }
  }
}
</script>