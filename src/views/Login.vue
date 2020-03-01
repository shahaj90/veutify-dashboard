<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
          :rules="userNameRules"
          v-model="userName"
          required
        />
        <v-text-field
          :type="showPassword ? 'text': 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :rules="passwordRules"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" :disabled="!valid" @click="login">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="success" to="/signup">signup</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    showPassword: false,
    userName: "",
    userNameRules: [v => !!v || "Name is required"],
    password: "",
    passwordRules: [v => !!v || "Password is required"]
  }),
  methods: {
     login () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
  }
};
</script>

<style>
</style>
