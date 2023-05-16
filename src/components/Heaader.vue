<template>
    <header>
        <Logo/>
        <div class="nav nav-pills">
            <div v-for="nav in navigations" :key="nav.name" class="nav-item">
                <router-link active-class="active" :to="nav.href" class="nav-link" :class="{ active: isMatch(nav.path) }">
                    {{ nav.name }}
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '~/components/Logo'
    export default {
        components : {
            Logo
        },
        data(){
            return{
                navigations:[
                    {
                        name: 'Search',
                        href: '/'
                    },
                    {
                        name: 'Movie',
                        href: '/Movie/tt4520988',
                        path: /^\/movie/
                    },
                    {
                        name: 'About',
                        href: '/About'
                    }
                ]
            }
        },
        methods: {
            isMatch(path){
                if(!path){
                    return false
                }else {
                    return path.test(this.$route.fullPath)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/scss/main';
header{
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo{
        margin-right: 40px;
    }
}

@include media-breakpoint-down(sm) {
    .nav{
        display: none;
    }
}

</style>