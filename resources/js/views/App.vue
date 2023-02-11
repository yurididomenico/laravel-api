<template>
    <div>
        <!-- Heaedr navigazione -->
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default
{
    name: "App",
    components: {
        Header
    },
    data()
    {
        return {}
    },
    methods: {}
}
</script>
