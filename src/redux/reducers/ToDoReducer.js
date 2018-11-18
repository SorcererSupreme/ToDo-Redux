const initialState = {
                        toDo: ['bananas','pineapple','mausambi','chiku','sitaphal'],
                        completed: [],
                        deleted: []
                    }

export default function reducer(state = initialState ,action){
    switch(action.type){
      case 'ADD_TODO':
        return {
          toDo: [...state.toDo, action.payload.toDo],
          completed: state.completed,
          deleted: state.deleted
        }

      case 'COMPLETED':

        var newToDos = [...state.toDo];
        newToDos.splice(newToDos.indexOf(action.payload.completed),1);
        return {
          //remember to keep all the new arrays immutable!
          toDo: newToDos,
          completed: [...state.completed, action.payload.completed],
          deleted: state.deleted
        }

      case 'DELETED':
        var newToDosDeleted = [...state.toDo];
        newToDosDeleted.splice(newToDosDeleted.indexOf(action.payload.deleted),1);
        return {
          toDo: newToDosDeleted,
          completed: state.completed,
          deleted: [...state.deleted, action.payload.deleted]
        }

      default:
        return state;
    }
  }