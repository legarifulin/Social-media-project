import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        posts: [
            { id: 1, message: ' Hi,how are you?', likesCount: 12 },
            { id: 2, message: " It's my first post", likesCount: 11 }
        ],
        newPostText: 'it-kamsutra'
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
        dialogs: [
            { id: 1, name: 'Jawdat' },
            { id: 2, name: 'Martial' },
            { id: 3, name: 'Isadora' },
            { id: 4, name: 'Emberly' },
            { id: 5, name: 'Sam' }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)

}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state