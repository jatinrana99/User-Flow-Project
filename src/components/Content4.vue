<template>
    <section id="content">
        <p>Request End Point</p>
        <section id="SearchBar">
            <input type="text" placeholder="Enter End Point... " id="field" v-model="option">
        </section>


        <p>Request Method</p>
        <section id="SearchBar">
        <div>
            <input type="text" placeholder="Choose Method... " id="field" v-model="option">
            <div class="arrow">
                <i class="fa-solid fa-angle-up" id="arrowIcon"></i>
                <i class="fa-solid fa-angle-down" id="arrowIcon"></i>
            </div>
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
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="ans">
                <input type="text" placeholder="enter key" class="val">
                <input type="text" placeholder="enter value" class="val">
                <i class="fa-solid fa-trash"></i>
            </div>
        </section>

        <section>
            <p>Request Body</p>
            <textarea name="" id="textArea" cols="30" rows="10"></textarea>
        </section>

    </section>

</template>

<script>

export default {
    name:`Content3`,
    data(){
        return{
            option:"",
            arr:['Tag customer','Tag order','Send email notification','Select digital product','Make HTTPS request'],
            editIndex: -1,
            options:[],
            items: [
            'Post',
            'Put',
            'Delete',
            'Patch',
            ],
            nameRules: [
        v => !!v || 'Name is required',
            ],
        select: null,
        }
    },
    methods:{
        addOption(){
            this.options.push(this.option);
            console.log(this.options);
            this.$store.commit('tagData' , this.option)
            this.option='';
        }
  
    }
}
</script>

<style lang="sass" scoped>

.val
    border: 1px solid
    width: 140px

#mainTitle
    margin-top: 21px

.title
    border: 1px solid
    margin-right: 240px
    margin-right: 99px
    padding: 5px
.ans
    display: flex
    margin-top: 21px

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




</style>