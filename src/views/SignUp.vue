<template>
  <v-container>
    <h1>Sign Up</h1>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field label="Email" type="email"></v-text-field>
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
              <v-checkbox v-model="checkbox" label="I agree all terms & conditions"></v-checkbox>
            </v-form>
            <v-card-actions>
              <v-btn color="success">Register</v-btn>
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
      browsers: ["Chrome", "FireFox", "Safari"],
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      checkbox: false
    };
  }
};
</script>
