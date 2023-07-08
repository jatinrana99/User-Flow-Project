<template>
    <div id="FunnelCanvas">
    <Action3></Action3>
    <Frame3></Frame3>
    </div>
</template>


<script>
import Frame3 from './Frame3.vue';
import Action3 from './Action3.vue';

export default {
    name:`FunnelCanvas3`,
    components:{
        Frame3,
        Action3
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