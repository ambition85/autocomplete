import React from "react";

import { useSelector } from "react-redux";
import { selectSearchTime, selectNumResults } from "./reducers/stats-reducer";

export default function Stats() {
    const numResults = useSelector(selectNumResults);
    const searchTime = useSelector(selectSearchTime);

    return (
        <div className="card text-bg-dark mb-3" style={{ height: "40%" }}>
            <h4 className="card-header">Search stats</h4>
            <div className="card-body">
                <h6 className="card-title">
                    Total words: 100k+
                </h6>
                <h6 className="card-title">
                    Matches found: {numResults}
                </h6>
                <h6 className="card-title">
                    Time taken: {searchTime}
                </h6>
            </div>
        </div>
    );
}
