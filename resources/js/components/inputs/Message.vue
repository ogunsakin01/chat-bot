<template>
    <div>
    <div class="input-group">
        <input id="btn-input" type="text" name="message" @input="validateMessage"
               class="form-control input-sm" placeholder="Type your message here..." v-model="message"
               @keyup.enter="sendMessage"/>
        <span class="input-group-btn">
           <button class="btn btn-primary btn-group btn-block" id="btn-chat" @click="sendMessage">
           Send
           </button>
         </span>
    </div>
    <span class="text-danger font-italic font-weight-light" v-if="error.status">
           <small>{{ error.message }}</small>
    </span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props : ['title'],
        data() {
            return {
                message: '',
                error : {
                    'status' : false,
                    'message' : ''
                }
            }
        },
        methods: {
            sendMessage() {
                if (this.validateMessage()) {
                    this.$root.$emit('message', {
                        message: this.message
                    })
                    this.message = ''
                }
            },
            validateMessage() {
                this.error.status = false
                this.error.message = '';
                if (this.message === "") {
                    this.error.status = true
                    this.error.message = " Don't be shy, tell us your mind ... "
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style scoped>

</style>
