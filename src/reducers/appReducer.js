
export const appInitialState = {
    user_logged_in: true,
    tasks: [
        {
            id: "1",
            title: "First Task",
            description: "First Task description"
        },

        {
            id: "2",
            title: "Second Task",
            description: "Second Task description"
        },

        {
            id: "3",
            title: "Third Task",
            description: "Third Task description"
        }
    ]
}

export const appReducer = (state, action) => {

}