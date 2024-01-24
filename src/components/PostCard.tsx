import { Iposts } from '../GlobalTypes'
import { AiTwotoneLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";


const PostCard = (props: Iposts) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {avatar, comments, likes, image, post} = props
  return (
    <div className='post_container'>
        <div className='post_header'>
            <img src={avatar} width="50px" height="50px"/>
        </div>
        <div className='post_body'>
            <img src={image}/>
        </div>
        <div className='post_footer'>
            <span><AiTwotoneLike />{` ${likes} likes`}</span>
            <span><MdModeComment />{` ${comments} comments`}</span>
        </div>
    </div>
  )
}

export default PostCard