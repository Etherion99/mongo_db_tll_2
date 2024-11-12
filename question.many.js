db.preguntas.insertMany([
  {
    producto_id: {
      $oid: "67317f4d73f9f4ab386582c7",
    },
    pregunta: "Cuanto tiene de garantia?",
    fecha: new Date("2024-03-15T08:10:23Z"),
    comprador_nombre: "Daniel Convers",
    anonimo: false,
  },
  {
    producto_id: {
      $oid: "67317f5673f9f4ab386582c8",
    },
    pregunta: "Es compatible con Mac?",
    fecha: new Date("2024-03-18T14:20:00Z"),
    comprador_nombre: "Luisa Rodríguez",
    anonimo: false,
  },
  {
    producto_id: {
      $oid: "6731806073f9f4ab386582c9",
    },
    pregunta: "Este teclado es compatible con sistemas operativos Mac?",
    fecha: new Date("2024-05-10T14:20:00Z"),
    comprador_nombre: "María López",
    anonimo: false,
  },
  {
    producto_id: {
      $oid: "6731899173f9f4ab386582ca",
    },
    pregunta: "Cuánto dura la batería de estos auriculares?",
    fecha: new Date("2024-04-05T16:30:00Z"),
    anonimo: true,
  },
  {
    producto_id: {
      $oid: "67317f5673f9f4ab386582c8",
    },
    pregunta:
      "Cuál es la ventaja principal de un monitor curvo en comparación con uno plano?",
    fecha: new Date("2024-06-09T10:00:00Z"),
    comprador_nombre: "Ana Rodríguez",
    anonimo: false,
  },
]);
