<template>
    <section id="Frame">
        <section id="DropZone">



            <section>
                <div class="itemBlock" v-if = " arr[0] ===  this.$store.state.addTag.selectedData[1] ">
                    <div id="tagHeading">
                    <i class="fa-solid fa-user-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                </div>
                </div>
                
                <div v-for="(item , index) in getTagData" :key="index" class="itemBlock">
                <section class="itemTitle">
                <div id="text">
                        <i v-if = " index === 0" class="fa-regular fa-circle" id="redC"></i>
                        <i v-if = " index === 1" class="fa-regular fa-circle" id="greenC"></i>
                        <i v-if = " index === 2" class="fa-regular fa-circle" id="blueC"></i>
                        <i v-if = " index === 3" class="fa-regular fa-circle" id="yellowC"></i>
                        <i v-if = " index === 4" class="fa-regular fa-circle" id="orangeC"></i>
                        <i v-if = " index === 5" class="fa-regular fa-circle" id="purpleC"></i>
                        <i v-if = " index === 6" class="fa-regular fa-circle" id="pinkC"></i>
                        <i v-if = " index === 7" class="fa-regular fa-circle" id="brownC"></i>

                    
                    {{ item }}
                </div>
            </section>
            
        </div>
            </section>

        </section>
    </section>


    <section>
        
    </section>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    name:`Frame3`,
    data(){
        return{
            arr:['Tag customer'],
        }
    },
    computed:{
        
        ...mapGetters(['getTagData']),
    }
}
</script>

<style lang="sass" scoped>

#tagHeading
    display: flex

#redC
    color: red
    background-color: red
    border-radius: 50%
    margin-right: 16px

#greenC
    color: green
    background-color: green
    border-radius: 50%
    margin-right: 16px

#blueC
    color: blue
    background-color: blue
    border-radius: 50%
    margin-right: 16px

#yellowC
    color: yellow
    background-color: yellow
    border-radius: 50%
    margin-right: 16px

#orangeC
    color: orange
    background-color: orange
    border-radius: 50%
    margin-right: 16px

#purpleC
    color: purple
    background-color: purple
    border-radius: 50%
    margin-right: 16px

#pinkC
    color: pink
    background-color: pink
    border-radius: 50%
    margin-right: 16px

#brownC
    color: brown
    background-color: brown
    border-radius: 50%
    margin-right: 16px

#Frame
    width: 1146px
    height: 936px
    padding: 14px
    border-radius: 14px
    gap: 14px
    background-color: rgba(255, 255, 255, 1)
    
#DropZone
    width: 1114px
    height: 908px
    border-radius: 14px
    border: 1px dashed rgba(157, 168, 180, 1)
    background-color: rgba(249, 249, 249, 1)
    
#DropZoneText
    width: 290px
    height: 82px
    font-family: Poppins
    font-size: 27px
    font-weight: 600
    line-height: 41px
    letter-spacing: 0em
    text-align: center
    color: rgba(194, 204, 214, 1)
    margin-top: 35%
    margin-left: 35%

.itemBlock
    width: 1076px
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    margin-left: 20px
    margin-top: 16px
    background-color: rgba(255, 255, 255, 1)

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)
    margin-right: 12px

.itemTitle
    color: rgba(71, 84, 97, 1)

</style>