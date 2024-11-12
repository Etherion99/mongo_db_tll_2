db.producto.insertMany([
  {
    vendedor_id: {
      $oid: "673179d073f9f4ab386582c1",
    },
    nombre: "Mouse Gamer Logitech G Series G203 Lila",
    descripción:
      "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitas comodidad y facilidad de movimiento. Con tu Logitech G Lightsync encuentra eso que buscas en un solo aparato con la mejor tecnología.",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_634881-MLU74971071558_032024-F.webp",
    dimensiones: {
      unidades: "Milimetros",
      ancho: 62,
      alto: 38,
      largo: 116,
    },
    categoría: "Mouses",
    precio: 100000,
    fecha_publicacion: new Date("2023-06-23T16:03:25Z"),
    fecha_actualizacion: new Date("2024-02-07T10:34:47Z"),
    cantidad_stock: 15,
    disponible_venta: true,
    descuentos_compras_grandes: "30 %", // Opcional
    manual_instrucciones:
      "https://www.logitech.com/assets/66171/g102--g203-lightsync-web-qsg.pdf", // Opcional
    videos_producto: "https://www.youtube.com/watch?v=IJgUcIQyCUk", // Opcional
  },
  {
    vendedor_id: {
      $oid: "67317a0b73f9f4ab386582c2",
    },
    nombre: "Monitor Curvo Samsung Odyssey G7",
    descripción:
      "Monitor gaming con pantalla curva, alta tasa de refresco y resolución QHD.",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_628816-CBT71999403888_102023-F.webp",
    dimensiones: {
      unidades: "Milimetros",
      ancho: 800,
      alto: 400,
      largo: 200,
    },
    categoría: "Monitores",
    precio: 800000,
    fecha_publicacion: new Date("2023-09-05T14:00:00Z"),
    fecha_actualizacion: new Date("2024-03-15T11:20:00Z"),
    cantidad_stock: 8,
    disponible_venta: true,
    descuentos_compras_grandes: ["10%", "20%"],
    manual_instrucciones:
      "https://www.manuales.com.co/samsung/odyssey-g7/manual",
    videos_producto: "https://www.youtube.com/watch?v=2_Cl_bpLmT4",
  },
  {
    vendedor_id: {
      $oid: "67317a0b73f9f4ab386582c2",
    },
    nombre: "Teclado Mecánico Corsair K70 RGB",
    descripción:
      "Teclado mecánico con retroiluminación RGB personalizable y switches Cherry MX.",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_735977-MCO50909255870_072022-F.webp",
    dimensiones: {
      unidades: "Milimetros",
      ancho: 440,
      alto: 140,
      largo: 360,
    },
    categoría: "Teclados",
    precio: 150000,
    fecha_publicacion: new Date("2023-07-10T16:03:25Z"),
    fecha_actualizacion: new Date("2024-03-28T10:34:47Z"),
    cantidad_stock: 10,
    disponible_venta: true,
    descuentos_compras_grandes: "20%",
    manual_instrucciones:
      "https://www.corsair.com/corsairmedia/sys_master/productcontent/K70RGBMK2SE-QSG.pdf",
    videos_producto: [
      "https://www.youtube.com/watch?v=Qe_nhxm6FoU",
      "https://www.youtube.com/watch?v=kGqVRMLBBdQ",
    ],
  },
  {
    vendedor_id: {
      $oid: "67317a0b73f9f4ab386582c2",
    },
    nombre: "Auriculares Inalámbricos Sony WH-1000XM4",
    descripción:
      "Auriculares con cancelación de ruido y alta calidad de sonido.",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_647181-MLU73119534126_122023-F.webp",
    dimensiones: {
      unidades: "Milimetros",
      ancho: 180,
      alto: 250,
      largo: 200,
    },
    categoría: "Auriculares",
    precio: 300000,
    fecha_publicacion: new Date("2023-08-15T09:20:10Z"),
    fecha_actualizacion: new Date("2024-04-05T14:50:30Z"),
    cantidad_stock: 5,
    disponible_venta: true,
    descuentos_compras_grandes: "15%",
    manual_instrucciones:
      "https://www.sony.es/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm4/manuals",
    videos_producto: "https://www.youtube.com/watch?v=QRk_er7W6U0",
  },
  {
    vendedor_id: {
      $oid: "67317a0b73f9f4ab386582c2",
    },
    nombre: "Astro A50, Diadema Inalámbrica + Estación Base, Pc / Ps5 Ps4",
    descripción:
      "Disfruta del desempeño y el sonido de ASTRO Audio V2, y de la libertad sin cables. Los audífonos inalámbricos A50 + Estación base para Xbox One/PC ofrecen la acústica, la ergonomía, el confort y la durabilidad premium que exigen jugadores y streamers.",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_785328-MCO74850210591_032024-F.webp",
    dimensiones: {
      unidades: "Milimetros",
      ancho: 88,
      alto: 182,
      largo: 185,
    },
    categoría: "Auriculares",
    precio: 1000000,
    fecha_publicacion: new Date("2023-08-30T16:00:10Z"),
    fecha_actualizacion: new Date("2024-02-03T15:50:30Z"),
    cantidad_stock: 3,
    disponible_venta: true,
    descuentos_compras_grandes: "45%",
    manual_instrucciones:
      "https://www.manuales.com.co/astro-gaming/a50-wireless/manual",
    videos_producto: "https://www.youtube.com/watch?v=P2I85DwK8n0&t=3s",
  },
]);
