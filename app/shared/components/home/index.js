import React from 'react';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component {

    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    render() {

        const style = {
          margin: 12
        };

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>

                <div>
                    <h1>HOME</h1>

                    <Link to="/article/2" className="active">
                        <RaisedButton label="article" style={style} />
                    </Link>
                </div>

            </MuiThemeProvider>
        );
    }
}