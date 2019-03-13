import React from 'react';
import { Link } from 'react-router-dom';
const ComicList = (props) => {
    const desktopDisplay = props.comics && props.comics.length > 0 ? props.comics.map(c => {
        return (
            <li className="collection-item show-on-medium-and-up hide-on-small-only" key={c.id}>
                <div className="row">
                    <div className="col s9">
                        <div style={{ fontSize: '13pt' }}><b>{c.title}</b></div>
                        <p style={{ textAlign: 'justify' }}>{c.description ? c.description : "Updating..."}</p>
                    </div>
                    <div className="col s3">
                        <img width="80%" src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt={c.title} className="responsive-img center" />
                    </div>
                </div>
            </li>
        )
    }) : "";

    const mobileDisplay = props.comics && props.comics.length > 0 ? props.comics.map(c => {
        return (
            <li className="collection-item show-on-small hide-on-med-and-up" key={c.id}>
                <div className="container">
                    <div className="center-align"><img width="70%" src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt={c.title} className="responsive-img" /></div>
                    <div className="center-align" style={{ fontSize: '13pt' }}><b>{c.title}</b></div>
                    <p style={{ textAlign: 'justify' }}>{c.description ? c.description : "Updating..."}</p>
                </div>
            </li>
        )
    }) : "";
    return (
        <div>
            <ul className="collection">
                <li className="collection-header" style={{ marginLeft: '10px' }}><h4>Comic(s)</h4></li>
                {desktopDisplay}
                {mobileDisplay}
            </ul>
            <div className="center-align"><Link to='/'>Go Back</Link></div>
        </div>
    )
}
export default ComicList