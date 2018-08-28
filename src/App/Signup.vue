<template>
    <Layout showAppBar="false" showBottomTab="false" showHeaderIcon="true" headerTitle="Sign up">
        <form class="form float-top">
            <div class="input-block">
                <label>
                    <span class="label-text">Full Name</span>
                    <span class="input-wrap icon-right">
                            <input type="text">
                            <span class="icon"><font-awesome-icon icon="user"/></span>
                        </span>
                </label>
            </div>
            <div class="input-block">
                <label>
                    <span class="label-text">E-mail</span>
                    <span class="input-wrap icon-right">
                            <input type="text">
                            <span class="icon"><font-awesome-icon icon="envelope"/></span>
                        </span>
                </label>
            </div>
            <div class="input-block">
                <label>
                    <span class="label-text">Password</span>
                    <span class="input-wrap icon-right">
                            <input type="password">
                            <span class="icon"><font-awesome-icon icon="eye"/></span>
                        </span>
                </label>
            </div>
            <div class="floating-button">
                <button class="btn">Sign Up</button>
                <button class="btn facebook sign-up-with">Sign Up with <span class="raised-text">Facebook</span>
                </button>
            </div>
        </form>
        <div class="trailing-text">
            Already have an account? <router-link to="/"><a>Sign in</a></router-link>
        </div>
    </Layout>
</template>

<script>
	import Layout from './components/Layout';

	export default {
		name: "SignUp",
		components: {
			Layout
		}
	}
</script>

<style scoped lang="scss">
    .form {
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .04);
        width: 92%;
        margin: 0 auto;
        border-radius: 3px;
        padding: 3em 3em 4em;

        .floating-button {
            position: absolute;
            top: 90%;
            left: 0;
            width: 100%;
            padding: 0 3em;
            button {
                background-color: #2cacff;
            }
        }
    }

    .input-block {
        display: block;
        margin-bottom: 25px;

        label {
            display: block;
            .label-text {
                display: block;
                margin-bottom: 5px;
            }
            .input-wrap {
                display: block;
                width: 100%;

                input {
                    display: block;
                    border: 0;
                    border-bottom: 1px solid #eee;
                    padding: .5em 0;
                    background-color: transparent;
                    width: 100%;
                }
            }
            .icon-right {
                position: relative;
                input {
                    padding-right: 35px;
                }
                .icon {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    .btn.sign-up-with {
        color: #aeaec0;

        .raised-text {
            font-size: 1.1em;
            color: #efeff6;
        }

        &.facebook {
            background-color: #474a99;
        }
    }

    .trailing-text {
        margin: 30px auto 20px;
        text-align: center;
    }
</style>