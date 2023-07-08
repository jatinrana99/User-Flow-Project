<template>
    <div id="FunnelCanvas">
    <Action4></Action4>
    <Frame4></Frame4>
    </div>
</template>


<script>
import Frame4 from './Frame4.vue';
import Action4 from './Action4.vue';

export default {
    name:`FunnelCanvas3`,
    components:{
        Frame4,
        Action4
    }
}
</script>

<style lang="sass" scoped>
#FunnelCanvas
    width: 1,114px
    height: 948px
    padding: 6px 7px 6px 7px
    gap: 14px
    display: flex
    background-color: rgba(216, 216, 216, 1)

</style>