import {defineStore} from 'pinia'
import axios from 'axios'

export const useVideoStore=defineStore('video',{
    state:()=>({
        videos:null 
    }),
    actions:{
    
        async fetchVideosByUserId(userId){
            let res = await axios.get('api/youtube/'+userId)
           // console.log('res ' ,res.data.videos_by_user)
            this.$state.videos=res.data.videos_by_user
        },
        clearVideos(){
            this.$state.videos=null 
            
        }
    },
    persist:true
})