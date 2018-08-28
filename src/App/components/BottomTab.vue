<template>
    <div class="bottom-tab">
        <div class="tab" v-for="(tab, i) in tabs" :key="i">
            <div class="icon"><font-awesome-icon :icon="tab.icon"></font-awesome-icon></div>
            <div class="title">{{ tab.title }}</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "BottomTab",
        props: [ 'tabs' ]
	}
</script>

<style scoped lang="scss">
    .bottom-tab {
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        background-color: #fff;
        border-top: 3px solid #eee;
        justify-content: center;
        z-index: 1000;
        .tab {
            width: 90px;
            height: 70px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
    }

</style>