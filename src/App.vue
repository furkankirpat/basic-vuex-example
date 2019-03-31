<template>
  <div id="app">
    <h1>{{ welcome }}</h1>
    <div v-if="show">
      <input type="text" v-model="name">
      <input type="text" v-model="title">
      <input type="button" @click="updateInfo" value="Update User Info">
      <input type="button" @click="changeShowState" value="Close">
    </div>
    <p v-else @click="changeShowState"> Click to change user information </p>
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  data(){
    return {
      name: '',
      title: '',
      show:false
    }
  },
  created() {
    this.name = this.$store.state.name;
    this.title = this.$store.state.title;
  },
  computed: {
    ...mapGetters([
      'welcome'
    ])
  },
  methods: {
    ...mapActions([
      'updateUserInfo'
    ]),
    updateInfo() {
      this.updateUserInfo({ name: this.name, title: this.title});
    },
    changeShowState() {
      this.show = !this.show;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
p {
    cursor: pointer;
    color:blue;
}
p:hover {
  text-decoration: underline;
}
</style>
