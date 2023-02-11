<template>
    <div>
        <h1>Pagina post singolo</h1>
        <PostCard />
    </div>
</template>

<script>
// import PostsList from "../../posts/PostsList.vue"

import PostCard from "../../../components/posts/PostCard.vue"

export default
{
    name: 'PostShow',
    components: {
        PostCard
    },
    data()
    {
        return {}
    },
    methods:
    {

    }
}
</script>
