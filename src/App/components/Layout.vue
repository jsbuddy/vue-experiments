<template>
    <div class="container">
        <Appbar v-if="appBarTitle" :title="appBarTitle"/>
        <header class="header" :style="{height: headerHeight}">
            <div class="header-logo" v-if="showHeaderIcon">
                <font-awesome-icon :icon="['fab', 'vuejs']" size="5x"></font-awesome-icon>
            </div>
            <h3 v-if="headerTitle" class="header-title">{{ headerTitle }}</h3>
        </header>
        <main>
            <slot></slot>
        </main>
        <BottomTab v-if="bottomTabs" :tabs="bottomTabs"/>
    </div>
</template>

<script>
	import Appbar from "./Appbar";
	import BottomTab from "./BottomTab";

	export default {
		name: "Layout",
		props: [
			'headerHeight', 'showHeaderIcon', 'headerTitle', 'appBarTitle', 'bottomTabs'
		],
		components: { BottomTab, Appbar }
	}
</script>

<style lang="scss">
    * {
        font-size: 14px;
        color: #b6bed3;
        padding: 0;
        margin: 0;
        font-family: Nunito, sans-serif;
    }

    main {
        position: relative;
        background-color: inherit;
        padding-bottom: 5px;
    }

    a {
        color: cornflowerblue;
        text-decoration: none;
    }

    .container {
        max-width: 400px;
        background-color: #f6f6f6;
        margin: auto;
        min-height: 100vh;
        position: relative;
    }

    .content {
        padding: 0 1em;
    }

    .header {
        height: 300px;
        background: linear-gradient(to right, #3c88f8, #2cabfe);

        &-logo {
            padding-top: 4em;
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            * {
                color: #eee;
            }
        }
        &-title {
            text-align: center;
            color: #eee;
            font-size: 1.4em;
        }
    }

    .btn {
        border-radius: 50px;
        border: 0;
        background-color: #2cacff;
        color: #fff;
        padding: 1em;
        display: inline-block;
        width: 100%;
        margin-bottom: 10px;
        cursor: pointer;

        &.sm {
            padding: .8em 1em;
            margin: 0;
            font-size: .92em;
        }
    }

    .float {
        &-top {
            transform: translateY(-70px);
            margin-bottom: -40px;
        }
    }
</style>