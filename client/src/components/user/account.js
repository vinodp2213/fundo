import React from 'react';
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import '../../App.css';

const UserAccount = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col s2">
                    <div className="col s12 m12">
                        <div className="card card-account">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <img className="circle responsive-img" src="https://img.icons8.com/color/48/000000/user.png"/>
                                    <h4>{ props.user.username} </h4>
                                    <ul className="acc-ul">
                                        <li className="acc-li">My campaigns</li>
                                        <li className="acc-li">My Donations</li>
                                        <li className="acc-li">View profile</li>
                                        <li className="acc-li"><Link to='/users/logout'>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        campaign : state.campaign,
        user : state.user
    }
}

export default connect(mapStateToProps)(UserAccount)