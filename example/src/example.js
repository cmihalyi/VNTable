var React = require('react');
var ReactDOM = require('react-dom');
var VnTable = require('vntable');

var App = React.createClass({
	render () {
		return (
			<div>
				<VnTable />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
