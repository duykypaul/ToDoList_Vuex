<template>
    <div class="card panel-success">
        <div class="card-header">List Task</div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listTask.length !== 0">
                <todo-list-item 
                    v-for="(task, index) in listTask" 
                    v-bind:key="task.id" 
                    v-bind:task="task"
                    v-bind:index="index + 1"
                />
            </tbody>
            <tbody v-else>
                <tr><td colspan="4">List Empty</td></tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import TodoListItem from './TodoListItem';
export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    data() {
        return {}
    },
    watch: {
		listTask : function(newTasks){
			localStorage.setItem("tasks", JSON.stringify(newTasks));
		} 
    },
    created() {
        let tasksString = localStorage.getItem("tasks") || '[]';
        this.changeTasks(JSON.parse(tasksString));
	},
    methods: {
        ...mapActions([
            'changeTasks'
        ])
    },
    computed: {
        ...mapGetters({
            'listTask': 'listTaskSearchSort'
        })
    }
}
</script>

<style>

</style>
