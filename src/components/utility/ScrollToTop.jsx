import {Component} from "react";
import {withRouter} from "react-router-dom";

class ScrollToTop extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location !== prevProps.location) {
            window.scroll(0,0);
        }
    }


    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
