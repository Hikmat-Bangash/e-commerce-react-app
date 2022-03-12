
// Adding different products into the Cart

export const AddCart = (product) =>{
    return{
           type: "ADDITEM",
           payload: product
    }
}

// Delete prouducts from shopping cart

export const DelCart = (product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
}