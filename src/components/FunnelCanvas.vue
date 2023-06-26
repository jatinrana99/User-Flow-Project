<template>
    <div>
    <Actions></Actions>
    <Frame></Frame>
    </div>
</template>

<script>
import Actions from './Actions.vue';
import Frame from './Frame.vue';

export default {
    name:`FunnelCanvas`,
    components:{
        Actions,
        Frame
    }
}
</script>

<style scoped>

div{
    display: flex;
}
</style>