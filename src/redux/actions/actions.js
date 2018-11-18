export function addToDoAction(toDo) {
    return {
        type: 'ADD_TODO',
        payload:{
            toDo: toDo
        }
    }
}

export function completedToDoAction(toDo) {
    return {
        type: 'COMPLETED',
        payload: {
            completed : toDo
        }
    }
}

export function deletedToDoAction(toDo) {
    return {
        type: 'DELETED',
        payload: {
            deleted: toDo
        }

    }
}