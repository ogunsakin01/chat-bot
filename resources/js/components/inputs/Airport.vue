<template>
    <div class="form-group">
        <v-autocomplete :items="items" v-model="airport" :get-label="getLabel"
                        :component-item='template' @update-items="updateItems">
        </v-autocomplete>
    </div>
</template>

<script>
    import AirportsItemTemplate from './../plugins/Airportsitemtemplate.vue'
    export default {
        name: "Airport",
        props : ['title'],
        data() {
            return {
                airport: {id: 0, code: '', name: 'find airport'},
                items: [{id: 0, code: '', name: 'find airport'}],
                template: AirportsItemTemplate,
            }
        },
        mounted() {
            this.checkItem()
        },
        methods: {
            updateItems(text) {
                axios.get(this.$root.api_url + '/plugins/airports-type-ahead/' + text)
                    .then((response) => {
                        this.items = response.data.data
                    })
                    .catch((error) => {
                        this.$toastr.e(error.response.data.message)
                        this.items = [{id: 0, code: '', name: 'find airport'}]
                    })
            },
            checkItem() {
                if (this.airport !== '') {
                    this.$root.$emit('airport', this.airport)
                }
            },
            getLabel() {
                if (this.airport.name) {
                    return this.airport.name
                }
                return ''
            },
        }
    }
</script>


