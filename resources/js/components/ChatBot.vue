<template>
    <div class="container">
        <div class="d-flex align-items-center p-3 my-3 bg-dark text-white-50 rounded shadow-sm">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Welcome to chat bot</h6>
            </div>
        </div>
        <div class="chat row" v-chat-scroll>
            <div v-for="message,key in messages" class="col-md-12">
                <div :class="myMessage(message.user.id)+' media chat-message position-sticky d-inline-block overflow-auto p-2 m-2 shadow-none rounded border message_' +(key)"
                     @mouseover="shadow(1,key)" @mouseleave="shadow(0,key)" v-if="!message.status" style="width: auto;">
                    <p class="media-body mb-0 small text-gray-dark">
                <span class="d-block">
                   <b class="font-weight-bold" v-if="hideMyName(message.user.id)"><fa :class="'fa fa-circle ' + online(message.user.id)"></fa> {{ message.user.name }}</b>
                    <small class="font-italic">{{ moment(message.created_at).format('MMM Do YYYY, h:mm a') }}</small>
                </span>
                        <span class="font-weight-normal">{{ message.message }} </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <router-view></router-view>
<!--            <airline @airline="saveAirline(airline)" :title="message"></airline>-->
<!--            <airport @airport="saveAirport(airport)" :title="message"></airport>-->
<!--            <message @message="saveMessage(message)" :title="message"></message>-->
        </div>
    </div>
</template>

<script>
    // import Airline from "./inputs/Airline";
    // import Airport from "./inputs/Airport";
    // import Message from "./inputs/Message";
    export default {
        // components: {Message, Airport, Airline},
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
                        "preferred_airline_code" : "",
                        "calendar" : false,
                        "cabin": "All"
                    }
                },
                message: {
                    'sender' : '',
                    'title' : '',
                    'message' : '',
                    'data' : {}
                },
                messages : [],
                error: {
                    status: false,
                    message: ''
                }
            }
        },
        mounted(){
            this.$root.$on('airport', this.saveAirport)
            this.$root.$on('airline', this.saveAirport)
            this.$root.$on('message', this.saveAirport)
        },
        methods: {
            shadow(status, key) {
                $('.message_' + key).removeClass("shadow")
                $('.message_' + key).addClass("shadow-none")
                if (status == 1)
                    $('.message_' + key).addClass("shadow")
                $('.message_' + key).removeClass("shadow-none")
            },
            saveAirport(airport){

            },
            saveAirline(airline){

            },
            saveMessage(message){

            }
        }
    }
</script>

<style scoped>

</style>
