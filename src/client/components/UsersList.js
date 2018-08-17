import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class UsersList extends Component {

    componentDidMount() {

    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id} >{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                Here's a big list users:
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(actions.fetchUsers)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);