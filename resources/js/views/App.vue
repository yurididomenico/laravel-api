<template>
    <div>
        <WorkInProgress />

        <!-- Dati Posts -->
        <div>
            <ul>
                <li>a</li>
            </ul>
        </div>
    </div>
</template>

<script>
import WorkInProgress from "../components/WorkInProgress.vue"
export default
{
    name: "App",
    components:
    {
        //Futuri componenti per questa view
        WorkInProgress
    },
    mounted()
    {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get('http://localhost:8000/api/posts')
                .then((res) => {
                    console.log(res.data);
                });
        }
    }
}
</script>
