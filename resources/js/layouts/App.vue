<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        'Header': () => import('../components/Header')
    }
}
</script>
