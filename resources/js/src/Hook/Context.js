import { createContext } from 'react';

const initialStateProducts = {
    quantity: 0, value: 0, config_product_id: null
};

const initialStateCart = {
    products: [{id: null, product_config: initialStateProducts}],
    discount: 0,
    client_id: null,
    advisor: {}
};

export  const Context = createContext({
    user: {},
    token: '',
    signIn: () => {},
    signOut: () => {},
    addItemCart: () => {},
    removeItemCart: () => {},
    role: '',
    setRole: () => {},
    quantityItemCart: 0,
    advisor: {},
    value_advisor: 0,
    setAdvisor: () => {},
    setUser: () => {}
});

export default Context;
