<template>
    <nav id="nav">
        <ul class="menu">
            <li>
                <router-link to="/">Root</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
	export default {
		name: "Navbar"
	}
</script>

<style scoped lang="scss">
    #nav {
        background-color: #222;
        display: flex;
        justify-content: center;
    }

    .menu {
        padding: 1em;
        display: flex;
        flex-direction: row;

        li {
            a {
                padding: 1em;
                color: #ccc;
                text-decoration: none;
            }
        }
    }


</style>