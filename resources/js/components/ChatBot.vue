<template>
    <div class="container">
        <div class="d-flex align-items-center p-3 my-3 bg-dark text-white-50 rounded shadow-sm">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Welcome to chat bot</h6>
            </div>
        </div>
        <div class="chat row" v-chat-scroll>
            <div v-for="message,key in messages" class="col-md-12">
                <div
                    class="media chat-message position-sticky d-inline-block overflow-auto p-2 m-2 shadow-none rounded border"
                    @mouseover="shadow(1,key)" @mouseleave="shadow(0,key)" style="width: auto;">
                    <p class="media-body mb-0 small text-gray-dark">
                <span class="d-block">
                    <small class="font-italic">{{ message.sender }}</small>
                </span>
                        <span class="font-weight-normal">{{ message.message }} </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    const actions = require('./../actions')

    export default {
        data() {
            return {
                flight: {
                    "origin_destinations": [
                        {
                            "departure_city": "",
                            "destination_city": "",
                            "departure_date": "",
                            "return_date": ""
                        }
                    ],
                    "search_param": {
                        "no_of_adult": 0,
                        "no_of_child": 0,
                        "no_of_infant": 0,
                        "preferred_airline_code": "",
                        "calendar": false,
                        "cabin": "All"
                    }
                },
                user: 'User',
                messages: [],
                message: {
                    sender: '',
                    message: ''
                },
                error: {
                    status: false,
                    message: ''
                },
                process: 'welcome'
            }
        },
        mounted() {
            this.start()
            this.$root.$on('airport', this.saveAirport)
            this.$root.$on('airline', this.saveAirline)
            this.$root.$on('message', this.saveMessage)
            this.$root.$on('selected', this.saveSelected)
        },
        methods: {
            shadow(status, key) {
                $('.message_' + key).removeClass("shadow")
                $('.message_' + key).addClass("shadow-none")
                if (status == 1)
                    $('.message_' + key).addClass("shadow")
                $('.message_' + key).removeClass("shadow-none")
            },
            start() {
                let process = actions[this.$data.process]
                this.messages.push({
                    sender: 'Bot',
                    message: process.title
                })
                this.$router.push({
                    name: process.input,
                    params: process.data
                })
            },
            saveAirport(airport) {
                console.log(airport)
            },
            saveAirline(airline) {
                console.log(airline)
            },
            saveMessage(message) {
                console.log(message)
            },
            saveSelected(option) {
                this.messages.push({
                    sender: this.user,
                    message: option.message,
                })
                this.process = option.action
                this.start()
            },
        }
    }
</script>

<style scoped>

</style>
