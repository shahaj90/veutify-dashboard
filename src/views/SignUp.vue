<template>
  <v-container>
    <h1>Sign Up</h1>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
              <v-autocomplete :items="browsers" label="Which browser do you use?"></v-autocomplete>
              <v-file-input accept="image/*" label="File input"></v-file-input>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date" label="Picker in dialog" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-checkbox
                v-model="checkbox"
                :rules="termsConditionsRules"
                label="I agree all terms & conditions"
              ></v-checkbox>
            </v-form>
            <v-card-actions>
              <v-btn color="success" :disabled="!valid" @click="validate">Register</v-btn>
              <v-btn color="warning" @click="reset">Reset</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  picker: "",
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkbox: false,
      termsConditionsRules: [v => !!v || "Terms & conditions is required"],
      browsers: ["Chrome", "FireFox", "Safari"],
      date: '',
      modal: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset () {
        this.$refs.form.reset()
      },
  }
};
</script>
