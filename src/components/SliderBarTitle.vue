<template>
    <section id="main">
        <section id="frame1">
            <div id="action">
            <i class="fa-solid fa-bolt"></i>
            <span id="title">Action</span>
        </div>
        <div id="optionIcon">
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        </section>
        <section id="frame2"></section>
    </section>
</template>


<script>
export default {
    name:`SlideBarTitle`
}
</script>


<style scoped>
#frame1 {
    display: flex;
    /* border: 2px solid; */
    border-bottom : 1px solid rgb(154, 149, 149);
    
}

#optionIcon{
    color: rgb(154, 149, 149) ;
}

#action span{
    padding-right: 102px;
}
</style>