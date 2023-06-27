<template>
    <section id="Frame">
        <section id="DropZone">
            <div  id="DropZoneText"> 
                Your actions will appear here
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name:`Frame`
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
</style>