import {createRouter,createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AccountView from '../views/AccountView.vue'
import ProfileSection from '../views/account/ProfileSection.vue'
import EditProfile from '../views/account/EditProfile.vue'
import AddSong from '../views/account/AddSong.vue'
import DeleteSong from '../views/account/DeleteSong.vue'
import AddYoutubeVideo from '../views/account/AddYoutubeVideo.vue'
import DeleteYoutubeVideo from '../views/account/DeleteYoutubeVideo.vue'
import CreatePost from '../views/account/CreatePost.vue'
import EditPost from '../views/account/EditPost.vue'
import PostsSection from '../views/account/PostsSection.vue'
import PostById from '../views/account/PostById.vue'
import {useUserStore} from '../store/user-store'

//OTHERS 
import DataTableView from '../components/others/Dtable.vue'

/////





const routes=[
    {
        path:'/',
        beforeEnter(to, from, next) {
          useUserStore().id ? next('/account/profile/'+useUserStore().id) : next();
        },
        name:'home',
        component:HomeView
    },
    {
        path:'/register',
        beforeEnter(to, from, next) {
          useUserStore().id ? next('/account/profile/'+useUserStore().id) : next();
        },
        name:'register',
        component:RegisterView
    },
    {
        path:'/login',
        beforeEnter(to, from, next) {
          useUserStore().id ? next('/account/profile/'+useUserStore().id) : next();
         // console.log('useUserStore().id  ',useUserStore().id)
          //next();
        },
        name:'login',
        component:LoginView
    },
    {
        path:'/account',
        beforeEnter(to, from, next) {
          useUserStore().id ? next() : next('login');
        },
        name:'account',
        component:AccountView,
        children:[
           {
             path:'profile/:id',
             name:'profileSection',
             component:ProfileSection
           },
           {
            path:'edit-profile',
            name:'editProfile',
            component:EditProfile
          },
          {
           path:'add-song',
           name:'addSong',
           component:AddSong   
         },
         {
          path:'delete-song',
          name:'deleteSong',
          component:DeleteSong
        },
        {
         path:'add-youtube-video',
         name:'addYoutubeVideo',
         component:AddYoutubeVideo
       },
       {
        path:'delete-youtube-video',
        name:'deleteYoutubeVideo',
        component:DeleteYoutubeVideo
      },
      {
       path:'create-post',
       name:'createPost',
       component:CreatePost
     },
     {
        path:'edit-post/:id',
        name:'editPost',
        component:EditPost
      },
      {
         path:'posts',
         name:'postsSection',
         component:PostsSection
       },
       {
          path:'post-by-id/:id',
          name:'postById',
          component:PostById
        }
    ]
   },
   {
        path:'/datatable',
        name:'datatable',
        component:DataTableView
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
 
export default router
