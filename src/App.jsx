import React, { Component } from "react";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import { Trie } from "../public/trie";
import json from "./trie.json";
import Navbar from "./navbar";
import Settings from "./Settings";

import "./App.css";
import "@webscopeio/react-textarea-autocomplete/style.css";

const Item = ({ entity: { name, char } }) => <div>{`${name}`}</div>;
const Loading = ({ data }) => <div>Loading...</div>;

let trie = Trie.from(json);
let limit = 50;
let sort = true;

class App extends Component {
    render() {
        return (
            <div className="container">
            <Navbar />

            <div className="row">
                <div className="col-8 mb-4">
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
                                    return trie
                                        .suggest(token, limit, sort)
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
                <div className="col-4">
                        <Settings/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
