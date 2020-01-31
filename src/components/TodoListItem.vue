<template>
    <tr>
        <td class="text-center">{{index}}</td>
        <td>{{task.name}}</td>
        <td class="text-center"><span class="badge" v-bind:class="getLevelClass">{{getLevelName}}</span></td>
        <td>
            <b-button v-on:click="handleEdit" variant="warning">Edit</b-button>
            <b-button v-on:click="handleDelete" variant="danger">Delete</b-button>
        </td>
    </tr>
</template>

<script>
import mapLevel from '../mocks/levels';
import {mapActions} from 'vuex';
export default {
    name: 'todo-list-item',
    props: {
        task: {type: Object, default: {}},
        index: Number
    },
    data() {
        return {
            mapLevel: mapLevel
        }
    },
    methods: {
        ...mapActions({
            'actionHandleDelete': 'handleDelete',
            'actionHandleEdit': 'handleEdit',
        }),
        handleDelete(){
            this.actionHandleDelete(this.task);
        },
        handleEdit(){
            this.actionHandleEdit(this.task);
        }
    },
    computed: {
        getLevelName() {
            return this.mapLevel[this.task.level].name;
        },
        getLevelClass() {
            return this.mapLevel[this.task.level].class;
        }
    },
}
</script>

<style>

</style>
