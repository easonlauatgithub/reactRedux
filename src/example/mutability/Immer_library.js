//Immer uses a special JS tool called a Proxy to wrap the data you provide, 
//and lets you write code that "mutates" that wrapped data. 
//But, Immer tracks all the changes you've tried to make, 
//and then uses that list of changes to return a safely immutably updated value
function reducerWithImmer(state, action) {
    state.first.second[action.someId].fourth = action.someValue
}
//BEFORE BY HAND
function handwrittenReducer(state, action) {
    return {
      ...state,
      first: {
        ...state.first,
        second: {
          ...state.first.second,
          [action.someId]: {
            ...state.first.second[action.someId],
            fourth: action.someValue
          }
        }
      }
    }
}