<template>
    <div>
        <WorkInProgress />

        <!-- Dati Posts -->
        <PostsList :posts="posts" :isLoading="isLoading" />

        <!-- Header -->
        <Header />

        <router-view></router-view>
    </div>
</template>

<script>
import WorkInProgress from "../components/WorkInProgress.vue"
import PostsList from "../components/posts/PostsList.vue"
export default
{
    name: "App",
    components: {
        //Futuri componenti per questa view
        WorkInProgress,
        PostsList
    },
    mounted()
    {
        this.getPosts();
    },
    data()
    {
        return {
            posts: [],
            isLoading: false
        }
    },
    methods: {
        getPosts() {
            this.isLoading = true
            axios.get('http://localhost:8000/api/posts')
                .then((res) =>
                {
                    console.log(res.data);
                    this.posts = res.data;
                })
                .catch(err =>
                {
                    console.log(err)
                })
                .then(() =>
                {
                    this.isLoading = false
                })
        }
    }
}
</script>
