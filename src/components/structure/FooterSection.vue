<template>
    <div class="w-full bg-black text-gray-100 ">
        <div 
           class="
             container
             mx-auto
             max-w-full
             h-full
             flex
             flex-wrap
             justify-between
             items-start
             text-sm
             p-6
             pt-8
             pb-4
           "
         >
         <div>
            <div class="mb-4 text-lg underline">
               <b>Quick links</b>
            </div>
            
            <router-link to="/" class="block mb-2">Home</router-link>
            <router-link to="/login" class="block mb-2">Login</router-link>
            <router-link to="/register" class="block mb-2">Register</router-link>
         </div>
         <div class="mb-4">
            <div class="mb-4 text-lg underline">
               Our company
            </div>
            <p class="mb-4 leading-normal">
                123 Main Street <br/>
                London<br/>
                SW1 SW1
            </p>
            <p class="text-sm">01 73 832 778</p>
         </div>
        </div>
        <div 
           class="
             container
             mx-auto
             max-w-full
             h-full
             flex
             flex-wrap
             justify-between
             items-center
             text-sm
             py-6
             pl-6
             pr-4
             
           "
         >
         &copy;2022 MSN Company. All rights reserved. 
           <div class="pt-4 md:p-8 text-center md:text-right text-xs">
              <div class="no-underline hover:underline">Privacy Policy</div>
              <div class="no-underline hover:underline ml-4">Terms & conditions</div>
              <div class="no-underline hover:underline ml-4">Contact Us</div>
           </div>
         </div>

    </div>
</template>

<script setup>

</script>
