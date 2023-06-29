<template>
    <section id="content">
        <section id="SliderbarSectionTitle">
            <div id="title">Assigned actions</div>
            <div id="subTitleText">The selected actions will run in the background when the user journey gets to this element</div>
        </section>


        <section>
                <section>
                <div class="itemBlock" v-if = " arr[0] ===  this.$store.state.addTag.selectedData[1] " @click = "tagCustomer()">
                    <div>
                    <i class="fa-solid fa-user-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                    <div id="status" v-if = " arr[5] === this.$store.state.addTag.status[0] ">

                        <i class="fa-solid fa-bed" id="tag"></i>
                        {{this.$store.state.addTag.status[0]}}
                    </div>
                </div>
                </div>

<!-- 
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
                </div> -->

                <div class="itemBlock" v-if = " arr[4] ===  this.$store.state.addTag.selectedData[1] ">
                    <div>
                        <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">{{ arr[4] }}</div>
                </div>
                </div>

                <!-- <p id="title2">Integrations with other apps</p> -->
            

                <!-- <div class="itemBlock">
                    <div>
                    <i class="fa-brands fa-google-drive"></i>
                    <div class="itemTitle">Send data to Google Sheet</div>
                </div>                   
                </div> -->
                <!-- <p>{{ this.$store.state.addTag.selectedData }}</p>
                <p>{{ this.$store.state.addTag.selectedData[0] }} 2</p>
                <p>{{ this.$store.state.addTag.selectedData[1] }} 1</p> -->
            </section>

            </section>



        <section id="draggableItemMenu" else> 
            <!-- add action code -->

        <div id="addAction" >Add actions</div>
        <div>
            <!-- <p>{{ this.$store.state.addTag.selectedData[1] }}</p>
            <p>{{ this.$store.state.addTag.selectedData[0] }}</p> -->
        </div>
        <div>
            <i class="fa-regular fa-plus" id="plus"  @click="addAction()"></i>
        </div>    
        </section>
    </section>
</template>

<script>
import router from '@/router';
export default {
    name:`Content`,
    data(){
        return{
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request', 'Inactive'],

        }
    },
    methods:{
        addAction(){
            router.push({path:'/FunnelCanvas2'});
        },
        tagCustomer(){
            router.push({path:'/FunnelCanvas3'});
        }
    }
}
</script>

<style lang="sass" scoped>

#tag
    color: rgba(71, 84, 97, 1)

#status
    margin-left: 25px

#content
    width: 360px
    height: 170px
    padding: 22px 22px 0px 22px
    gap: 22px


#title
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    text-align: left
    color: rgba(71, 84, 97, 1)

#subTitleText
    font-family: Inter
    font-size: 14px
    font-weight: 300
    line-height: 17px
    letter-spacing: 0em
    text-align: left
    color: rgba(157, 168, 180, 1)

#draggableItemMenu
    width: 316px
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    display: flex
    padding: 25px

#addAction
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    text-align: left
    color: rgba(0, 82, 255, 1)
    width: 225px
    height: 19px

#plus 
    color: rgba(0, 82, 255, 1)


    
.itemBlock
    width: 316px
    height: 69px
    border-radius: 14px
    border: 1px solid
    color: rgba(227, 229, 232, 1)
    padding: 25px
    background-color: #f9f9f9
    

    div
        display: flex
        gap: 15px

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)

.itemTitle
    color: rgba(71, 84, 97, 1)



</style>