<template>
    <div class="card">
        <div class="image">
            <img :src="image" alt="">
        </div>
        <div class="body">
            <div class="meta">
                <div class="stars">
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <font-awesome-icon icon="star"></font-awesome-icon>
                </div>
                <div class="like"><font-awesome-icon icon="heart" /></div>
            </div>
            <h3 class="title">{{ title }}</h3>
            <h5 class="subtitle">{{ subtitle }}</h5>
            <div class="price">{{ price }}</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Card",
        props: [ 'image', 'title', 'subtitle', 'price' ]
	}
</script>

<style scoped lang="scss">
    .card {
        min-height: 100px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, .02);
        border-radius: 3px;
        background-color: #fff;
        display: flex;
        margin-bottom: 20px;
        .image {
            width: 120px;
            background-color: #f8f8f8;
        }
        .body {
            flex: 1;
            padding: .5em .8em;

            .meta {
                display: flex;
                flex-flow: row;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-bottom: 10px;
                .stars {
                    * {
                        width: 8px;
                        margin-right: 3px;
                        color: #fbe300;
                    }
                }
                .heart {

                }
            }
            .title {
                color: #4089f8;
                font-weight: 500;
                letter-spacing: .3px;
            }
            .subtitle {
                color: #b3bdd7;
                font-weight: 500;
                margin-bottom: 10px;
                font-size: .85em;
            }
            .price {
                color: #b3bdd7;
                font-size: 1em;
                font-weight: 600;
                text-align: right;
            }
        }
    }
</style>