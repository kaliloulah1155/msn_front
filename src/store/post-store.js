import {defineStore} from 'pinia'
import axios from 'axios'

export const usePostStore=defineStore('post',{
    state:()=>({
        posts:null 
    }),
    actions:{
    
        async fetchPostsByUserId(userId){
            let res = await axios.get('api/user/'+userId+'/posts')
            this.$state.posts=res.data
        },
        postImage(image){
            return import.meta.env.VITE_VUE_APP_API_URL+'images/posts/'+image
        },
        clearPosts(){
            this.$state.posts=null 
        }
    },
    persist:true
})