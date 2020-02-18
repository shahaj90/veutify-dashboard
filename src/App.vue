<template>
  <v-app>
    <!-- Nav bar -->
    <v-app-bar app color="primary" dark fixed>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
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
          v-for="link in links"
          :key="`${link.label}`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >{{ link.label }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    showPassword: false,
    links: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "Login",
        url: "/login"
      },
      {
        label: "Sign Up",
        url: "/signup"
      },
      {
        label: "Deshboard",
        url: "/dashboard"
      }
    ]
  })
};
</script>
