<template>
    <div class="form-group add-task">
        <b-button v-on:click="handleToggleForm" type="button" class="btn btn-info btn-block">
            {{isShowForm ? "Close Form" : "Add Task"}}
        </b-button>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'form-add',
    data() {
        return {}
    },
    computed: mapState(['isShowForm']),
    methods: {
        ...mapActions(['handleToggleForm'])
    }
}
</script>

<style>

</style>
