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
        date: 'MMMM DD, YYYY'
      }
    },
    {
      key: 'configurations_count',
      label: 'looks',
      className: 'looks'
    }
  ]

	const data = [
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0169',
		  'name': 'Sharks v01',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-01-21T13:37:13.518Z',
		  'configurations_count': 13,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0170',
		  'name': 'Alligators v32',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2014-03-11T13:37:13.518Z',
		  'configurations_count': 73,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0171',
		  'name': 'Tarantulas v09',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2015-08-18T13:37:13.518Z',
		  'configurations_count': 33,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f01672',
		  'name': 'Llamas v33',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-11-22T13:37:13.518Z',
		  'configurations_count': 93,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0173',
		  'name': 'Cardinals v83',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-03-03T13:37:13.518Z',
		  'configurations_count': 53,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0174',
		  'name': 'Otters v47',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-03-03T13:37:13.518Z',
		  'configurations_count': 23,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0175',
		  'name': 'Lions v31',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-01-21T13:37:13.518Z',
		  'configurations_count': 193,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0176',
		  'name': 'Bears v32',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2014-03-11T13:37:13.518Z',
		  'configurations_count': 66,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0177',
		  'name': 'Tigers v09',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2015-08-18T13:37:13.518Z',
		  'configurations_count': 15,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f01678',
		  'name': 'Panthers v33',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-11-22T13:37:13.518Z',
		  'configurations_count': 51,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		},
		{
		  'id': 'ad8ffd1c-9946-4cbe-bb30-5f450e8f0179',
		  'name': 'Buffaloes v83',
		  'platforms': {
		    'ios': 'com.sharks_latest.iosapp'
		  },
		  'app_icon_url': 'http://placehold.it/36x36?text=icon',
		  'last_published_at': '2017-03-03T13:37:13.518Z',
		  'configurations_count': 77,
		  'organization': {
		    'id': '8fa61584-84f1-4217-acec-f0938e167896',
		    'name': 'Sharks',
		    'avatar_url': 'http:\/\/lorempixel.com\/200\/200\/abstract\/'
		  }
		}
	]

		return (
			<div>
        <VnTable
          className='workspace-grey-table'
          head={columns}
          body={data}
					preSortColumn={columns[1]}
					initialRowSelected={data[0]}
				/>
			</div>
		);
	}
});

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('app'));
