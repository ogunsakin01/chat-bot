<template>
    <div>
        <b>#{{ item.id }}</b>
        <abbr>{{ item.code }} - {{ item.name }}</abbr>
    </div>
</template>

<script>
    export default {
        props : {
            item : {required: true }
        }
    }
</script>

