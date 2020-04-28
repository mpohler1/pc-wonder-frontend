import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchCategoriesRequest, fetchCategoriesFailure, fetchCategoriesSuccess} from "../actions/actions";
import {fetchCategories} from "../service/apiService";

class Navbar extends Component {

    componentDidMount() {
        this.props.fetchCategoriesRequest();
        fetchCategories().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchCategoriesSuccess(json.text)
            } else {
                this.props.fetchCategoriesFailure();
            }
        });
    }

    render() {
        return (
            <nav className="container-fluid navbar navbar-dark sticky-top bg-dark flex-nowrap">
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="input-group px-3">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">
                            <span className="oi oi-magnifying-glass"/>
                        </button>
                    </div>
                </div>
                <button className="btn" type="button">
                    <span className="h3 oi oi-cart text-white"/>
                </button>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list
    };
};

export default connect(mapStateToProps, {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure
})(Navbar);