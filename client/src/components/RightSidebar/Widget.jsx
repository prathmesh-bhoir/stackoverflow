import React from 'react'
import './RightSidebar.css'

import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="subdiv-div-1">
                <img src={pen} alt="pen" width="18px" />
                <p>The robots are coming for ( the boring parts of ) your job</p>
            </div>
            <div className="subdiv-div-1">
                <img src={pen} alt="pen" width="18px" />
                <p>Episode 435: How a college extra-credit project became PHP3, still the...</p>
            </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="subdiv-div-1">
                <img src={comment} alt="comment" width="18px" />
                <p>How might the Staging Ground & the new Ask Wizard work on the Stack Exchange...</p>
            </div>
            <div className="subdiv-div-1">
                <img src={blackLogo} alt="blackLogo" width="18px" />
                <p>Question Close Reasons project - Introduction and Feedback</p>
            </div>
            <div className="subdiv-div-1">
                <img src={blackLogo} alt="blackLogo" width="18px" />
                <p>Overhauling our community's closure reasons and guidance</p>
            </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="subdiv-div-1">
                <p>8</p>
                <p>Which of the various Escape tags should escape from being burninated?</p>
            </div> 
            <div className="subdiv-div-1">
                <p>10</p>
                <p>Suspended from reviewing due to audit showing wrong tag</p>
            </div>         
        </div>

    </div>
  )
}

export default Widget