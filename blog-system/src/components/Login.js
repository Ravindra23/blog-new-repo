import React from 'react';

const Login = (props) => {
    return (
        <div className="container">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-default">cancel</button>
                </form>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default Login;