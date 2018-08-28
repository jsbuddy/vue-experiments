<template>
    <div class="app-bar">
        <router-link to="/signup">
            <div class="leading"><font-awesome-icon icon="chevron-left" :style="{ color: '#ffffff' }"></font-awesome-icon></div>
        </router-link>
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
	export default {
		name: "Appbar",
        props: [ 'title' ]
	}
</script>

<style scoped lang="scss">
    .app-bar {
        width: 100%;
        display: flex;
        background-color: #3b9aff;

        .leading {
            padding: 1.5em;
            width: 30px;
            cursor: pointer;
            * {
                color: #eee;
            }
        }
        .title {
            padding: 1.3em;
            flex: 1;
            text-align: center;
            color: #eee;
            font-size: 1.1em;
        }
    }
</style>