<template>
    <b-col cols="12">
        <b-form-group>
            <b-dropdown text="Sort by">
                <b-dropdown-item v-on:click="handleSort('name', 'asc')">Name ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="handleSort('name', 'desc')">Name DESC</b-dropdown-item>
                <b-dropdown-divider/>
                <b-dropdown-item v-on:click="handleSort('level', 'asc')">Level ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="handleSort('level', 'desc')">Level DESC</b-dropdown-item>
            </b-dropdown>
            <span class="order badge badge-success badge-medium">{{sortBy}} - {{sortDir}}</span>
        </b-form-group>
    </b-col>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'control-sort',
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'sortBy',
            'sortDir',
        ])
    },
    methods: {
        ...mapActions({
            'actionHandleSort': 'handleSort'
        }),
        handleSort(sortBy, sortDir){
            let data = {"sortBy": sortBy, "sortDir": sortDir};
            // this.$store.dispatch('handleSort', data);
            this.actionHandleSort(data);
        }
    }
}
</script>

<style>
    .order {
        text-transform: uppercase;
    }
</style>
