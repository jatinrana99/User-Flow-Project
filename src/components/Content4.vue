<template>
    <section id="content">
        <p>Request End Point</p>
        <section id="SearchBar">
            <input type="text" placeholder="Enter End Point... " id="field" v-model="endPoint">
        </section>


        <p>Request Method</p>
        <section id="methodBar">
        <div>
            <!-- <input type="text" placeholder="Choose Method... " id="field" v-model="methodReq" >
            <div class="arrow" @click="toggle(index)">
                <i class="fa-solid fa-angle-up" id="arrowIcon" ></i>
                <i class="fa-solid fa-angle-down" id="arrowIcon"></i>
            </div> -->
            <!-- <section id="mainItemBox" v-if = "editIndex==index">
                <div v-for="item in items" :key="item" id="items">{{ item }}</div>
            </section> -->
            <v-select
            v-model="select"
            :items="items"
            label="Choose Method..."
            required
            ></v-select>
        </div>
<!-- 
      <v-select id="SearchBar" :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required> items</v-select> -->
        </section>


        <section id="keyValue">
            <div id="mainTitle">
                <span class="title">Key</span >
                <span class="title">Value</span>
                <i class="fa-solid fa-plus" id="plus"></i>
            </div>
            <div class="ans">
                <input type="text" placeholder="enter key" class="val" v-model="key">
                <div id="enterVal">
                    <input type="text" placeholder="enter value" class="val" v-model="value">
                </div>
                <i class="fa-solid fa-trash" id="delete"></i>
            </div>
        </section>

        <section>
            <p>Request Body</p>
            <textarea name="" id="textArea" cols="30" rows="10" v-model="bodyReq" @click="toggle(index)"></textarea>
        </section>
    
            <div id="addDetails" v-if="editIndex==index" @click="addData(index)">Add Details</div>
        

        <section id="sectionConfirmation" v-if="showYes==index">
            <v-btn variant="outlined" id="cancel" @click="cancel()">Cancel</v-btn>
            <v-btn id="confirm" @click="confirm()">Confirm</v-btn>
        </section>

    </section>

</template>

<script>
import router from '@/router';


export default {
    name:`Content3`,
    data(){
        return{
            endPoint:"",
            value:"",
            key:"",
            bodyReq:"",
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request'],
            editIndex: -1,
            answers:[],
            item:"",
            items: [
            'Post',
            'Put',
            'Delete',
            'Patch',
            ],
            select: null,
            showYes: -1
        }
    },
    methods:{
        addData(index){
            this.answers.push(this.endPoint);
            this.answers.push(this.select);
            this.answers.push(this.key);
            this.answers.push(this.value);
            this.answers.push(this.bodyReq);
            console.log(this.answers, "hello from answer");
            this.$store.commit('httpData' , this.answers);

                    this.showYes = index;
                    console.log(this.editYes, "hello from toggle");
                
            this.endPoint = "";
            this.select = "";
            this.value = "";
            this.key = "";
            this.bodyReq = "";
            this.answers = [];
        },
        confirm(){
            router.push({path:'/'})
        },
        toggle(index){
                    this.editIndex = index;
                    console.log(this.editIndex, "hello from toggle");
                },
        cancel(){
            this.editIndex=-1;
        },
  
    }
}
</script>

<style lang="sass" scoped>

#addDetails
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
    padding-top: 15px
    padding-left: 25px
    margin-top: 14px

p 
    color: rgba(71, 84, 97, 1)
    font-family: Inter
    font-size: 16px
    font-weight: 600
    line-height: 19px
    letter-spacing: 0em
    padding-bottom: 10px

// #mainItemBox
//     background-color: rgba(255, 255, 255, 1)
//     border-radius: 14px
//     border: 1px solid 
//     z-index: 14
//     position: relative
//     width: 318px
//     left: -12px


#items
    padding: 5px
    margin-left: 10px

#delete
    padding-top: 7px
    padding-left: 12px
    color: rgba(157, 168, 180, 1)
.val
    width: 126px

#plus
    color: rgba(0, 82, 255, 1)

#enterVal
    border-right: 1px solid rgba(157, 168, 180, 1)
    border-left: 1px solid rgba(157, 168, 180, 1)
    padding-right: 8px
    padding-left: 13px
    height: 41px
    padding-top: 6px

#mainTitle
    margin-top: 10px

.title
    // border: 1px solid
    margin-right: 240px
    margin-right: 99px
    padding: 5px
    color: rgba(157, 168, 180, 1)
    //styleName: Typography/Paragraph;
    font-family: Inter
    font-size: 16px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em

.ans
    display: flex
    margin-top: 21px
    // border-top: 1px solid
    border-top: 1px solid  rgba(157, 168, 180, 1)
    // padding-top: 5px

#textArea
    width: 316px
    height: 311px
    border-radius: 14px
    border: 1px solid rgba(227, 229, 232, 1)


#text
    color:rgba(71, 84, 97, 1)

.arrow
    display: flex
    flex-direction: column
    width: 25px
    margin-left: 264px
    margin-top: -34px


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

#methodBar
    width: 316px
    height: 55px
    border-radius: 14px
    border: 1px solid rgba(227, 229, 232, 1)
    gap: 10px
    // padding-left: 10px
    margin-bottom : 20px

#arrowIcon
    color: rgba(157, 168, 180, 1)
    margin-right: 10px

#field
    color: rgba(157, 168, 180, 1)
    padding : 4px

#keyValue
    width: 316px
    height: 98px
    border-radius: 14px
    border: 1px solid rgba(227, 229, 232, 1)
    margin-bottom: 20px


#sectionConfirmation
    background-color: rgb(255, 255, 255)
    border: 1px solid rgb(227, 229, 232)
    padding: 20px
    margin-left: -22px
    color: rgb(71, 84, 97)
    width: 360px
    height: 92px
    border-radius: 14px
    margin-top: 30px

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




</style>