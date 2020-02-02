<template>
<div style="max-width: 100%; overflow: auto">
    <button class="btn-sm btn btn-outline-primary mr-1 ml-1" @click="select(option)" v-for="option,key in this.options">{{ option.title }}</button>
</div>
</template>

<script>
    export default {
        props: ['title','options'],
        name: "Options",
        methods: {
            select(option){
                if(option !== ''){
                    this.$root.$emit('selected',option)
                }
            }
        },
    }
</script>

<style scoped>

</style>
