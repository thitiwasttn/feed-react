import PropTypes from 'prop-types'
import React from "react";


function Input() {
    return (
        <div className="Input">
            <div className="Input__header">
                Create Post
            </div>
            <input type="text" className="Input__field"/>
        </div>
    );
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;