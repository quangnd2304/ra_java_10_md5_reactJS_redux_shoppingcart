const initialState = [
    { productId: 1, productName: "Pizza", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", image: "images/pizza.jpg", price: 12, quantity: 10 },
    { productId: 2, productName: "Hamburger", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", image: "images/Hamburger.jpg", price: 10, quantity: 0 },
    { productId: 3, productName: "Bread", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", image: "images/bread.jpg", price: 15, quantity: 15 },
    { productId: 4, productName: "Cake", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", image: "images/Cake.jpg", price: 8, quantity: 10 }
]
const listProduct = (state = initialState, action) => {
    return state;
}
export default listProduct;