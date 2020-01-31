export default {
    listTaskSearchSort: state => {
        //search
        const {strSearch} = state;
        let newItems = state.listTask.filter(task => task.name.toLowerCase().includes(strSearch.toLowerCase()));
        
        //sort
        let listTask = [...newItems];
        listTask.sort(function(a, b){
            let numberSort = state.sortDir === 'asc' ? -1 : 1;
            if(a[state.sortBy] < b[state.sortBy]) return numberSort;
            else if(a[state.sortBy] > b[state.sortBy]) return numberSort * (-1);
            return 0;
        });
		return listTask;
    }
}