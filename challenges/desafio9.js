db.produtos.find({ valoresNutricionais: { 
  $elemMatch: { tipo: "calorias", quantidade: { $lte: 500 } } } }, {     
  nome: true,
  _id: false,
  });