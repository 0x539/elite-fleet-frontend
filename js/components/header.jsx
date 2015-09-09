var Header = React.createClass({
    render: function () {
        return (
            <header>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                    aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Elite Fleet</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Bookings</a></li>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Users</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1>Dashboard</h1>
            </header>
        );
    }
});