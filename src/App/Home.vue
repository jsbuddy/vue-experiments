<template>
    <div>
        <Layout headerHeight="150px" headerLogo="false" headerTitle="" appBarTitle="Flights" :bottomTabs="bottomTabs">
            <div class="content float-top">
                <div class="lead">
                    <div class="items">
                        <div class="item">
                            <span class="icon"><font-awesome-icon icon="map-pin"/></span>
                            Dubai UAE
                        </div>
                        <div class="item">
                            <span class="icon"><font-awesome-icon icon="calendar"/> </span>
                            MAR, 7, 2017
                        </div>
                        <div class="item">
                            <span class="icon"><font-awesome-icon icon="user"/> </span>
                            1 Passenger
                        </div>
                        <div class="item">
                            <span class="icon"><font-awesome-icon icon="wine-glass"/></span>
                            First Class
                        </div>
                        <div class="item">
                            <span class="icon"><font-awesome-icon icon="credit-card"/> </span>
                            $800
                        </div>
                        <div class="item">
                            <button class="btn sm">Edit Search</button>
                        </div>
                    </div>
                </div>
                <div v-for="(item, i) in items" :key="i">
                    <Card :title="item.title" :subtitle="item.subtitle" :price="item.price"/>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script>
	import Layout from './components/Layout'
	import Card from "./components/Card";

	const items = [
		{
			title: 'Jumeria Creekside Hotel',
			subtitle: 'Garhood Dubai',
			price: '$800'
		},
		{
			title: 'Dusit Thani Dubai',
			subtitle: 'Trade Center, Dubai',
			price: '$750'
		},
		{
			title: 'City Premiere Hotel Apartments',
			subtitle: 'Metro Access, Dubai',
			price: '$700'
		}

	];

	const bottomTabs = [
		{ icon: 'home', title: 'Home' },
		{ icon: 'toolbox', title: 'Tours' },
		{ icon: 'search', title: 'Explore' },
		{ icon: 'user', title: 'Profile' }
	];

	export default {
		name: "Home",
		data() {
			return {
				items,
                bottomTabs
			}
		},
		components: {
			Card,
			Layout
		}
	}
</script>

<style scoped lang="scss">

    .lead {
        background-color: #fff;
        box-shadow: 0 5px 20px rgba(0, 0, 0, .03);
        border-radius: 3px;
        min-height: 100px;
        padding: 1em;
        margin-bottom: 20px;
    }

    .items {
        display: flex;
        flex-wrap: wrap;
        .item {
            min-width: 30%;
            flex: 1;
            padding: 1em .4em;
            font-size: .87em;
            display: flex;
            align-items: center;
            justify-items: center;
            .icon {
                margin-right: 5px;
            }
        }
        .btn {
            box-shadow: 0 0 10px rgba(0, 0, 0, .081);
        }
    }

</style>