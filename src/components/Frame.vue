<template>
    <section id="Frame">
        <section id="DropZone">



            <section id="inputDisplay">
                <div class="itemBlock__TagCustomer" v-if = " arr[0] ===  this.$store.state.addTag.selectedData[1]
                || arr[0] ===  this.$store.state.addTag.selectedData[2] 
                || arr[0] ===  this.$store.state.addTag.selectedData[3]
                || arr[0] ===  this.$store.state.addTag.selectedData[4]
                || arr[0] ===  this.$store.state.addTag.selectedData[5]
                || arr[0] ===  this.$store.state.addTag.selectedData[6]
                || arr[0] ===  this.$store.state.addTag.selectedData[7]
                || arr[0] ===  this.$store.state.addTag.selectedData[8]
                || arr[0] ===  this.$store.state.addTag.selectedData[9]  ">
                    <div id="tagHeading">
                    <i class="fa-solid fa-user-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                </div>



                <div v-for="(item , index) in getTagData" :key="index" class="itemBlock__TGOption">
                <section class="itemTitle">
                <div id="text">
                        <!-- <i v-if = " index === 0" class="fa-regular fa-circle" id="redC"></i>
                        <i v-if = " index === 1" class="fa-regular fa-circle" id="greenC"></i>
                        <i v-if = " index === 2" class="fa-regular fa-circle" id="blueC"></i>
                        <i v-if = " index === 3" class="fa-regular fa-circle" id="yellowC"></i>
                        <i v-if = " index === 4" class="fa-regular fa-circle" id="orangeC"></i>
                        <i v-if = " index === 5" class="fa-regular fa-circle" id="purpleC"></i>
                        <i v-if = " index === 6" class="fa-regular fa-circle" id="pinkC"></i>
                        <i v-if = " index === 7" class="fa-regular fa-circle" id="brownC"></i>

                    
                    {{ item }} -->


                    <Frame3Slot>
                        <template v-slot:red v-if = " index === 0 ">
                                <i class="fa-regular fa-circle" id="redC"></i>
                                {{ item }}

                        </template>
                        <template v-slot:green  v-if = " index === 1 ">
                            <i class="fa-regular fa-circle" id="greenC"></i>
                            {{ item }}
                        </template>
                        <template v-slot:blue  v-if = " index === 2 ">
                            <i class="fa-regular fa-circle" id="blueC"></i>
                            {{ item }}
                        </template>
                        <template v-slot:yellow  v-if = " index === 3 ">
                            <i class="fa-regular fa-circle" id="yellowC"></i>
                            {{ item }}
                        </template>
                        <template v-slot:orange  v-if = "index===4">
                            <i class="fa-regular fa-circle" id="orangeC"></i>
                            {{ item }}
                        </template>
                        
                        <template v-slot:purple  v-if = "index===5">
                            <i class="fa-regular fa-circle" id="purpleC"></i>
                            {{ item }}
                        </template>
                        <template v-slot:pink  v-if = "index===6">
                            <i class="fa-regular fa-circle" id="purpleC"></i>
                            {{ item }}
                        </template>
                        <template v-slot:brown >
                            <i v-if = "index===7" class="fa-regular fa-circle" id="purpleC"></i>
                            {{ item }}
                        </template>
                        
                    </Frame3Slot>
                       
                </div>
            </section>
            
        </div>

                </div>


                <div class="itemBlock" v-if = " arr[1] ===  this.$store.state.addTag.selectedData[5] 
                || arr[1] ===  this.$store.state.addTag.selectedData[2]
                || arr[1] ===  this.$store.state.addTag.selectedData[3]
                || arr[1] ===  this.$store.state.addTag.selectedData[4]
                || arr[1] ===  this.$store.state.addTag.selectedData[1]
                || arr[1] ===  this.$store.state.addTag.selectedData[6]
                || arr[1] ===  this.$store.state.addTag.selectedData[7]
                || arr[1] ===  this.$store.state.addTag.selectedData[8]
                || arr[1] ===  this.$store.state.addTag.selectedData[9]  ">
                    <div>
                        <i class="fa-solid fa-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[1] }}</div>
                </div>
                </div>

                <div class="itemBlock" v-if = " arr[2] ===  this.$store.state.addTag.selectedData[7]
                || arr[2] ===  this.$store.state.addTag.selectedData[2] 
                || arr[2] ===  this.$store.state.addTag.selectedData[3]
                || arr[2] ===  this.$store.state.addTag.selectedData[4]
                || arr[2] ===  this.$store.state.addTag.selectedData[5]
                || arr[2] ===  this.$store.state.addTag.selectedData[6]
                || arr[2] ===  this.$store.state.addTag.selectedData[1]
                || arr[2] ===  this.$store.state.addTag.selectedData[8]
                || arr[2] ===  this.$store.state.addTag.selectedData[9]  ">
                    <div>
                        <i class="fa-solid fa-envelope-open-text" id="tag"></i>
                    <div class="itemTitle">{{ arr[2] }}</div>
                </div>
                </div>

                <div class="itemBlock" v-if = " arr[3] ===  this.$store.state.addTag.selectedData[9] 
                || arr[3] ===  this.$store.state.addTag.selectedData[1]
                || arr[3] ===  this.$store.state.addTag.selectedData[2] 
                || arr[3] ===  this.$store.state.addTag.selectedData[3]
                || arr[3] ===  this.$store.state.addTag.selectedData[4]
                || arr[3] ===  this.$store.state.addTag.selectedData[5]
                || arr[3] ===  this.$store.state.addTag.selectedData[6]
                || arr[3] ===  this.$store.state.addTag.selectedData[7]
                || arr[3] ===  this.$store.state.addTag.selectedData[8]  ">
                    <div>
                    <i class="fa-solid fa-file-circle-check" id="tag"></i>
                    <div class="itemTitle">{{ arr[3] }}</div>
                </div>
                </div>

            
                <section id="inputDisplay__HTTP">


                    <div class="itemBlock__HTTP" v-if = " arr[4] ===  this.$store.state.addTag.selectedData[1] 
                    || arr[4] ===  this.$store.state.addTag.selectedData[3]
                    || arr[4] ===  this.$store.state.addTag.selectedData[5]
                    || arr[4] ===  this.$store.state.addTag.selectedData[2]
                    || arr[4] ===  this.$store.state.addTag.selectedData[4]
                    || arr[4] ===  this.$store.state.addTag.selectedData[6]
                    || arr[4] ===  this.$store.state.addTag.selectedData[7]
                    || arr[4] ===  this.$store.state.addTag.selectedData[8]
                    || arr[4] ===  this.$store.state.addTag.selectedData[9]   ">
                    <div>
                        <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">{{ arr[4] }}</div>
                </div>
            </div>

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
                        <div class="inputVal">{{ item[4
                    ] }}</div>
                    </div>
                </section>
            </section>

            <div class="itemBlock" v-if = " arr[6] ===  this.$store.state.addTag.selectedData[5] 
                || arr[6] ===  this.$store.state.addTag.selectedData[2]
                || arr[6] ===  this.$store.state.addTag.selectedData[3]
                || arr[6] ===  this.$store.state.addTag.selectedData[4]
                || arr[6] ===  this.$store.state.addTag.selectedData[1]
                || arr[6] ===  this.$store.state.addTag.selectedData[6]
                || arr[6] ===  this.$store.state.addTag.selectedData[7]
                || arr[6] ===  this.$store.state.addTag.selectedData[8]
                || arr[6] ===  this.$store.state.addTag.selectedData[9]  ">
                    <div>
                        <i class="fa-brands fa-google-drive"></i>
                    <div class="itemTitle">{{ arr[6] }}</div>
                </div>
                </div>
              
            </section>
            
                                    <!-- code for drop zone text -->
            <section>
            <div v-if = " arr[5] === this.$store.state.addTag.selectedData[0]"> 
            </div>
            <div  id="DropZoneText" v-else> 
                Your actions will appear here
            </div>
        </section>
        </section>
    </section>


    <section>
        
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Frame3Slot from './Frame3Slot.vue';

export default {
    name:`Frame`,
    data(){
        return{
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request','close' ,'Send data to Google Sheet'],
        }
    },
    computed:{
        
        ...mapGetters(['getTagData','getHttpData']),
    },
    components: { Frame3Slot }
}
</script>

<style lang="sass" scoped>

#Frame
    width: 1146px
    height: 936px
    padding: 14px
    border-radius: 14px
    gap: 14px
    background-color: rgba(255, 255, 255, 1)
    

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


#inputDisplay
    // width: 1114px
    width: 1114px
    margin-left: -1px
    margin-top: -1px
    border-radius: 14px
    // height: 908px
    border-radius: 14px
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
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    margin-top: 16px
    background-color: rgba(255, 255, 255, 1)
    

    div
        display: flex
        gap: 15px

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)

.itemTitle
    color: rgba(71, 84, 97, 1)

.itemBlock__TGOption
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    margin-top: 16px
    background-color: rgba(255, 255, 255, 1)

.itemBlock__TagCustomer
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    background-color: rgba(255, 255, 255, 1)

#tagHeading
    display: flex



.inputMain
    border-top: 1px solid rgba(157, 168, 180, 1)

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

#inputDisplay__HTTP
    margin-top: 16px
    border-radius: 14px
    border: 1px solid rgba(157, 168, 180, 1)
    background-color: rgba(255, 255, 255, 1)


.itemBlock__HTTP
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    background-color: rgba(255, 255, 255, 1)

    div
        display: flex
        gap: 15px

</style>