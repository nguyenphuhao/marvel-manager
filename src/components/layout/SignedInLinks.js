import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedInLinks = (props) => {
    return (
        <ul id={props.id ? props.id : new Date().getTime()} className={props.className}>
            <li>
                <NavLink to="/character"><i className="material-icons">arrow_back</i></NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;