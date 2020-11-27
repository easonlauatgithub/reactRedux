import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})

//pass a reducer function directly as the reducer argument
const store = configureStore({
    reducer: rootReducer
})

//New way
//combineReducers
//It accepts an object full of slice reducers as its argument
//and returns a function that calls each slice reducer whenever an action is dispatched
//The result from each slice reducer are all combined together into a single object as the final result
const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

//Old way
//store needs to have a single "root reducer" function passed in when it's created
//if we have many different slice reducer functions
function rootReducer(state = {}, action) {
    return {
        users: usersReducer(state.users, action),
        posts: postsReducer(state.posts, action),
        comments: commentsReducer(state.comments, action)
    }
}