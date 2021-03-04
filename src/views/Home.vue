<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="getMessage" />
    <div class="table-div">
      <div>
        <h2>Normal Table</h2>
        <br />
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(name, index) in nameTable" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Sorted Table</h2>
        <br />
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(namee, indexx) in sortedNameTable" :key="indexx">
              <td>{{ indexx + 1 }}</td>
              <td>{{ namee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    <ul>
      <li v-for="(coy, index) in getSortedCompanies" :key="index"
      >{{coy}}</li>
    </ul>
    <p>My name is {{getName}} and my job is {{getJob}}</p>
    <form @submit.prevent="changeDetails">
      <input type="name" placeholder="Name" v-model="username">
      <br>
      <input type="text" placeholder="Job" v-model="newJob">
      <br>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters, mapActions } from 'vuex';
// import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      nameTable: [],
      username: '',
      newJob: '',
    };
  },
  computed: {
    ...mapGetters(['getMessage', 'getSortedCompanies', 'nameListing']),
    ...mapGetters(['getName', 'getJob']),
    sortedNameTable() {
      const copy = [...this.nameListing];
      return copy.sort();
    },
  },
  mounted() {
    this.nameTable = this.nameListing;
  },
  methods: {
    // ...mapMutations(['updateName', 'changeJob']),
    // changeDetails() {
    //   this.updateName(this.username);
    //   this.changeJob(this.newJob);
    //   this.username = '';
    //   this.newJob = '';
    // },
    // OR using actions:
    ...mapActions(['saveDetails']),
    changeDetails() {
      const userDetails = {
        name: this.username,
        job: this.newJob,
      };
      this.saveDetails(userDetails);
      this.username = '';
      this.newJob = '';
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
.table-div {
  display: flex;
  justify-content: space-evenly;
}
.table td {
  border: 1px solid black;
}
</style>
