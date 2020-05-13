import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    SET_DRAWER_VISIBILITY,
    SET_MAIN_VIEW_MODE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_DETAIL_PRODUCT,
    SET_MOBILE,
    SET_SCROLL_Y_AND_STICKY_TOP,
    SET_LARGEST,
    INSERT_ITEM_INTO_CART,
    SET_QUANTITY_IN_PRODUCT_DETAIL,
    SET_QUANTITY_IN_ITEM_LIST,
    REMOVE_ITEM_FROM_CART,
    SET_ADDRESS_FIRST_NAME,
    SET_ADDRESS_LAST_NAME,
    SET_ADDRESS_COMPANY_NAME,
    SET_ADDRESS_STREET,
    SET_ADDRESS_APARTMENT_NUMBER,
    SET_ADDRESS_CITY,
    SET_ADDRESS_STATE, SET_ADDRESS_ZIP, SET_ADDRESS_EMAIL, SET_ADDRESS_PHONE_NUMBER
} from "./actionTypes";

export const fetchCategoriesRequest = () => (
    {
        type: FETCH_CATEGORIES_REQUEST
    }
);

export const fetchCategoriesSuccess = categoryList => (
    {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
            categoryList: categoryList
        }
    }
);

export const fetchCategoriesFailure = () => (
    {
        type: FETCH_CATEGORIES_FAILURE
    }
);

export const fetchProductsRequest = () => (
    {
        type: FETCH_PRODUCTS_REQUEST
    }
);

export const fetchProductsSuccess = productList => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
            productList: productList
        }
    }
);

export const fetchProductsFailure = () => (
    {
        type: FETCH_PRODUCTS_FAILURE
    }
);

export const setDrawerVisibility = drawerVisible => (
    {
        type: SET_DRAWER_VISIBILITY,
        payload: {
            drawerVisible: drawerVisible
        }
    }
);

export const setScrollYAndStickyTop = (scrollY, stickyTop) => (
    {
        type: SET_SCROLL_Y_AND_STICKY_TOP,
        payload: {
            scrollY: scrollY,
            stickyTop: stickyTop
        }
    }
);

export const setMainViewMode = viewMode => (
    {
        type: SET_MAIN_VIEW_MODE,
        payload: {
            viewMode: viewMode
        }
    }
);

export const setDetailProduct = product => (
    {
        type: SET_DETAIL_PRODUCT,
        payload: {
            product: product
        }
    }
);

export const setQuantityInProductDetail = quantity => (
    {
        type: SET_QUANTITY_IN_PRODUCT_DETAIL,
        payload: {
            quantity: quantity
        }
    }
);

export const insertItemIntoCart = (product, quantity) => (
    {
        type: INSERT_ITEM_INTO_CART,
        payload: {
            product: product,
            quantity: quantity
        }
    }
);

export const setQuantityInItemList = (productId, quantity) => (
    {
        type: SET_QUANTITY_IN_ITEM_LIST,
        payload: {
            productId: productId,
            quantity: quantity
        }
    }
);

export const removeItemFromCart = (productId) => (
    {
        type: REMOVE_ITEM_FROM_CART,
        payload: {
            productId: productId
        }
    }
);

export const setAddressFirstName = (firstName) => (
    {
        type: SET_ADDRESS_FIRST_NAME,
        payload: {
            firstName: firstName
        }
    }
);

export const setAddressLastName = (lastName) => (
    {
        type: SET_ADDRESS_LAST_NAME,
        payload: {
            lastName: lastName
        }
    }
);

export const setAddressCompanyName = (companyName) => (
    {
        type: SET_ADDRESS_COMPANY_NAME,
        payload: {
            companyName: companyName
        }
    }
);

export const setAddressStreet = (street) => (
    {
        type: SET_ADDRESS_STREET,
        payload: {
            street: street
        }
    }
);

export const setAddressApartmentNumber = (apartmentNumber) => (
    {
        type: SET_ADDRESS_APARTMENT_NUMBER,
        payload: {
            apartmentNumber: apartmentNumber
        }
    }
);

export const setAddressCity = (city) => (
    {
        type: SET_ADDRESS_CITY,
        payload: {
            city: city
        }
    }
);

export const setAddressState = (state) => (
    {
        type: SET_ADDRESS_STATE,
        payload: {
            state: state
        }
    }
);

export const setAddressZip = (zip) => (
    {
        type: SET_ADDRESS_ZIP,
        payload: {
            zip: zip
        }
    }
);

export const setAddressEmail = (email) => (
    {
        type: SET_ADDRESS_EMAIL,
        payload: {
            email: email
        }
    }
);

export const setAddressPhoneNumber = (phoneNumber) => (
    {
        type: SET_ADDRESS_PHONE_NUMBER,
        payload: {
            phoneNumber: phoneNumber
        }
    }
);

export const setMobile = mobile => (
    {
        type: SET_MOBILE,
        payload: {
            mobile: mobile
        }
    }
);

export const setLargest = largest => (
    {
        type: SET_LARGEST,
        payload: {
            largest: largest
        }
    }
);
