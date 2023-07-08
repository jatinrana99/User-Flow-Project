<template>
    <section id="actions">
<SliderBarTitle></SliderBarTitle>
<Content></Content>
    </section>
</template>

<script>
import SliderBarTitle from './SliderBarTitle.vue';
import Content from './Content.vue';

export default {
    name: `Actions`,
    components: { SliderBarTitle,
    Content }
}
</script>

<style lang="sass" scoped>

#actions
    width: 360px
    height: 935px
    border-radius: 14px
    background-color: rgba(255, 255, 255, 1)

</style>