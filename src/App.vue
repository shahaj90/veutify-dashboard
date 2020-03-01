<template>
  <v-app>
    <!-- Nav bar -->
    <v-app-bar app color="primary" dark fixed>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in navBars"
        :key="`${link.label}`"
        text
        rounded
        :to="link.url"
      >{{link.label}}</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Footer -->
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in navBars"
          :key="`${link.label}`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >{{ link.label }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Developed By Shahaj</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import store from "./store/auth";
export default {
  name: "App",
  watch: {
    $route(to) {
      document.title = to.meta.title || "Vuetify-Dashboard";
    }
  },
  created() {
    store.dispatch("getNavbar");
  },
  computed: {
    navBars: function() {
      return store.state.navBars;
    }
  },
  data: () => ({
    showPassword: false
  })
};
</script>
