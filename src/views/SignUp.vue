<template>
  <v-container>
    <h1>Sign Up</h1>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
              <v-text-field label="Mobile" v-model="mobile" :rules="mobileRules" required></v-text-field>
              <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    label="Date of Birth"
                    readonly
                    v-on="on"
                    v-model="date"
                    :rules="dateRules"
                    required
                  ></v-text-field>
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
              <v-btn color="success" :disabled="!valid" @click="validate">Signup</v-btn>
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
      name: "",
      mobile: "",
      email: "",
      nameRules: [v => !!v || "Name is required"],
      mobileRules: [v => !!v || "Mobile is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      dateRules: [v => !!v || "Date of birth is required"],
      checkbox: false,
      termsConditionsRules: [v => !!v || "Terms & conditions is required"],
      date: "",
      modal: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
