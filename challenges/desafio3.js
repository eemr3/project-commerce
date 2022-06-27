db.produtos.find({}, {     
  nome: true, vendidos: true, _id: false,  
  }).sort({ vandidos: -1 }).limit(1);