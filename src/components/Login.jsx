import React from 'react'

function Login() {
  return (
    <div className="container register-form">
        <div className="form">
        <div className="note">
            <p>Please provide the correct information to Login</p>
        </div>
        <div className="form-content mt-3">
            <form>
                <div className="row col-6 mx-auto">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    defaultValue=""
                                    tabIndex="1"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    type="Password"
                                    className="form-control"
                                    placeholder="Password*"
                                    defaultValue=""
                                    tabIndex="2"
                                    required
                    
                                />
                            </div>
                        </div>
                        <button type="submit" className="btnSubmit float-right" tabIndex="18">
                        Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login