import React, {useState} from "react";
import './App.css';
import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post";


let id = 1;

function App() {
    const [posts, setPosts] = useState([])

    function addPost(title) {
        console.log('addPost() title {} ', title);
        const newPost = {id, title};
        setPosts([newPost, ...posts]);
        id = id + 1;
    }

    return (
        <div className="App">
            <Navbar/>
            {/*<Input addPost={addPost()}></Input>*/}
            <Input addPost={addPost}/>
            {
                posts.map((x) => {
                    return <Post id={x.id} title={x.title}/>
                })
            }
        </div>
    );
}

export default App;
