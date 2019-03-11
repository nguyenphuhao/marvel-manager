import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedInLinks = (props) => {
    return (
        <ul id={props.id ? props.id : new Date().getTime()} className={props.className}>
            <li>
                <NavLink to="../character">Characters</NavLink>
            </li>
            <li>
                <NavLink to="/">Comics</NavLink>
            </li>
            <li>
                <NavLink to="">Series</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks