<template>
  <v-container>
    <h1>User List</h1>
    <v-row>
      <v-col cols="12">
        <v-col cols="12" md="12" xs="12">
          <UserTable :users="users" />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserTable from "../components/UserTable";
import users from "../data/users.json";
export default {
  name: "UserList",
  components: {
    UserTable
  },
  data() {
    return {
      users: users
    };
  }
};
</script>