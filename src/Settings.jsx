export default function Settings() {
    return (
        <div className="card text-bg-dark mb-3" style={{ height: "75vh" }}>
            <h4 className="card-header">Settings</h4>
            <div className="card-body">
                <h6 className="card-title">
                    <label htmlFor="searchLimit" className="form-label">
                        Search Limit
                    </label>
                </h6>
                <p className="card-text">
                    <input
                        type="range"
                        className="form-range"
                        min="10"
                        max="100"
                        step="1"
                        value="10"
                        id="searchLimit"
                    />
                </p>
            </div>
        </div>
    );
}
