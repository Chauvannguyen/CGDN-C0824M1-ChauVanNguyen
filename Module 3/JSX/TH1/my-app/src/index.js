// 1.Danh sách sản phẩm ban đầu
const products =[
    {id: 1, name: "Laptop", price: 1500, quantity: 1},
    {id: 2, name: "Phone", price: 1000, quantity: 3},
    {id: 3, name: "Tablet", price: 800, quantity: 7},
    {id: 4, name: "Mouse", price: 50, quantity: 10},
    {id: 5, name: "Keyboard", price: 30, quantity: 8}
];
// hiển thị danh sách sản phẩm

const productsList = () => {
    products.map(p => console.log(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}, Quantity: ${p.quantity}`));
}
productsList();

// tính tổng giá trị tồn kho
const calculateTotaValue = () => {
    return products.reduce((total, products) => total + products.price * products.quantity, 0);
};
console.log("Giá trị tồn kho là:", calculateTotaValue());

// Lọc sản phẩm theo giá

const filterByprice = (minPrice) => {
    return products.filter(product => product.price >= minPrice);
};
console.log(" Sản phẩm được lọc:", filterByprice(500));

// Thêm sản phẩm mới

const addProduct = (newProduct) => {
    products.push(newProduct);
    console.log("Sản phẩm được thêm:", newProduct);

};
addProduct({ id: 4, name: "Monitor", price: 300, quantity: 8});


// Xoá sản phẩm

const removeProductById = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        const removeProduct = products.splice(index, 1);
        console.log("Xoá sản phẩm:", removeProduct[0]);

    }
};

removeProductById(2);


// Cập nhật số lượng sản phẩm
const updateQuantity = (id, newQuantity) => {
    const product = products.find(product => product.id === id);
    if (product) {
        product.quantity = newQuantity;
        console.log("Updated product quantity:", product);

    }
};

updateQuantity(3, 15);

const productsLists = () => {
    products.map(p => console.log(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}, Quantity: ${p.quantity}`));
}
productsLists();