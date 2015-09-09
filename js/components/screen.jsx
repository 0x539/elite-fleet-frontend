var Screen = React.createClass({
    render: function() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
});