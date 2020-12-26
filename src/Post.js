import React, {useState} from "react";
import PropTypes from 'prop-types';

function Post({id, title}) {
    let imageRandom = `https://source.unsplash.com/random?sig=${id}`;
    return (
        <div className="Post">
            <input type="hidden" value={id}/>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={imageRandom} alt="" />
        </div>
    );
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Post;