import _ from 'lodash'

export const appInitialState = {
    logged_in_user: null,
    registered_users: [],
    tasks: []
}

export const appReducer = (state, action) => {
    let newState = _.cloneDeep(state)

    switch (action.type) {
        case "REGISTER_NEW_USER": {
            if (newState.registered_users.findIndex((user) => user.email === action.payload.email) === -1) {
                newState.registered_users.push(action.payload)
                newState.logged_in_user = action.payload.email
            }
            break
        }

        case "LOGIN_USER": {
            if (newState.registered_users.findIndex((user) => (user.email === action.payload.email) && (user.password === action.payload.password)) !== -1) {
                newState.logged_in_user = action.payload.email
            }
            break;
        }

        case "ADD_NEW_TASK": {
            newState.tasks.push(action.payload)
            break
        }

        case "EDIT_TASK": {
            newState.tasks = newState.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title, description: action.payload.description }
                }

                return task;
            })
            break;
        }

        case "DELETE_TASK": {
            newState.tasks = newState.tasks?.filter((task) => task.id !== action.payload.id)
            break;
        }

        case "LOGOUT_USER": {
            newState.logged_in_user = null
            break;
        }

        case "SYNC_LOCAL_STATE": {
            newState = JSON.parse(localStorage.getItem(action.payload))
            break;
        }

        default: {
            console.log("Invalid aciton.")
            return newState;
        }

    }


    localStorage.setItem("TODO_APP_BY_NITISH", JSON.stringify(newState))
    return newState
}