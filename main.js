// Câu 1: 
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: 
const products = [
  new Product('P001', 'Áo thun', 150000, 10, 'Quần áo', true),
  new Product('P002', 'Quần jean', 350000, 5, 'Quần áo', true),
  new Product('P003', 'Giày thể thao', 700000, 8, 'Giày', true),
  new Product('P004', 'Dép đi trong nhà', 120000, 20, 'Giày', false),
  new Product('P005', 'Túi xách', 450000, 2, 'Phụ kiện', true),
  new Product('P006', 'Mũ lưỡi trai', 90000, 15, 'Phụ kiện', true),
  new Product('P007', 'Kính râm', 250000, 3, 'Phụ kiện', false)
];


const nameAndPrice = products.map(function(p) {
  return { name: p.name, price: p.price };
});

// Hiển thị kết quả ra console
console.log('Danh sách sản phẩm:', products);
console.log('Mảng name & price:', nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0) (sử dụng .filter())
const inStockProducts = products.filter(function(p) {
  return p.quantity > 0;
});
console.log('Sản phẩm còn hàng (quantity > 0):', inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không (sử dụng .some())
const hasExpensive = products.some(function(p) {
  return p.price > 30000000;
});
console.log('Có ít nhất 1 sản phẩm giá > 30.000.000?', hasExpensive);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không (sử dụng .every())
// Lưu ý: nếu không có sản phẩm thuộc danh mục "Accessories" thì báo về không tìm thấy
const accessories = products.filter(function(p) {
  return p.category === 'Phụ kiện';
});
const allAccessoriesAvailable = accessories.length > 0 ? accessories.every(function(p) { return p.isAvailable; }) : false;
console.log('Tất cả sản phẩm trong "Phụ kiện" đang bán?', allAccessoriesAvailable, '(tìm thấy', accessories.length, 'sản phẩm)');

// Câu 7: Tính tổng giá trị kho hàng (Giá trị kho = price * quantity) (sử dụng .reduce())
const totalInventoryValue = products.reduce(function(sum, p) {
  return sum + p.price * p.quantity;
}, 0);
console.log('Tổng giá trị kho hàng:', totalInventoryValue);

// Câu 8: Dùng for...of duyệt mảng products và in ra theo định dạng: Tên sản phẩm - Danh mục - Trạng thái
for (const p of products) {
  console.log(`${p.name} - ${p.category} - ${p.isAvailable ? 'Đang bán' : 'Ngưng bán'}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng của một sản phẩm mẫu
const sampleProduct = products[0]; // lấy sản phẩm đầu tiên làm mẫu
console.log('\nIn tên thuộc tính và giá trị cho sản phẩm mẫu:', sampleProduct);
for (const key in sampleProduct) {
  if (Object.prototype.hasOwnProperty.call(sampleProduct, key)) {
    console.log('Thuộc tính:', key, '=> Giá trị:', sampleProduct[key]);
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng (isAvailable = true && quantity > 0)
const availableAndInStockNames = products
  .filter(function(p) { return p.isAvailable && p.quantity > 0; })
  .map(function(p) { return p.name; });
console.log('Tên sản phẩm đang bán và còn hàng:', availableAndInStockNames);
