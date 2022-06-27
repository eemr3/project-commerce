const totalProducts = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: totalProducts });

db.resumoProdutos.find({}, {    
  franquia: true,
  totalProdutos: true,
  _id: false,
  });
