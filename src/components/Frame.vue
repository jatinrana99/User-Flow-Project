<template>
    <section id="Frame">
        <section id="DropZone">



            <section>
                <div class="itemBlock" v-if = " arr[0] ===  this.$store.state.addTag.selectedData[1] ">
                    <div>
                    <i class="fa-solid fa-user-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                </div>
                </div>


                <div class="itemBlock" v-if = " arr[1] ===  this.$store.state.addTag.selectedData[2] ">
                    <div>
                        <i class="fa-solid fa-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[1] }}</div>
                </div>
                </div>

                <div class="itemBlock" v-if = " arr[2] ===  this.$store.state.addTag.selectedData[3] ">
                    <div>
                        <i class="fa-solid fa-envelope-open-text" id="tag"></i>
                    <div class="itemTitle">{{ arr[2] }}</div>
                </div>
                </div>

                <div class="itemBlock" v-if = " arr[3] ===  this.$store.state.addTag.selectedData[4] ">
                    <div>
                    <i class="fa-solid fa-file-circle-check" id="tag"></i>
                    <div class="itemTitle">{{ arr[3] }}</div>
                </div>
                </div>

                <div class="itemBlock" v-if = " arr[4] ===  this.$store.state.addTag.selectedData[5] ">
                    <div>
                        <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">{{ arr[4] }}</div>
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
export default {
    name:`Frame`,
    data(){
        return{
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request','close'],
        }
    },
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
    

    div
        display: flex
        gap: 15px

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)

.itemTitle
    color: rgba(71, 84, 97, 1)

</style>