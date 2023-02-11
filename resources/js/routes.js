import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import dei componenti che fungono da Pagine
import HomePage from './views/pages/HomePage.vue'
import AboutUs from './views/pages/AboutUs.vue'

import PostsIndex from './views/pages/posts/Posts.vue'
import PostShow from './views/pages/posts/PostShow.vue'


const router = new VueRouter({
    //Paths per le pages
    mode: 'history', //salva la storia dei path (freccette in alto <- ->)
    routes: [
        {
            //path, name, component
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            //path, name, component
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },
        {
            //  Pagina per la rotta che porta al singolo post
            path: '/posts/:id',
            name: 'singlePost',
            component: PostShow
        }
    ]
})

export default router;
