<template>
  <div>


    <div id="background"></div>

    <div id="container">
      <div id="title">
        <h1>精选好物</h1>
      </div>

      <div class="input">
        <el-input v-model="username" prefix-icon="User" placehold="请输入用户名"> </el-input>
      </div>
      <div class="input">
        <el-input v-model="password" prefix-icon="Lock" placeholder="请输入密码" show-password></el-input>
      </div>
      <div class="input">
        <el-button type="primary" :disabled="disabled" style="width: 350px" @click="loginFunc">登录</el-button>
        <el-button type="default" :disabled="disabled" style="width: 150px" @click="signUpFunc">注册</el-button>
        <!-- 这个空间大小也会控制外部输入框的大小 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { RequestPath, startRequest } from "../base/RequestWork";
let username = ref("");
let password = ref("");
let disabled = computed(() => {
  return !(username.value.length > 0 && password.value.length > 0);
});
function loginFunc() {
  console.log("login");
  console.log(password.value)
  console.log(username.value)
  startRequest(RequestPath.login, 'post', { username: username.value, password: password.value }).then(
    (response) => {
      let data = response.data;
      console.log(data)
    }
  )
}
function signUpFunc() {
  console.log("signUp");
}
</script>


<style scoped>
#container {
  height: 100%;
  width: 100%;
  position: absolute;
}

#background {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/background.jpeg");
  filter: blur(20px);
  background-size: cover;
}

#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}

.input {
  margin: 20px auto;
  width: 515px;
}
</style>