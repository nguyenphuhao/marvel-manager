import React from 'react';
import { Link } from 'react-router-dom';
const ComicList = (props) => {
    console.log(props);
    const comicList = props.comics && props.comics.length > 0 ? props.comics.map(c => {
        return (
            <li className="collection-item" key={c.id}>
                <div className="row">
                    <div className="col s8">
                        <div style={{ fontSize: '13pt' }}><b>{c.title}</b></div>
                        <p style={{ textAlign: 'justify' }}>{c.description ? c.description : "Updating..."}</p>
                    </div>
                    <div className="col s3">
                        <img src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt={c.title} className="responsive-img" />
                    </div>
                </div>

            </li>
        )
    }) : "";
    return (
        <div>
            <ul className="collection">
                <li className="collection-header" style={{ marginLeft: '10px' }}><h4>Comic(s)</h4></li>
                {comicList}
            </ul>
            <div className="center-align"><Link to='/'>Go Back</Link></div>
        </div>
    )
}
export default ComicList