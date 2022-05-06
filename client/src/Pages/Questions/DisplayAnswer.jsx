import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { useDispatch, useSelector } from 'react-redux'

import { deleteAnswer } from '../../actions/question'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {

    
    //for popup
    const location = useLocation()
    const url = "http://localhost/3000"
    // const [popup, setpopup] = useState(false);

    // const handleShare = () => {
    //     setpopup(!popup)
    // }

    // let popupRef = useRef();

    // useEffect(() => {
    //     let handler = (e) => {
    //       if(!popupRef.current.contains(e.target)){
    //         setpopup(false);
    //       }
    //     };

    //     document.addEventListener("mousedown", handler);

    //     return () => {
    //       document.removeEventListener("mousedown", handler);
    //   };
    // });

    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }

    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }
    

  return (
    <div>
        {
            question.answer.map((ans) => (
                <div className='display-ans' key={ans._id} >
                    <p>{ans.answerBody}</p>
                    <div className="question-action-user">
                        <div>
                            <button onClick={handleShare}>Share</button>
                            {
                                User?.result?._id === ans?.userId && (
                                    <button onClick={() => handleDelete(ans._id, question.noOfAnswers) }>Delete</button>
                                )
                            }
                            {/* {popup ?
                            <div ref={popupRef} className="share-popup">
                                <p className='p-header'><strong>Share a link to this question</strong> (Includes your user id)</p>
                                <div className="abt-link">
                                    <input type="text" value={url+location.pathname}/>
                                </div>
                                <div className='abt-copy-btn'>
                                    <button onClick={handleCopy}>Copy link</button>
                                </div>
                            </div> : ""} */}
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/Users/${ans.userId}`} className='user-link' >
                                <Avatar backgroundColor='green' px='8px' py='5px' borderRadius='2px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {ans.userAnswered.charAt(0).toUpperCase() + ans.userAnswered.slice(1)}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer