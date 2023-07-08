<template>
    <section>
        <section id="frame1">
            <div id="action">
                <i class="fa-solid fa-chevron-left" id="back" @click="back()"></i>
            <span id="title">Add actions</span>
        </div>
        </section>
        <section id="frame2"></section>
    </section>
</template>


<script>
import router from '@/router';


export default {
    name:`SlideBarTitle2`,
    methods:{
        back(){
            router.push({path:'/'})
        }
    }

}
</script>


<style lang="sass" scoped>

#frame1
    display : flex
    border-bottom : 1px solid rgba(227, 229, 232, 1)
    width: 360px
    height: 70px
    padding: 24px 24px 0px 24px

#action
    width: 265px
    height: 25px

#title
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    text-align: left
    color: rgba(71, 84, 97, 1)


#back
    color: rgba(71, 84, 97, 1)
    margin-right: 12px


</style>