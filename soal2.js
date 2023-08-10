const productData = require('../zuhair-sanber-1/data/product.json');

let productBin = { productData 
};
  
  const productCode = "FBR00040101";
  
  // Membuat objek untuk menyimpan quantity berdasarkan storageId
  const quantityStorageId = {};
  
  // Mengisi objek quantityStorageId dengan quantity dari setiap storageId
  productBin.productData.data.forEach(productData => {
    if (productData.productCode === productCode) {
      const storageId = productData.storageId;
      const quantity = productData.quantity;
  
      if (quantityStorageId[storageId] === undefined) {
        quantityStorageId[storageId] = quantity;
      } else {
        quantityStorageId[storageId] += quantity;
      }
    }
  });
  
  // Menampilkan quantity dari semua storageId productCode FBR00040101
  console.log(`Quantity untuk produk ${productCode} :`);
  Object.keys(quantityStorageId).forEach(storageId => {
    const quantity = quantityStorageId[storageId];
    console.log(`Storage ID ${storageId} : ${quantity}`);
  });
  
  // Menghitung total quantity dari semua storageId productCode FBR00040101
  const totalQuantity = Object.values(quantityStorageId).reduce((total, quantity) => total + quantity, 0);
  
  console.log(`Total quantity untuk produk ${productCode} adalah : ${totalQuantity}`);
  