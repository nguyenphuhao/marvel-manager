import React from 'react';
import { Link } from 'react-router-dom';
const SignedInLinks = (props) => {
    return (
        <ul id={props.id ? props.id : new Date().getTime()} className={props.className}>
            <li>
                <Link to="/"><i className="material-icons">arrow_back</i> </Link>
            </li>
        </ul>
    )
}

export default SignedInLinks;