db.produtos.updateMany({ valoresNutricionais: { $elemMatch: { 
  tipo: "sódio", 
  percentual: { $gte: 40 },
} } }, {

$push: {
  tags: {
    $each: ["contém sódio"] },
},
});

db.produtos.find({}, {
nome: true,
tags: true,
_id: false,
});
