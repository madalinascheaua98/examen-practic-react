import React from 'react';
import {Link} from 'react-router-dom';
import UserList from '../components/UserList';
import Check from '../components/Checkbox';

const People = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12 col-lg-3 ">
                    <Check />
                    <Link to ="/" className="btn btn-dark">Back Home</Link>
                </div>
                <div className="col-12 col-lg-9">
                    <UserList />
                </div>
            </div>
       </div>
    )
}
export default People