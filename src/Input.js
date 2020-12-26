import PropTypes from 'prop-types'
import React, {useState} from "react";


function Input({addPost}) {
    const [input, setInput] = useState('');

    function onChange(event) {
        let textInput = event.target.value;
        //console.log('textInput {} ' , textInput)
        setInput(textInput);
    }

    function onKeyDown(event) {
        let textInput = event.target.value;
        console.log('event.key {} ', event.key);
        if (event.key === 'Enter' && (textInput !== null || textInput !== '')) {
            addPost(textInput);
            /**
             *  for clear input
             *  */
            setInput('');
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">
                Create Post
            </div>
            <input type="text" className="Input__field" value={input} onChange={onChange} onKeyDown={onKeyDown}/>
        </div>
    );
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;