export default function Navbar() {
    return (
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
    );
}
