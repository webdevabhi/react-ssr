import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id} >{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Users's App</title>
                    <meta property="og:title" content="User's App" />
                </Helmet>
                Here's a big list users:

                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
}