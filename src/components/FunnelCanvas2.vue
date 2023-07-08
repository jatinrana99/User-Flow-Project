<template>
    <div id="FunnelCanvas">
    <Action2></Action2>
    <Frame></Frame>
    </div>
</template>


<script>
import Frame from './Frame.vue';
import Action2 from './Action2.vue';

export default {
    name:`FunnelCanvas2`,
    components:{
        Frame,
        Action2
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