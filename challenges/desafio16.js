db.produtos.updateOne({ nome: "Big Mac" },
{    
  $currentDate: {
    ultimaModificacao: { $type: "timestamp" },   
  },
});

db.produtos.find({ nome: "Big Mac" }, {    
  nome: true,
  _id: false,
  });