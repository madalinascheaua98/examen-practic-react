import React from 'react';
import {Link} from 'react-router-dom';
import AddPeopleForm from '../components/AddPeopleForm';

const Home = () => {
    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-12 ">
                <Link to="/people" className="btn btn-dark">People</Link>
                <AddPeopleForm />
            </div>
        </div>
   </div>
    )
}
export default Home