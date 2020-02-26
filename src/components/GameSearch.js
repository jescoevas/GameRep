import React from 'react'


export const GameSearch = (props) => {
    return (
      <div className="row animated fadeIn fast">
          <div className="col-md-11">
              <input
              type="text"
              spellCheck="false"
              className="form-control m-5 gamesearch"
              placeholder="Search for a game"
              onChange={e => props.onResults(e.target.value)}/>
          </div>
      </div>
    )
}
