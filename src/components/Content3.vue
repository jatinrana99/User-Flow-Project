<template>
    <section id="content">
        <section id="SearchBar">
            <i class="fa-solid fa-plus" id="searchIcon" @click="addOption()"></i>
            <input type="search" placeholder="Add Tag " id="field" v-model="option">
        </section>

            <div v-for="(item , index) in options" :key="index" id="outerItem">
                <section id="item">
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
                <i class="fa-regular fa-trash-can" id="tag"></i>
            </section>
        </div>
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
            options:[]
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

#text
    color:rgba(71, 84, 97, 1)


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

#field
    color: rgba(157, 168, 180, 1)
    padding : 4px


#outerItem
    // border: 1px solid rgba(157, 168, 180, 1)
    width: 316px
    height: 57px
    padding: 5px 0px 5px 14px
    border-radius: 14px
    background-color: #f9f9f9
    margin-bottom: 20px

#item
    display: flex
    justify-content: space-between
    padding-top: 9px
    color: rgba(71, 84, 97, 1)

#tag
    color: rgba(157, 168, 180, 1)
    margin-right: 18px
    margin-top: 5px


</style>