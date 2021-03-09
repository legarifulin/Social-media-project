import s from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () => {

    let posts = [
        { id: 1, message: ' Hi,how are you?', likesCount: 12 },
        { id: 2, message: " It's my first post", likesCount: 11 }
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>


    )
}
export default MyPosts