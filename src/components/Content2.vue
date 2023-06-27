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
                    <div class="itemTitle">Tag customer</div>
                </div>
                    <input type="checkbox" class="check">
                </div>


                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-tag" id="tag"></i>
                    <div class="itemTitle">Tag order</div>
                </div>
                    <input type="checkbox" class="check">
                </div>

                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-envelope-open-text" id="tag"></i>
                    <div class="itemTitle">Send email notification</div>
                </div>
                    <input type="checkbox" class="check">
                </div>

                <div class="itemBlock">
                    <div>
                    <i class="fa-solid fa-file-circle-check" id="tag"></i>
                    <div class="itemTitle">Select digital product</div>
                </div>
                    <input type="checkbox" class="check">
                </div>

                <div class="itemBlock">
                    <div>
                        <i class="fa-solid fa-shield-halved" id="tag"></i>
                    <div class="itemTitle">Make HTTPS request</div>
                </div>
                    <input type="checkbox" class="check">
                </div>

                <p id="title2">Integrations with other apps</p>
            

                <div class="itemBlock">
                    <div>
                    <i class="fa-brands fa-google-drive"></i>
                    <div class="itemTitle">Send data to Google Sheet</div>
                </div>
                    <input type="checkbox" class="check">
                </div>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name:`Content`,
    data(){
        return{
            searchText:''
        }
    },
    methods:{
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


</style>