export default {
    changeTasks({commit}, newTasks){
        commit('CHANGE_TASKS', newTasks);
    },
    handleToggleForm({commit}){
        commit('HANDLE_TOGGLE_FORM');
    },
    handleSearch({commit}, strSearch){
        // console.log('actions handlesearch', strSearch);
        commit('HANDLE_SEARCH', strSearch);
    },
    handleClear({commit}){
        commit('HANDLE_CLEAR');
    },
    handleSort({commit}, obj){
        commit('HANDLE_SORT', obj);
    },
    handleDelete({commit, state}, taskDelete){
        let newTasks = state.listTask.filter(task => task.id !== taskDelete.id);
        commit('CHANGE_TASKS', newTasks);
    },
    handleAddNewTask({commit, state}, taskPush){
        commit('HANDLE_ADD_NEW_TASK', taskPush);
    },
    handleEdit({commit}, taskSelected){
        commit('HANDLE_EDIT', taskSelected);
    },
    handleEditTaskById({commit, state}, taskSelected){
        var tasksClone = [...state.listTask];
        let index = tasksClone.findIndex(item => item.id === taskSelected.id);
        if(index !== -1){
            tasksClone.splice(index, 1, taskSelected);
            commit('CHANGE_TASKS', tasksClone);
        }
    }
}
