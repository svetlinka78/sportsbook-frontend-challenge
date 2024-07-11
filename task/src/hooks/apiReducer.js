export const initialState = {
  isLoading: false,
  error: null,
  task: null
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case "post":
      return {
        ...state,
        isLoading: false,
        error: null,
        //task: { ...state.task, taskList: [action.payload, ...state.task.taskList] }
        //task: [action.payload, ...state.task] 
        task: [action.payload, ...state.task]
      };

    case "get":
      return {
        ...state,
        isLoading: false,
        error: null,
        task: action.payload 
      };

    case "put":
      return {
        ...state,
        isLoading: false,
        error: null,
        task: [...state.task.map(x => (x.id === action.id ? action.payload : x))]
      };

    case "delete":
      return {
        ...state,
        isLoading: false,
        error: null,
        task: [...state.task.filter(x => x.id !== action.id)]
      };

    case "REJECTED":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default apiReducer;