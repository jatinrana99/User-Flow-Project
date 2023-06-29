<template>
    <section id="actions">
<SliderBarTitle4></SliderBarTitle4>
<Content4></Content4>
    </section>
</template>

<script>
import SliderBarTitle4 from './SliderBarTitle4.vue';
import Content4 from './Content4.vue';

export default {
    name: `Action4`,
    components: { SliderBarTitle4,
    Content4 }
}
</script>

<style lang="sass" scoped>

#actions
    width: 360px
    height: 935px
    border-radius: 14px
    background-color: rgba(255, 255, 255, 1)

</style>