import s from './MyPosts.module.css'
import Post from './Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message=" Hi,how are you?" />
            <Post message=" It's my first post" />
        </div>


    )
}
export default MyPosts