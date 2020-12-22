import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to="/">Go to Home</Link>
                </p>
            </div>
        );
    }
}


NotFoundPage.propTypes = {

};


export default NotFoundPage;
