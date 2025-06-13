import { defineStore } from "pinia";

const localStoreKey = "shop";
export default defineStore("loginState", {
  state: () => {
    let localStoreInfo = localStorage.getItem(localStoreKey);
    let info = {};
    if (localStoreInfo != null) {
      info = JSON.parse(localStoreInfo);
    }
    return {
      info: info?.info,
      token: info?.token,
    };
  },

  getters:{
    isLogin:(state)=>{
        return (state.token!=undefined && state.token.length>0)
    }
  },
  actions:{
    login:(info)=>{
        this.info = info.info
        this.token =info.token
        localStorage.setItem(localStoreKey,JSON.stringify(info))
    }
  }
});
