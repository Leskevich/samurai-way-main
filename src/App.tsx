import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App-Wrapper">
            <header className="Header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gfp930fT_4SQpE5_wenUf0IUqKfiVO4Ksw&usqp=CAU"
                    alt="тут лого"/>
            </header>
            <nav className="NavBar">
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Setting</div>
            </nav>
            <div className="Content">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VWPvGxGbsNquVt-BGE2P1DALIT_moFJ_BQ&usqp=CAU"
                        alt=""/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    my post
                </div>
                <div>
                    new post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>

            </div>
        </div>
    );
}

export default App;
