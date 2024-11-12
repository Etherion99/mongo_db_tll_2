db.valoraciones.insertMany([
  {
    producto_id: {
      $oid: "67317f4d73f9f4ab386582c7",
    },
    usuario_nombre: "Daniel Convers",
    anonimo: false,
    calificacion: 4,
    comentario: "El vendedor me trato mal pero el producto es 10/10", //Opcional
    fecha: new Date("2024-04-23T16:03:25Z"),
  },
  {
    producto_id: {
      $oid: "67317f5673f9f4ab386582c8",
    },
    usuario_nombre: "Ana Martínez",
    anonimo: false,
    calificacion: 5,
    comentario: "Excelente mouse, lo recomiendo.",
    fecha: new Date("2024-04-24T09:15:00Z"),
  },
  {
    producto_id: {
      $oid: "6731806073f9f4ab386582c9",
    },
    usuario_nombre: "María López",
    anonimo: false,
    calificacion: 5,
    comentario:
      "El teclado es excelente, muy cómodo para largas sesiones de escritura.",
    fecha: new Date("2024-05-05T12:15:00Z"),
  },
  {
    producto_id: {
      $oid: "6731899173f9f4ab386582ca",
    },
    anonimo: true,
    calificacion: 4,
    comentario:
      "Los auriculares tienen un sonido nítido, pero podrían ser más cómodos.",
    fecha: new Date("2024-04-20T18:30:00Z"),
  },
  {
    producto_id: {
      $oid: "673189c873f9f4ab386582cb",
    },
    anonimo: true,
    calificacion: 1,
    comentario: "Llego defectuoso",
    fecha: new Date("2024-05-13T12:40:00Z"),
  },
  {
    producto_id: {
      $oid: "67317f4d73f9f4ab386582c7",
    },
    usuario_nombre: "Luisa Rodríguez",
    anonimo: false,
    calificacion: 3,
    comentario:
      "Buena relación calidad-precio, pero la retroiluminación podría ser más personalizable.",
    fecha: new Date("2024-03-10T10:00:00Z"),
  },
  {
    producto_id: {
      $oid: "67317f5673f9f4ab386582c8",
    },
    usuario_nombre: "Daniel Convers",
    anonimo: false,
    calificacion: 4,
    comentario: "Tiene muy buenos angulos de vision y no sobresatura colores",
    fecha: new Date("2024-04-20T20:30:00Z"),
  },
]);
