<template>
    <div>
        <button 
        @click="open=!open"
        class="bg-transparent
      
         hover:bg-green-400
          text-white
           font-semibold 
           hover:text-white
           py-1
           px-2
           hover:border-transparent
           rounded
           ">
         <i class="fa-solid fa fa-bars fa-xl"></i>
        </button>
        <div
            v-show="open"
            class="
              animated
              slideInDown
              faster
              fixed
              w-full
              h-full
              top-0
              left-0
              flex
              justify-center
              bg-black
              bg-opacity-50
              fixed
              backdrop-blur-sm
                "
            >  
            <div class="bg-black absolute w-full h-fullopacity-75"></div>
            <div class="my-auto fixed border-white w-80 pt-16">
                <p class="text-2xl text-center text-white font-bold">Menu</p>
                 
                <RouterLinkButton
                    @click="open=!open"
                    class="w-full text-gray-100 text-center font-bold"
                    btn-text="Profile"
                    color="green"
                    url="/account/profile"
                    />
                
                    <RouterLinkButton
                        @click="open=!open"
                        class="w-full text-gray-100 text-center font-bold mt-2"
                        btn-text="Posts"
                        color="green"
                        url="/account/posts"
                        />
                  
                <RouterLinkButton
                    @click="open=!open"
                    class="w-full text-gray-100 text-center font-bold mt-4"
                    btn-text="Close"
                    color="red"
    
                    />
                 
            </div>  
        </div>
    </div>
    
</template>
<script setup>
import { ref } from 'vue';
import RouterLinkButton from '../global/RouterLinkButton.vue';

   let open = ref(false)
</script>