<template>
    <div id="Register">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-2/5 wax-w-xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
                    <div class="mb-4">
                        <TextInput label="First Name" :label-color="false" placeholder="John" v-model:input="firstName"
                            input-type="text" 
                            :error="errors.first_name ? errors.first_name[0] :''"
                             />
                    </div>
                    <div class="mb-4">
                        <TextInput label="Last Name" :label-color="false" placeholder="Konate" v-model:input="lastName"
                            input-type="text"
                            :error="errors.last_name ? errors.last_name[0] :''"
                            />
                            
                    </div>
                    <div class="mb-4">
                        <TextInput label="Email" :label-color="false" placeholder="john.doe@gmail.com" v-model:input="email"
                            input-type="email" 
                            :error="errors.email ? errors.email[0] :''"
                             />  
                    </div>
                    <div class="mb-4">
                        <TextInput label="Password" :label-color="false" placeholder="password123?" v-model:input="password"
                            input-type="password" 
                            :error="errors.password ? errors.password[0] :''"
                             />  
                    </div>
                    <div class="mb-4">
                        <TextInput label="Confirm Password" :label-color="false" placeholder="password123?" v-model:input="confirmPassword"
                            input-type="password"
                            
                            />
                            
                    </div>
                    <button class="
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
                        @click="register"
                        >
                        Register
                    </button>


                </div>
                <p class="text-center text-md text-gray-900">
                    Already have an account?
                    <router-link to="login" class="text-blue-500 no-underline hover:underline">
                        Login
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import TextInput from '../components/global/TextInput.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '../store/user-store';
import {useProfileStore} from '../store/profile-store'
import {useSongStore} from '../store/song-store'
import {usePostStore} from '../store/post-store'
import {useVideoStore} from '../store/video-store'
import { useRouter } from 'vue-router';
    
    const userStore =useUserStore()
    const profileStore =useProfileStore()
    const songStore =useSongStore()
    const postStore =usePostStore()
    const videoStore =useVideoStore()
    const router=useRouter()
    let errors=ref([])
    let firstName = ref(null)
    let lastName = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)

    const register=async()=>{

        errors.value=[]

        try{
            let res=await axios.post('api/register',{
                first_name:firstName.value,
                last_name:lastName.value,
                email:email.value,
                password:password.value,
                password_confirmation:confirmPassword.value
            })
            userStore.setUserDetails(res)
            await profileStore.fetchProfileById(userStore.id)
            await songStore.fetchSongsByUserId(userStore.id)
            await postStore.fetchPostsByUserId(userStore.id)
            await videoStore.fetchVideosByUserId(userStore.id)
            router.push('/account/profile/'+userStore.id)
        }catch(err){
            errors.value=err.response.data.errors
        }
    }

       
</script>

<style lang="scss" scoped>

</style>