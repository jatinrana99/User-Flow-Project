<template>
    <section>
        <section id="frame1">
            <div id="action">
                <i class="fa-solid fa-chevron-left" id="back" @click="back()"></i>
            <span id="title">Make HTTPS Request</span>
    
        </div>
        <div id="optionIcon">
            <i class="fa-solid fa-ellipsis" @click="displayOption(index)"></i>
        </div>
        </section>
        <section id="frame2" v-if="showItem==index">
            <div>
                <section class="activeAndDel" @click="inActive()">
                    <i class="fa-solid fa-bed" id="tag"></i>
                    <div>Make inactive</div>
                </section>
                <section class="activeAndDel" @click="close()">
                    <i class="fa-regular fa-trash-can" id="delete"></i>
                    <div class="deleteTitle">Delete action</div>
                </section>
            </div>
        </section>
    </section>
</template>


<script>
import router from '@/router';


export default {
    name:`SlideBarTitle4`,
    data(){
        return{
            showItem:-1,
            status:'Inactive'
        }
    },
    methods:{
        back(){
            router.push({path:'/'})
        },
        displayOption(index){
            this.showItem = index;
        },
        close(){
            this.showItem = -1;
        },
        inActive(){
            this.$store.commit('status', this.status)
            router.push({path:'/'})
            console.log(this.$store.state.addTag.status[0])
        }
    }

}
</script>


<style lang="sass" scoped>

.activeAndDel
    display: flex
    margin: 9px
    

#delete
    color: red
    margin-right: 18px
    margin-top: 5px

.deleteTitle
    color: red
    margin-left: 6px
    

#frame1
    display : flex
    border-bottom : 1px solid rgba(227, 229, 232, 1)
    width: 360px
    height: 70px
    padding: 24px 24px 0px 24px

#frame2
    z-index: 4
    position: absolute
    background-color: rgba(249, 249, 249, 1)
    left: 169px
    padding: 8px
    top: 62px
    border-radius: 19px

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

#optionIcon
    i
    color: rgba(157, 168, 180, 1)


#tag
    color: rgba(157, 168, 180, 1)
    margin-right: 18px
    margin-top: 5px
</style>