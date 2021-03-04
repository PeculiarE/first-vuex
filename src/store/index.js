import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'This is your First VueX Practice',
    name: 'Peculiar',
    companies: [
      'Microsoft',
      'Enyata',
      'Google',
      'Andela',
    ],
    languages: [
      {
        name: 'Javascript',
        experience: 5,
      },
      {
        name: 'CSS',
        experience: 25,
      },
      {
        name: 'Kotlin',
        experience: null,
      },
    ],
    nameArray: [
      'Success',
      'Abigail',
      'Lani',
      'Modupe',
      'Ruqayyah',
      'Peculiar',
    ],
    languageArray: [
      'Kotlin',
      'Angular',
      'React',
      'Bootstrap',
      'PHP',
      'Laravel',
    ],
    click: 0,
    job: 'Intern',
  },
  mutations: {
    updateName(state, payload) {
      const lowerName = payload.toLowerCase();
      state.name = lowerName;
    },
    updateClick(state) {
      state.click += 1;
    },
    changeJob(state, payload) {
      state.job = payload;
    },
    updateLanguage(state, payload) {
      state.languages.push(payload);
    },
    filterLanguage(state, payload) {
      state.languages = state.languages.filter((el) => el.experience > payload);
    },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getName(state) {
      return state.name;
    },
    getSortedCompanies(state) {
      return state.companies.sort();
    },
    getLanguages(state) {
      return JSON.stringify(state.languages);
    },
    nameListing(state) {
      return state.nameArray;
    },
    languageListing(state) {
      return state.languageArray;
    },
    sortedLanguageListing(state) {
      const copy = [...state.languageArray];
      return copy.sort();
    },
    getClick(state) {
      return state.click;
    },
    getJob(state) {
      return state.job;
    },
  },
  actions: {
    // unlike mutations, the parameters to be taken here are
    // context(i.e. state, mutations, and basically everything
    // in the file) and payload)
    // inside the action, you can either do context.state to read/get data in the state
    // or context.commit('mutation', payload) to change data using
    // mutations
    saveDetails(context, payload) {
      context.commit('updateName', payload.name);
      context.commit('changeJob', payload.job);
      // posting this payload to an API and adding a state:
      // const { click } = context.state;// or not using
      // // destructuring: const click = context.state.click
      // fetch('https://blablabla.com', {
      //   method: 'POST',
      //   body: JSON.stringify({ click, ...payload }),
      // })
      //   .then((response) => response.json())
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      //
      // adding other things:
      console.log(context.state.message);
      context.dispatch('logToConsole');
    },
    logToConsole(context) {
      console.log(context.state);
      console.log(context.getters);
      console.log(context.getters.getSortedCompanies);
    },
  },
  modules: {
  },
});
