<template>
    <section id="Frame">
        <section id="DropZone">
            <section id="inputDisplay">
                <div class="itemBlock" v-if = " arr[0] ===  this.$store.state.addTag.selectedData[1] ">
                    <div id="tagHeading">
                    <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                </div>
                </div>
                <!-- <div>Hello {{ this.$store.state.addTag.selectedData[1] }}</div> -->
                <section v-for="item in getHttpData" :key="item">
                    <div class="inputMain">
                        <p class="inputHeading">Request End Point</p>
                        <div class="inputVal">{{ item[0] }}</div>
                    </div>
                    <div>
                        <p class="inputHeading">Request Method</p>
                        <div class="inputVal">{{ item[1] }}</div>
                    </div>
                    <section>
                        <div id="keyValHeading" class="inputMain">
                            <p class="inputHeading" id="key">Key</p>
                            <p class="inputHeading" id="value">Value</p>
                        </div>
                        <div id="keyValInput" class="inputMain">
                            <p class="inputVal">{{ item[2] }}</p>
                            <p class="inputVal">{{ item[3] }}</p>
                        </div>
                        
                    </section>
                    <div class="inputMain">
                        <p class="inputHeading">Request Body</p>
                        <div class="inputVal">{{ item[4] }}</div>
                    </div>
                </section>

            </section>

        </section>
    </section>


    <section>
        
    </section>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    name:`Frame4`,
    data(){
        return{
            arr:['Make HTTPS request'],
        }
    },
    computed:{
        
        ...mapGetters(['getHttpData']),
    }
}
</script>

<style lang="sass" scoped>

.inputHeading
    font-family: Inter
    font-size: 16px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em
    color: rgba(157, 168, 180, 1)
    padding-left: 25px
    padding-top: 15px
    padding-bottom: 15px

#keyValHeading
    display: flex
    gap: 480px

#keyValInput
    display: flex
    gap: 480px


.inputMain
    border-top: 1px solid rgba(157, 168, 180, 1)

.inputVal
    font-family: Inter
    font-size: 16px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em
    text-align: left
    color: rgba(71, 84, 97, 1)
    padding-left: 25px
    padding-top: 15px
    padding-bottom: 15px

#tagHeading
    display: flex

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
    
.itemBlock
    width: 1074px
    height: 69px
    border-bottom: 1px solid
    border-top-right-radius: 14px
    border-top-left-radius: 14px
    color: rgba(227, 229, 232, 1)
    padding: 25px
    background-color: rgba(255, 255, 255, 1)

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)
    margin-right: 12px

.itemTitle
    color: rgba(71, 84, 97, 1)

#inputDisplay
    // width: 1114px
    width: 1076px
    margin-left: 20px
    margin-top: 16px
    // height: 908px
    border-radius: 14px
    border: 1px solid rgba(0, 82, 255, 1)
    background-color: rgba(255, 255, 255, 1)

</style>