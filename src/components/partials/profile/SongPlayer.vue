<template>
    <div class="bg-green-500 rounded" >
        <div id="aplayer"></div>
    </div>
    
</template>

<script setup>
import 'aplayer/dist/APlayer.min.css';
import { onMounted,reactive } from 'vue';
import APlayer from 'aplayer';
import { useSongStore } from '../../../store/song-store';
const songStore=useSongStore()
let songsList=reactive([])

  onMounted(()=>{
    mapSongs()
  })
  

  const mapSongs=()=>{
    let newSongs=songStore.songs.map((song)=>{
        return{
            name:song.title,
            artist:songStore.artistName,
            url:import.meta.env.VITE_VUE_APP_API_URL+'songs/'+songStore.artistId+'/'+song.song,
            cover: '/images/music.png'
        }
    })

        for (let i = 0; i < newSongs.length; i++) {
          songsList.push(newSongs[i]); 
        }   
        thePlayer()
        
    

  }
   
  const thePlayer=()=>{
       new APlayer({
            container: document.getElementById('aplayer'),
            audio: songsList
        });
  }
</script>