<template>
    <div class="bg-green-500 rounded" >
        <div id="aplayer"></div>
    </div>
</template>

<script setup>
import 'aplayer/dist/APlayer.min.css';
import { onMounted } from 'vue';
  import APlayer from 'aplayer';

  onMounted(()=>{
    thePlayer()
  })

  const thePlayer=()=>{
       new APlayer({
            container: document.getElementById('aplayer'),
            audio: [
                {
                    name: 'First Song',
                    artist: 'Lexin Music',
                    url: '/music/cinematic-time-lapse-115672.mp3',
                    cover: '/images/music.png'
                },
                {
                    name: 'Second Song',
                    artist: 'Music For Videos',
                    url: '/music/inspiring-emotional-uplifting-piano-112623.mp3',
                    cover: '/images/music.png'
                },
                {
                    name: 'Third Song',
                    artist: 'Travel Vlog',
                    url: '/music/travel-vlog-110040.mp3',
                    cover: '/images/music.png'
                }
        ]
        });
  }
</script>