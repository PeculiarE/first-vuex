<template>
  <div class="about">
    <h1>This is an about page, {{upperCaseName}}</h1>
    <h2> Hi {{getName}}, {{getMessage}}</h2>
    <form @submit.prevent="submitForm">
      <input type="name" v-model="username">
    </form>
    <br>
    <button @click="updateClick">I have been clicked {{getTheClick}} times</button>
    <div class="table-div">
      <div>
        <h2>Normal Table</h2>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(name, index) in languageTable" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Sorted Table</h2>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sortedName, sortedIndex) in sortedLanguageTable" :key="sortedIndex">
              <td>{{ sortedIndex + 1 }}</td>
              <td>{{ sortedName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    <br>
    <p>Your Job is a {{job}}</p>
    <form @submit.prevent="submitJob">
      <input type="text" v-model="newJob">
    </form>
    <br>
    <p>{{language}}</p>
    <form @submit.prevent="addLanguage">
      <input type="text" placeholder="Language" v-model="newLanguage">
      <br>
      <input type="number" placeholder="Years of Experience" v-model="years">
      <br>
      <button>Submit</button>
    </form>
    <br>
    <form @submit.prevent="filterTheLanguages">
      <input type="number" v-model="howMany" placeholder="How many years experience?">
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      languageTable: [],
      username: '',
      newJob: '',
      newLanguage: '',
      years: null,
      howMany: null,
    };
  },
  computed: {
    ...mapGetters(['getMessage', 'getName', 'getLanguages', 'languageListing']),
    ...mapGetters({
      sortedLanguageTable: 'sortedLanguageListing',
      getTheClick: 'getClick',
      job: 'getJob',
      language: 'getLanguages',
    }),
    upperCaseName() {
      return this.getName.toUpperCase();
    },
  },
  mounted() {
    this.languageTable = this.languageListing;
  },
  methods: {
    ...mapMutations(['updateName', 'updateClick', 'changeJob', 'updateLanguage', 'filterLanguage']),
    submitForm() {
      this.updateName(this.username);
      this.username = '';
    },
    submitJob() {
      this.changeJob(this.newJob);
      this.newJob = '';
    },
    addLanguage() {
      const objectLanguage = {
        name: this.newLanguage,
        experience: this.years,
      };
      this.updateLanguage(objectLanguage);
      this.newLanguage = '';
      this.years = null;
    },
    filterTheLanguages() {
      this.filterLanguage(this.howMany);
    },
  },
};
</script>
