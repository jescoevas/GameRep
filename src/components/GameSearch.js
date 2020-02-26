import React from 'react'


export const GameSearch = (props) => {
    return (
      <div className="row">
          <div className="col-md-11">
              <input
              type="text"
              className="form-control m-5"
              placeholder="Search for a game"
              onChange={e => props.onResults(e.target.value)}/>
          </div>
      </div>
    )
}
