import React from 'react'
import './games.css';
import { Link } from 'react-router-dom';
function anatomy() {
  return (
    <div className='game'>
        <center><iframe src="https://itch.io/embed/1488010" height="167" width="552" frameborder="0"><a href="https://ad0008-hub.itch.io/humananatomy-pedagogy">HumanAnatomy_Pedagogy by AD0008-HUB</a></iframe></center>
        <div>
          <h1>Click Play on itch.io to play the game</h1>
          <h1>Have Fun while Learning</h1>
        </div>
        <div>
        <Link to ='/homepg'>
            <center><button className='back-btn' type='submit'>
                Back
            </button></center>
        </Link>
        </div>
    </div>
  )
}

export default anatomy