<template>
    <div class="container">
        <h1>Welcome to your dashboard {{user.name}}</h1>
    </div>
</template>

<script lang="ts">
export default {
    middleware: 'auth'
};
</script>