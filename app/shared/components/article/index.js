import React from 'react';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Article extends React.Component {

    static propTypes = {
        params: React.PropTypes.object
    };

    static defaultProps = {
        params: {}
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
                    <h1>ARTICLE</h1>

                    {this.props.params.slug}

                    <br/>

                    <Link to="/" className="active">
                        <RaisedButton label="home" style={style} />
                    </Link>
                </div>

            </MuiThemeProvider>
        );
    }
}