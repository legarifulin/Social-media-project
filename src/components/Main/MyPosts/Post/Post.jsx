import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <div className={s.item}>
                    <img src="#" alt="" />
                    {props.message}
                    <div> Likes {props.likesCount}</div>
                </div>
            </div>
        </div>


    )
}
export default Post