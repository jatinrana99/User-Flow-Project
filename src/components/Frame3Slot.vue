<template>
     <div v-for="(item,index) in getTagData" :key="index" class="itemBlock">
                <section class="itemTitle">
                <div id="text">
                    <slot name = "red"   v-if = " index === 0 "></slot>
                    
                    <slot name="green"  v-if = " index === 1 "></slot>
                    <slot name="blue" v-if = " index === 2 "></slot>
                    <slot name="yellow" v-if = " index === 3 "></slot>
                    <slot name="orange" v-if = " index === 4 "></slot>
                    <slot name="purple" v-if = " index === 5 "></slot>
                    <slot name="pink" v-if = " index === 6 "></slot>
                    <slot name="brown" v-if = " index === 7 "></slot>
                </div>
            </section>
            
        </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
    name:`Frame2Slot`,
    components:{
        
    },
    computed:{
        
        ...mapGetters(['getTagData']),
    }
}
</script>


<style lang="sass" scoped>

#redC
    color: red
    background-color: red
    border-radius: 50%
    margin-right: 16px

</style>


