<template>
    <section id="actions">
<SliderBarTitle3></SliderBarTitle3>
<Content3></Content3>
    </section>
</template>

<script>
import SliderBarTitle3 from './SliderBarTitle3.vue';
import Content3 from './Content3.vue';

export default {
    name: `Action2`,
    components: { SliderBarTitle3,
    Content3 }
}
</script>

<style lang="sass" scoped>

#actions
    width: 360px
    height: 935px
    border-radius: 14px
    background-color: rgba(255, 255, 255, 1)

</style>