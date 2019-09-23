<script>
// import { Table, Input } from 'buefy'

export default {
    created() {
        this.clients = [
            {
                id: 1,
                name: 'Sheldon Cooper',
            },
            {
                id: 2,
                name: 'Bruce Wayne',
            },
            {
                id: 3,
                name: 'Star Lord',
            },
        ]
    }    
}
</script>


<template>
    <div>
        <ul>
            <li v-for="client in clients" :key="client.id">
                <router-link :to="{ name: 'client', params: { id: client.id }}">{{ client.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
</style>