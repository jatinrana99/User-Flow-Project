<template>
    <section>
        <section id="frame1">
            <div id="action">
            <i class="fa-solid fa-bolt" id="bolt"></i>
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
    name:`SlideBarTitle`,

}
</script>


<style lang="sass" scoped>

#frame1
    display : flex
    border-bottom : 1px solid rgba(227, 229, 232, 1)
    width: 360px
    height: 70px
    padding: 24px 24px 0px 24px

#action
    width: 265px
    height: 25px

#title
    color: rgba(249, 181, 6, 1)

#bolt
    color: rgba(249, 181, 6, 1)
    margin-right: 12px

#optionIcon
    i
    color: rgba(157, 168, 180, 1)

</style>