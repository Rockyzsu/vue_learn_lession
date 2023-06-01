<template>
    <div class="login">
        <div class="title">登录</div>
        <van-form>
        
          <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          size="large"
          :rules="[{equired:true,message:'Please input username'}]"
          />
          
          <van-field
          v-model="password"
          name="password"
          label="密码"
          placeholder="密码"
          size="large"
          :rules="[{equired:true,message:'Please input password'}]"
          />

            <div style="margin-top:16px">
               <van-button round block type='primary' @click='onSubmit' >登录
              </van-button>

            </div>

            <div class='footer'>
              <span class='register' @click='goregister'>注册</span>
            </div>
        </van-form>
    
    </div>


</template>

<style scoped>

.login{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#eee;
height:100%
}

.title{
font-size:1.75rem;
}

.van-form{

height:18.75rem;
display:flex;
flex-direction:column;
justify-content:center;

}

.footer{


color:#ccc;
text-align:center;
font-size:0.875rem;
padding:0.625rem 0;
}
.register{

color:#aaa;
font-weight:bold;
}
</style>

<script>

import { ref,getCurrentInstance,onMounted } from 'vue'
import router from '../router/index'

export default{
    setup(props,cxt){
        const { proxy }    = getCurrentInstance()
        const username = ref('')
        const password= ref('')
    
       let userinfo;
        const validatePassword = (val)=>/\d{6}/.test(val);
        const onSubmit = async ()=>{
            console.log('onsubmit')
            let data={username:username.value,password:password.value}
            console.log(data);
            login = await proxy.$axios.post('/login',data)
            console.log(login);
            if (username.value!=login.username || password.value!=login.password+''){
            proxy.$toast.fail('user name or password error')
            }else{
            localStorage.setItem('isLogin',JSON.stringify(true))
            localStorage.setItem('user',JSON.stringify(username.value))
            proxy.$toast.success("login pass")
                router.push('/home')
            }
        };

    const goRegister = ()=>{
    router.push('/register')
    }

        onMounted(()=>{console.log('on mount')});

        return {
        username,
            password,
            validatePassword,
            onSubmit,
            goRegister
        }
    }
}
</script>
