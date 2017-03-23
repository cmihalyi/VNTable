var React = require('react');
var ReactDOM = require('react-dom');
var VnTable = require('@venuenext/vntable');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

var App = React.createClass({

	render () {

	const columns = [
    {
      key: 'app_icon_url',
      label: 'icon',
      className: 'app-icon',
      sortDisable: true
    },
    {
      key: 'name',
      label: 'name',
      className: 'name'
    },
    {
      key: 'last_published_at',
      label: 'last updated',
      className: 'updated',
      dateFormat: {
        date: "MMMM DD, YYYY"
      }
    },
    {
      key: 'configurations_count',
      label: 'looks',
      className: 'looks'
    }
  ]

	const data = [
		{"id":"ad8ffd1c-9946-4cbe-bb30-5f450e8f0169","name":"Sharks (Latest)","platforms":{"ios":"com.sharks_latest.iosapp"},"app_icon_url":"http://2.cdn.nhle.com/sharks/images/upload/2008/11/san-jose-sharks-default-141.jpg","last_published_at":"2017-03-21T13:37:13.518Z","configurations_count":3,"organization":{"id":"8fa61584-84f1-4217-acec-f0938e167896","name":"Sharks","avatar_url":"http://lorempixel.com/200/200/abstract/"}}
	]

		return (
			<div>
        <VnTable
          className="workspace-grey-table"
          head={columns}
          body={data}
				/>
			</div>
		);
	}
});

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('app'));
