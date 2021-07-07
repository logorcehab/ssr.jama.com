<template>
    <div class="social-login">
        <button @click="socialLogin('google')" class="social-login-btn google">
            <FaIcons class="fab fa-google"/>
        </button>
        <button @click="socialLogin('facebook')" class="social-login-btn facebook">
            <FaIcons class="fab fa-facebook"/>
        </button>
    </div>
</template>

<script lang="ts">
import FaIcons from 'fa-icons';
import { env } from 'process';
export default {
    components:{
        FaIcons
    },
    methods: {
        socialLogin(service) {
            window.location.href = `${env.BASE_URL}/auth/login/${service}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.social-login {
    display: flex;
    justify-content: center;
}
.social-login-btn {
    color: white;
    border-radius: 5px;
    background: #333;
    border: none;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    width: 50px;
    height: auto;
    font-size: 23px;
    cursor: pointer;

    &.google {
        background: #dd4b39;
    }
    &.github {
        background: #24292e;
    }
    &.facebook {
        background: #3B5998;
    }
}
</style>
