import React, {Component} from "react";
import ProductGrid from "./productgrid/ProductGrid";
import ProductDetail from "./productdetail/ProductDetail";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import {
    CART_SCHEME,
    CHECKOUT_SCHEME,
    ORDER_CONFIRMATION_SCHEME,
    PRIVACY_POLICY_SCHEME,
    PRODUCT_DETAIL_SCHEME,
    PRODUCT_GRID_SCHEME
} from "../../resources/routes";
import OrderConfirmation from "./orderconfirmation/OrderConfirmation";
import {Redirect, Route, Switch} from "react-router-dom";
import NoMatch from "./nomatch/NoMatch";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";

class MainView extends Component {

    render() {
        return (
            <Switch>
                <Redirect exact from={"/"} to={PRODUCT_GRID_SCHEME}/>
                <Route path={PRODUCT_GRID_SCHEME} exact component={ProductGrid}/>
                <Route path={PRODUCT_DETAIL_SCHEME} component={ProductDetail}/>
                <Route path={CART_SCHEME} component={Cart}/>
                <Route path={CHECKOUT_SCHEME} component={Checkout}/>
                <Route path={ORDER_CONFIRMATION_SCHEME} component={OrderConfirmation}/>
                <Route path={PRIVACY_POLICY_SCHEME} component={PrivacyPolicy}/>
                <Route component={NoMatch}/>
            </Switch>
        );
    }
}

export default MainView;
