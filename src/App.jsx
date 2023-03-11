import React, { Component } from "react";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import { Trie } from "../public/trie";
import json from "../public/trie.json";

import "./App.css";
import "@webscopeio/react-textarea-autocomplete/style.css";

const Item = ({ entity: { name, char } }) => <div>{`${name}`}</div>;
const Loading = ({ data }) => <div>Loading</div>;

// const json = JSON.parse(jsonFile)
let trie = Trie.from(json);

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <header className="header mt-5 mb-4">
                        <h1 className="header__title">Autocomplete</h1>
                        <p className="header__item">
                            <a href="https://github.com/Aveek-Saha/autocomplete">
                                <i
                                    className="bi-github me-2"
                                    role="img"
                                    aria-label="GitHub"
                                />
                                GitHub
                            </a>
                        </p>
                    </header>
                </div>

                <div className="row">
                    <div className="mb-4">
                        <ReactTextareaAutocomplete
                            className="form-control search"
                            loadingComponent={Loading}
                            movePopupAsYouType={true}
                            placeholder={"Start typing to see suggestions!"}
                            ref={(rta) => {
                                this.rta = rta;
                            }}
                            innerRef={(textarea) => {
                                this.textarea = textarea;
                            }}
                            containerStyle={{
                                height: "75vh",
                            }}
                            dropdownStyle={{
                                // backgroundColor: "#3b3b3b",
                                color: "black",
                            }}
                            minChar={3}
                            trigger={{
                                " ": {
                                    dataProvider: (token) => {
                                        console.log(token);
                                        return trie
                                            .suggest(token)
                                            .slice(0, 10)
                                            .map(({ name, char }) => ({
                                                name,
                                                char,
                                            }));
                                    },
                                    component: Item,
                                    output: (item, trigger) => " " + item.char,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
