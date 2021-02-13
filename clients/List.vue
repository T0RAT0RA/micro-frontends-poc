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
        <table>
            <tr>
                <th>Client</th>
            </tr>
            <tr v-for="client in clients" :key="client.id">
                <td><router-link :to="{ name: 'client-overview', params: { id: client.id }}">{{ client.name }}</router-link></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
</style>
