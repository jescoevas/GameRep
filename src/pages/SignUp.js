import React, {Component} from 'react'

const apiKey = 'AIzaSyAuEDjy8XGfvdNtzo1O99CmiQLKE80ZFbA'

export class SignUp extends Component{

  render(){
    return(
        <div className='auth-form-container animated fadeIn fast'>
          <form className='auth-form'>
            <h2 align='center'>Sign up</h2>
            <table width='100%'>
              <tr><td>
                <input
                type='text'
                placeholder='Name'
                className='form-control search m-2'
                />
              </td></tr>
              <tr><td>
                <input
                type='text'
                placeholder='Email'
                className='form-control search m-2'
                />
              </td></tr>
              <tr><td>
                <input
                type='password'
                placeholder='Password'
                className='form-control search m-2'
                />
              </td></tr>
              <tr><td>
                <input
                type='password'
                placeholder='Confirm password'
                className='form-control search m-2'
                />
              </td></tr>
              <tr><td align='center'>
                <input type="submit" className='btn btn-outline-success w-50' value='Sign up'/>
              </td></tr>
            </table>

          </form>
        </div>
    )
  }
}
