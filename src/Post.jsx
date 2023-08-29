import {FiThumbsUp } from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa';
import {PiShareFatBold} from 'react-icons/pi';


function PostCard(props) {
  return (
 

        <div className='post'>
          
          <div className="posthead">

          <div className="profileImage">
           <img src={props.profileImage} alt="pr" width={60} />
          </div>
          <div className='mid'>
          <div className='profilename'>
           <span className='name'>   {props.name} </span>
          </div>
          <div className="date">
            {props.date}
          </div>

       </div>

     </div>

     <div className='postText'>
      {props.text}
     </div>

      <div className="mainImage">
        <img src={props.mainImage} alt="mainimage" />
      </div>

      <div className="postfooter">
        <div className="button">
          <FiThumbsUp/>
          Like
        </div>
       
        <div className="button">
         <PiShareFatBold />
             Share
          </div>
          <div className="button">
         <FaRegComment/>
            Comment
          </div>
      </div>
      </div>

   
  )
}

export default PostCard