import {defineStore} from 'pinia'
import axios from 'axios'

export const useProfileStore=defineStore('profile',{
    state:()=>({
        id:null,
        firstName:null,
        lastName:null,
        email:null,
        location:null,
        image:null,
        description:null
    }),
    actions:{
        async fetchProfileById(id){
            let res = await axios.get('api/users/'+id)
            
            this.$state.id=res.data.user.id
            this.$state.token=res.data.token
            this.$state.firstName=res.data.user.first_name
            this.$state.lastName=res.data.user.last_name
            this.$state.location=res.data.user.location
            this.$state.description=res.data.user.description
            
            if(res.data.user.image){
                this.$state.image=import.meta.env.VITE_VUE_APP_API_URL+'images/users/'+res.data.user.image
            }else{
                this.$state.image= import.meta.env.VITE_VUE_APP_URL+'defaultAvatar.png'
            }
        },
        profileImage(image){
            return import.meta.env.VITE_VUE_APP_API_URL+'images/users/'+image
        },
        clearProfile(){
            this.$state.id=null
            this.$state.firstName=null
            this.$state.lastName=null
            this.$state.email=null
            this.$state.location=null
            this.$state.description=null
        }
    },
    persist:true
})