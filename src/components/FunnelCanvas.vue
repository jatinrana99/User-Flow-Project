<template>
    <div id="FunnelCanvas">
        <!-- <p>funnel </p> -->
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
        Frame,
      
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