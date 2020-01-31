<template>
    <b-col cols="12" lg="6">
        <form-add />

        <b-form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <b-form-group >
                <label class="sr-only" for="">label</label>
                <b-form-input v-model="taskName"  type="text" class="form-control" placeholder="Task Name" />
            </b-form-group>
            <b-form-group>
                <label class="sr-only" for="">label</label>
                <select v-model="level" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </b-form-group>

            <b-button variant="primary" v-on:click="handleAddEdit">
                {{taskSelected === null ? "Submit" : "Update" }}
            </b-button>
            <b-button variant="secondary" v-on:click="handleCancel">Cancel</b-button>
        </b-form>
    </b-col>
</template>

<script>
import FormAdd from "./FormAdd";
import {mapState, mapActions} from 'vuex';

import uuidv4 from 'uuid/v4';
export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    data() {
        return {
            level: 0,
            taskName: '',
        }
    },
    watch: {
        taskSelected: function(newData, oldData){
            if(newData !== null) {
                this.taskName = newData.name;
                this.level = newData.level;
            }
        },
        isShowForm: function(newData, oldData){
            if(newData !== true) {
                this.taskName = '';
                this.level = 0;
            }
        },
    },
    computed: mapState(['isShowForm', 'taskSelected']),
    methods: {
        ...mapActions([
            'handleToggleForm',
            'handleAddNewTask',
            'handleEditTaskById'
        ]),
        handleCancel() {
            this.handleToggleForm();
            this.handleReset();
        },
        handleReset(){
            this.taskName = '';
            this.level = 0;
        },
        handleAddEdit(){
            let data ={
                id: this.taskSelected !== null ? this.taskSelected.id : uuidv4(),
                level: parseInt(this.level),
                name: this.taskName.trim()
            };
            if(data.name !== ""){
                if(this.taskName.taskSelected !== null){
                    this.handleEditTaskById(data);
                } else {
                    this.handleAddNewTask(data);
                }
                this.handleCancel();
            } else {
                alert('please enter your task name');
            }
        }
    }

}
</script>

<style>

</style>
