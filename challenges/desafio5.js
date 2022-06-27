db.produtos.find({ $or: [{ vendidos: 85 }, { curtidas: 36 }] }, {     
  nome: true, curtidas: true, vendidos: true, _id: false,  
  });