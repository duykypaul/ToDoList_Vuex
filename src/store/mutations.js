export default {
    CHANGE_TASKS(state, newTasks){
        state.listTask = newTasks;
    },
    HANDLE_TOGGLE_FORM(state){
        state.isShowForm = !state.isShowForm;
    },
    HANDLE_SEARCH(state, strSearch){
        // console.log('mutations handlesearch', strSearch);
        state.strSearch = strSearch;
    },
    HANDLE_CLEAR(state){
        state.strSearch = '';
    },
    HANDLE_SORT(state, obj){
        state.sortBy = obj.sortBy;
        state.sortDir = obj.sortDir;
    },
    HANDLE_ADD_NEW_TASK(state, taskPush){
        state.listTask.push(taskPush);
    },
    HANDLE_EDIT(state, taskSelected){
        state.isShowForm = true;
		state.taskSelected = taskSelected;
    }
}
