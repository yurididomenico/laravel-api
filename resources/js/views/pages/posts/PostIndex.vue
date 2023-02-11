<template>
    <div>
        <PostsList />
    </div>
</template>

<script>
// import PostsList from "../../posts/PostsList.vue"
import PostsList from "../../../components/posts/PostsList.vue"
export default
{
    name: "Posts",
    components: {
        //Futuri componenti per questa view
        PostsList
    },
    mounted()
    {
        this.getPosts();
    },
    data()
    {

    },
    methods:
    {

    }
}
</script>
