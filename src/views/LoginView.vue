<template>
    <div id="Login">
       <div class="w-full p-6 flex justify-center items-center">
           <div class="w-2/5 wax-w-xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
                    <div class="mb-4">
                        <TextInput label="Email" :label-color="false" placeholder="john.doe@gmail.com" v-model:input="email"
                            input-type="email" 
                            :error="errors.email ? errors.email[0] :''"
                             />  
                    </div>
                    <div class="mb-4">
                        <TextInput label="Password" :label-color="false" placeholder="password" v-model:input="password"
                            input-type="password" 
                            :error="errors.password ? errors.password[0] :''" 
                            />  
                    </div>
                    <button
                        class="
                        block
                        w-full
                        bg-green-500
                        text-white
                        rounded-sm
                        py-3
                        text-sm
                        tracking-wide
                        uppercase
                        "
                        type="submit"
                        @click="login"
                        >
                        Login
                    </button>
                  
                    
                </div>
                <p class="text-center text-md text-gray-900">
                        Don't have an account yet?
                        <router-link 
                        to="register"
                        class="text-blue-500 no-underline hover:underline"
                        >
                            Register
                        </router-link>
                    </p>
            </div>
       </div>
    </div>
</template>

<script setup>
import TextInput from '../components/global/TextInput.vue';
import axios from 'axios'
import { ref } from 'vue'
import {useUserStore} from '../store/user-store'

    const userStore =useUserStore()
    let errors=ref([])
    let email = ref(null)
    let password = ref(null)
    
const login=async()=>{
    errors.value=[]
    try{
        let res = await axios.post(`api/login`,{
            email:email.value,
            password:password.value,
        })
     
        userStore.setUserDetails(res)
    }catch(err){
        errors.value=err.response.data.errors
    }
}

    
</script>

<style lang="scss" scoped>

</style>