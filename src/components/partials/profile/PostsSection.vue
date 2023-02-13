<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <div class="text-gray-900 text-xl">Posts</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton btn-text="Create Post" color="green" url="/account/create-post" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800">
                    <a href="#">
                        <img class="rounded-t-lg w-full" src="https://via.placeholder.com/150" alt="" />
                    </a>
                    <div class="p-2 md:p-4">
                        <div class="text-lg">
                          <router-link
                           to=""
                           class="
                             underline
                             text-blue-500
                             hover:text-blue-600
                           "
                          >
                            Test Title
                          </router-link>
                        </div>
                        <p class="py-2">Location: Test Location</p>
                        <p class="text-gray-darker text-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente alias quibusdam laborum, atque dolorum asperiores sit! Eveniet velit similique, aut adipisci dolor quis inventore? Laboriosam ea facilis asperiores placeat alias?
                        </p>
                    </div>
                     <div class="mt-2 flex items-center justify-end m-3">
                        <router-link
                          to="/account/edit-post"
                          class="
                           bg-blue-500
                           hover:bg-blue-700
                           text-white
                           text-sm
                           font-bold
                           py-1
                           px-2
                           rounded-full
                          "
                        >
                            Edit
                        </router-link>
                        <button
                          to=""
                          class="
                           ml-2
                           bg-red-500
                           hover:bg-red-700
                           text-white
                           text-sm
                           font-bold
                           py-1
                           px-2
                           rounded-full
                          "
                        >
                            Delete 
                        </button>
                     </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import RouterLinkButton from '../../global/RouterLinkButton.vue'


</script>
