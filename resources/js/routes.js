import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import dei componenti che fungono da Pagine
import AboutUs from './components/pages/AboutUs.vue'

const router = new VueRouter({
    //Paths per le pages
    mode: 'history', //salva la storia dei path (freccette in alto <- ->)
    routes: [
        {
            //path, name, component
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        }
    ]
})

export default router;
