<template>
    <section id="content">
        <section id="SearchBar">
            <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
            <input type="search" placeholder="Search actions..." id="field" v-model="searchText">
        </section>
        <section id="ItemMenu"> 
            <p id="heading">Native Popup actions</p>
            <section>
                <div class="itemBlock">
                    <div>
                    <i class="fa-solid fa-user-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[0] }}</div>
                </div>
                    <input type="checkbox" class="check" @click="toggle(index)" v-model="selected" value="Tag customer">
                </div>


                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-tag" id="tag"></i>
                    <div class="itemTitle">{{ arr[1] }}</div>
                </div>
                    <input type="checkbox" class="check" @click="toggle(index)" v-model="selected" value="Tag order">
                </div>

                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-envelope-open-text" id="tag"></i>
                    <div class="itemTitle">{{ arr[2] }}</div>
                </div>
                    <input type="checkbox" class="check" @click="toggle(index)" v-model="selected" value="Send email notification">
                </div>

                <div class="itemBlock">
                    <div>
                    <i class="fa-solid fa-file-circle-check" id="tag"></i>
                    <div class="itemTitle">{{ arr[3] }}</div>
                </div>
                    <input type="checkbox" class="check" @click="toggle(index)" v-model="selected" value="Select digital product">
                </div>

                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">{{ arr[4] }}</div>
                </div>
                    <input type="checkbox" class="check" @click="toggle(index)" v-model="selected" value="Make HTTPS request">
                </div>

                <p id="title2">Integrations with other apps</p>
            

                <div class="itemBlock">
                    <div>
                    <i class="fa-brands fa-google-drive"></i>
                    <div class="itemTitle">Send data to Google Sheet</div>
                </div>
                    <input type="checkbox" class="check" @click="answer()">
                    <br>
                    <br>
                   
                </div>
                <!-- <p>{{ this.$store.state.addTag.selectedData }}</p>
                <p>{{ this.$store.state.addTag.selectedData[0] }} 2</p>
                <p>{{ this.$store.state.addTag.selectedData[1] }} 1</p> -->
            </section>
        </section>


        <section id="sectionConfirmation" v-if="editIndex==index">
            <v-btn variant="outlined" id="cancel" @click="cancel()">Cancel</v-btn>
            <v-btn id="confirm" @click="confirm()">Confirm</v-btn>
        </section>
    </section>
</template>

<script>
import router from '@/router';

export default {
    name:`Content`,
    data(){
        return{
            searchText:'',
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request'],
            editIndex: -1,
            selected:['close'],
        }
    },
    methods:{

        answer(){
            var value = this.searchText;
            console.log(value);
            console.log(this.arr);
            
            this.arr.find(
                function(str){
                    console.log(str==value);
                    return str == value;

                }
            )
        },
        toggle(index){
            this.editIndex=index;
        },
        cancel(){
            this.editIndex=-1;
        },
        confirm(){
            // this.$store = this.selected
            // console.log(this.selected);
            for(let i=0; i<this.selected.length; i++){
            let item = this.selected[i]
            console.log(item);
            this.$store.commit('addData', item);
            console.log(this.$store.state.addTag.item,"data in store");
            router.push({path:'/'})

            }
        }
    }
}
</script>

<style lang="sass" scoped>

#content
    width: 360px
    height: 170px
    padding: 22px 22px 0px 22px
    gap: 22px

#SearchBar
    width: 316px
    height: 47px
    border-radius: 14px
    border: 1px solid rgba(227, 229, 232, 1)
    gap: 10px
    padding-top : 10px
    padding-left: 10px
    margin-bottom : 20px

#searchIcon
    color: rgba(157, 168, 180, 1)
    margin-right: 10px


#ItemMenu
    width: 360px
    height: 668px
    padding: 22px 22px 0px 22px


#field
    color: rgba(157, 168, 180, 1)
    padding : 4px

#heading
    font-family: Inter
    font-size: 14px
    font-weight: 300
    line-height: 17px
    letter-spacing: 0em
    text-align: left
    color: rgba(157, 168, 180, 1)
    width: 140px
    height: 17px
    margin-bottom: 10px


.itemBlock
    display: flex
    justify-content: space-between
    margin: 30px

    div
        display: flex
        gap: 15px

#tag
    padding-top: 6px
    color: rgba(71, 84, 97, 1)


    
.check
    width: 24px
    height: 24px
    border-radius: 8px
    border: 1px solid rgba(227, 229, 232, 1)

.itemTitle
    color: rgba(71, 84, 97, 1)

#title2
    font-family: Inter
    font-size: 14px
    font-weight: 30
    line-height: 17px
    letter-spacing: 0em
    text-align: left
    color: rgba(157, 168, 180, 1)

#cancel
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    color: rgba(71, 84, 97, 1)
    width: 151px
    height: 47px
    border-radius: 14px


#confirm
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    color: rgba(255, 255, 255, 1)
    width: 151px
    height: 47px
    border-radius: 14px
    background-color: rgba(0, 82, 255, 1)
    margin-left: 14px



#sectionConfirmation
    background-color: rgba(255, 255, 255, 1)
    border-top: 1px solid rgba(227, 229, 232, 1)
    width: 360px
    height: 91px
    padding: 22px
    margin-left: -22px



</style>