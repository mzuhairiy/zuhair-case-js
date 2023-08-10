let productBin = {
    "requestId": null,
    "data": [
        {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
          },
          {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
          },
          {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
          }
    ],
    "message": "success"
  };
  
  const productCode = "FBR00040101";
  
  // Membuat objek untuk menyimpan quantity berdasarkan storageId
  const quantityStorageId = {};
  
  // Mengisi objek quantityStorageId dengan quantity dari setiap storageId
  productBin.data.forEach(product => {
    if (product.productCode === productCode) {
      const storageId = product.storageId;
      const quantity = product.quantity;
  
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
  