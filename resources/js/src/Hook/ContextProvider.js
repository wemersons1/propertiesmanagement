import React, { useCallback, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import { isObjectEmpty } from "./util/help";
const ContextProvider = ({ children }) => {

    const initialStateCart = {
        products: [],
        discount: 0,
        client_id: null,
        advisor: {},
        value_advisor: 0
    };

    const [token, setToken] = useState(localStorage.getItem('@QuickSale:token'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@QuickSale:user')));
    const [role, setRole] = useState(user?.roles[0]?.name);

    const [advisor, setAdvisor] = useState(() => {
        let cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        if (cart && !isObjectEmpty(cart.advisor)) {

            return cart.advisor;
        }

        return {}
    });

    const addItemCart = useCallback((item) => {

        let copyCart = JSON.parse(localStorage.getItem('@QuickSale:cart'));

        if (!copyCart) {
            copyCart = initialStateCart;
        }

        if (!copyCart.products.length) {
            if (!isObjectEmpty(advisor)) {
                copyCart.advisor = advisor;
            }
        }

        copyCart?.products?.push(item);

        localStorage.setItem('@QuickSale:cart', JSON.stringify(copyCart));

    }, [])

    const removeItemCart = useCallback((item) => {

        let copyCart = JSON.parse(localStorage.getItem('@QuickSale:cart'));
        let cartTreated = [];

        copyCart.products.forEach(product => {
            if (JSON.stringify(product) !== item) {
                cartTreated.push(product);
            }
        });

        copyCart.products = cartTreated;

        localStorage.setItem('@QuickSale:cart', JSON.stringify(copyCart));

    }, []);

    const signIn = useCallback(async (email, password) => {

        const response = await axios.post('/api/v1/login', {
            email,
            password,
        });

        if (response?.data?.user !== undefined) {

            localStorage.removeItem('@QuickSale:cart');
            localStorage.removeItem('@QuickSale:products');
            localStorage.setItem('@QuickSale:user', JSON.stringify(response.data.user));
            localStorage.setItem('@QuickSale:token', response.data.token);

            setUser(response.data.user);
            setToken(response.data.token);
            setRole(response.data.user.roles[0].name);
        }

    }, []);

    const signOut = useCallback(() => {

        axios.delete('/api/v1/logout', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('@QuickSale:token')}`
            }
        }).finally(() => {
            localStorage.removeItem('@QuickSale:token');
            localStorage.removeItem('@QuickSale:user');
            localStorage.removeItem('@QuickSale:cart');
            localStorage.removeItem('@QuickSale:products');
            localStorage.removeItem('@QuickSale:cart_id');
            localStorage.removeItem('@QuickSale:order_id');
            setUser(null);
            setToken('');
        });

    }, []);

    return (
        <Context.Provider value={{ user, token, signIn, signOut, addItemCart, removeItemCart, role, setRole, advisor, setAdvisor, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
