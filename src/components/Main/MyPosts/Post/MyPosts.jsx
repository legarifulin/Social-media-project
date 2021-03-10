import s from './MyPosts.module.css'
import Post from './Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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