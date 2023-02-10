<template>
    <div>
        <!-- Uso il loader -->

        <ul v-if="posts.length">
            <li v-for="elem in posts" :key="elem.id">{{ elem.title }}</li>
        </ul>
        <p v-else>Non ci sono post nel DB</p>
    </div>
</template>

<script>
export default
{
    name: 'PostsList',
    props: ['posts', 'isLoading']
}
</script>

<style scoped lang="scss">

</style>
