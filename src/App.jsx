import React, { Component } from "react";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import { Trie } from "../public/trie";
import json from "./trie.json";
import Navbar from "./navbar";
import Settings from "./Settings";
import Stats from "./Stats";

import { connect } from "react-redux";
import { changeNumResults, changeSearchTime } from "./reducers/stats-reducer";

import "./App.css";
import "@webscopeio/react-textarea-autocomplete/style.css";

const Item = ({ entity: { name, char } }) => <div>{`${name}`}</div>;
const Loading = ({ data }) => <div>Loading...</div>;

let trie = Trie.from(json);

class App extends Component {
    constructor(props) {
        super(props);
    }

    giveSuggestions(word, limit, sort) {
        const start = performance.now();
        const suggestions = trie.suggest(word, limit, sort);
        const timeTaken = performance.now() - start;

        this.props.changeNumResults(Object.keys(suggestions).length);
        this.props.changeSearchTime(
            Math.round(timeTaken * 1000000) / 1000000 + " ms"
        );

        return suggestions;
    }

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
                                        return this.giveSuggestions(
                                            token,
                                            this.props.limit,
                                            this.props.sort
                                        )
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
                        <Stats />
                        <Settings />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        limit: state.settings.searchLimit,
        sort: state.settings.weighResults,
        time: state.stats.searchTime,
        res: state.stats.numResults,
    };
};

const mapDispatchToProps = {
    changeSearchTime,
    changeNumResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
