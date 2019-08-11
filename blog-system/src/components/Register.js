import React from 'react';

const Register = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Register</h3>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <form>
                <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" placeholder="Repeat Password" />
                    </div>
                    <div className="form-group">
                        <label >Repeat Password</label>
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

export default Register;