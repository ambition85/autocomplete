// import { useState } from "react";
// import "./App.css";

// function App() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <header className="header mt-5 mb-4">
//                     <h1 className="header__title">Autocomplete</h1>
//                     <p className="header__item">
//                         <a href="https://github.com/Aveek-Saha/autocomplete">
//                             <i
//                                 className="bi-github me-2"
//                                 role="img"
//                                 aria-label="GitHub"
//                             />
//                             GitHub
//                         </a>
//                     </p>
//                 </header>
//             </div>

//             <div class="row">
//                 <div class="mb-4">
//                     <textarea
//                         type="text"
//                         className="form-control search"
//                         id="search"
//                         placeholder="Start typing to see autocomplete suggestions"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;

import React, { Component } from "react";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import emoji from "@jukben/emoji-search";

import "./App.css";
import "@webscopeio/react-textarea-autocomplete/style.css";

const Item = ({ entity: { name, char } }) => <div>{`${name}: ${char}`}</div>;
const Loading = ({ data }) => <div>Loading</div>;

class App extends Component {
    render() {
        return (
            <div className="App">

                <ReactTextareaAutocomplete
                    className="my-textarea"
                    loadingComponent={Loading}
                    style={{
                        fontSize: "18px",
                        lineHeight: "20px",
                        padding: 5,
                    }}
                    ref={(rta) => {
                        this.rta = rta;
                    }}
                    innerRef={(textarea) => {
                        this.textarea = textarea;
                    }}
                    containerStyle={{
                        marginTop: 20,
                        width: 400,
                        height: 100,
                        margin: "20px auto",
                    }}
                    minChar={0}
                    trigger={{
                        ":": {
                            dataProvider: (token) => {
                                return emoji(token)
                                    .slice(0, 10)
                                    .map(({ name, char }) => ({ name, char }));
                            },
                            component: Item,
                            output: (item, trigger) => item.char,
                        }
                    }}
                />
            </div>
        );
    }
}

export default App;
