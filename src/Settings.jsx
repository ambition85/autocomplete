import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
    changeSearchLimit,
    selectSearchLimit,
    changeWeighResults,
    selectWeighResults,
} from "./reducers/settings-reducer";

export default function Settings() {
    const searchLimit = useSelector(selectSearchLimit);
    const weighResults = useSelector(selectWeighResults);
    const dispatch = useDispatch();
    return (
        <div className="card text-bg-dark mb-3" style={{ height: "100%" }}>
            <h4 className="card-header">Settings</h4>
            <div className="card-body">
                <h6 className="card-title">
                    <label htmlFor="searchLimit" className="form-label">
                        Search Limit: {searchLimit}
                    </label>
                </h6>
                <p className="card-text">
                    <input
                        type="range"
                        className="form-range"
                        min="10"
                        max="100"
                        step="1"
                        value={searchLimit}
                        onChange={(e) =>
                            dispatch(changeSearchLimit(e.target.value))
                        }
                        id="searchLimit"
                    />
                </p>

                <p className="card-text form-check form-switch">
                    <span className="card-title">
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                        >
                            Weigh results
                        </label>
                    </span>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={weighResults}
                        onChange={(e) =>
                            dispatch(changeWeighResults(!weighResults))
                        }
                    />
                </p>
            </div>
        </div>
    );
}
