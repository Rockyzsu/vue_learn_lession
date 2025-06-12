import { defineStore } from "pinia";
export const userStore = defineStore("userHack", {
  state: () => {
    return {
      name: "See",
      age: 0,
    };
  },
  actions: {
    setName(name) {
      this.name = name;
    },
    setAge(age) {
      this.age = age;
    },
  },

  getters:{
    currentName(state){
      return state.name
    }
  }
});
