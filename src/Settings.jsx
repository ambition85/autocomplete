import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
    changeSearchLimit,
    selectSearchLimit,
    changeWeighResults,
    selectWeighResults,
    changeLimitResults,
    selectLimitResults,
} from "./reducers/settings-reducer";

export default function Settings() {
    const searchLimit = useSelector(selectSearchLimit);
    const weighResults = useSelector(selectWeighResults);
    const limitResults = useSelector(selectLimitResults);
    const dispatch = useDispatch();
    return (
        <div className="card text-bg-dark">
            <h4 className="card-header">Settings</h4>
            <div className="card-body">
                <span className="card-title form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="searchLimit"
                        checked={limitResults}
                        onChange={(e) =>
                            dispatch(changeLimitResults(!limitResults))
                        }
                    />
                    <label htmlFor="searchLimit" className="form-label form-check-label">
                        Search Limit: {searchLimit}
                    </label>
                </span>
                <p className="card-text">
                    <input
                        type="range"
                        className="form-range"
                        min="10"
                        max="1000"
                        step="10"
                        value={searchLimit}
                        onChange={(e) =>
                            dispatch(changeSearchLimit(e.target.value))
                        }
                        disabled={!limitResults}
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
