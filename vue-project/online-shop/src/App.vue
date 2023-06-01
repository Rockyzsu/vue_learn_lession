<script>
import {ref,getCurrentInstance} from 'vue'
import router from './router/index'

export default {
    setup(props,ctx){
        const { proxy } = getCurrentInstance() 
        const active = ref(0)
        const onChange = (index)=>{
            if (index===1){
                if (localStorage.getItem('isLogin')){
                    router.push('/cart')}
                else{
                proxy.$toast('请登录')
                    setTimeout(()=>{
                        router.push('/login')
                    },500)
                }


            }
           
            if (index===2){
                if (localStorage.getItem('isLogin')){
                router.push('/my')
                }else{
                
                proxy.$toast('请登录')
                    setTimeout(()=>{
                        router.push('/login')
                    },500)
                }
            }
        }
        return { active,onChange }
    }
}
</script>

<template>
<div id="app">
<router-view/>
<van-tabbar
    route
    v-model='active'
    @change='onChange'
    active-color='#ee0a24'
    inactive-color='#000'

    >

    <van-tabbar-item icon='home-o' to="/home">主页</van-tabbar-item>
    <van-tabbar-item icon='cart-o' to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon='user-o' to="/user">用户</van-tabbar-item>

  </van-tabbar>
  </div>


</template>

<style scoped>
#app{
 height: 100vh;
 padding: 0;
 margin: 0;
 box-sizing: border-box;
}
</style>

