<template>
    <div class="form-group">
        <v-autocomplete :items="items" v-model="airline" :get-label="getLabel"
                        :component-item='template' @update-items="updateItems">
        </v-autocomplete>
    </div>
</template>

<script>
    import AirlinesItemTemplate from './../plugins/Airlinesitemtemplate.vue'

    export default {
        name: "Airline",
        props : ['title'],
        data() {
            return {
                airline: {id: 0, code: '', name: 'find airline'},
                items: [{id: 0, code: '', name: 'find airline'}],
                template: AirlinesItemTemplate,
            }
        },
        mounted() {
            this.checkItem()
        },
        methods: {
            updateItems(text) {
                axios.get(this.$root.api_url + '/plugins/airlines-type-ahead/' + text)
                    .then((response) => {
                        this.items = response.data.data
                    })
                    .catch((error) => {
                        this.$toastr.e(error.response.data.message)
                        this.items = [{id: 0, code: '', name: 'find airline'}]
                    })
            },
            checkItem() {
                if (this.airline !== '') {
                    this.$root.$emit('airline', this.airline)
                }
            },
            getLabel() {
                if (this.airline.name) {
                    return this.airline.name
                }
                return ''
            },
        }
    }
</script>

<style scoped>

</style>
