<template>
    <div>
        <b>#{{ item.id }}</b>
        <img :src="'http://pics.avs.io/25/25/' + item.code + '.png'" class="img-rounded img-responsive"/>
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
