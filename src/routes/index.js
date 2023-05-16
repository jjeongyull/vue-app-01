import { createRouter, createWebHashHistory } from "vue-router";

import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHashHistory(),
    scrollBehavior(){
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Movie/:id',
            component: Movie
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})