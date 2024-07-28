import axios from "axios";

const updateProductsApi = async (token) => {

    let params = {};

    let cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));
    let productsTreated = [];

    if(cart?.products?.length) {

        for(let i = 0; i < cart.products.length; i ++) {

            for(let j = 0; j < cart.products[i].length; j ++) {
                productsTreated.push(cart.products[i][j]);
            }
        }

        const response = await axios.post(`/api/v1/orders/products`, {products: productsTreated}, {

            headers: {
                Authorization: `Bearer ${token}`
            }, params

        })

        let productsSizeTreated = new Array(response.data.length);
        let configTreated = new Array(response.data.length);

        let products = JSON.parse(localStorage.getItem('@QuickSale:cart'))?.products;
        const newArrayIndexes = []

        response.data.forEach((product, index) => {

            newArrayIndexes.push(0);
            productsSizeTreated[index] = [];
            configTreated[index] = [];

            product.configs.forEach(config => {

                productsSizeTreated[index].push(config.size);

                if(products) {

                    let verify = false;

                    for(let i = 0; i < products.length; i ++) {

                        for(let j = 0; j < products[i].length; j ++) {

                            if(products[i][j].id === config.id) {

                                verify = true;
                                configTreated[index].push({...config, quantityChanged: products[i][j].quantityChanged, price_final: products[i][j].price_final});
                                break;
                            }

                        }

                    }

                    if(!verify)  configTreated[index].push({...config, quantityChanged: 0});

                } else {

                    configTreated[index].push({...config, quantityChanged: 0});

                }

            })
        });

        let data = {};
        data['new_array_indexes'] = newArrayIndexes;
        data['config_treated'] = configTreated;
        data['products_size_treated'] = productsSizeTreated;
        data['products'] = response.data;

        return data

    }

}

export {updateProductsApi};
