<template>
    <section id="actions">
<SliderBarTitle2></SliderBarTitle2>
<Content2></Content2>
    </section>
</template>

<script>
import SliderBarTitle2 from './SliderBarTitle2.vue';
import Content2 from './Content2.vue';

export default {
    name: `Action2`,
    components: { SliderBarTitle2,
    Content2 }
}
</script>

<style lang="sass" scoped>

#actions
    width: 360px
    height: 935px
    border-radius: 14px
    background-color: rgba(255, 255, 255, 1)

</style>