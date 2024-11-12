# Taller de Bases de Datos NoSQL (Mongo DB)

### Universidad Industrial de Santander

**Estudiantes:**

- Bryan Andrey Silva Vergel - 2221102
- Daniel Andrés Pinto Ortega - 2190558

**Asignatura:**

- Bases de Datos II | F2

---

En este taller, nos enfocaremos en el diseño e implementación de una base de datos NoSQL utilizando **MongoDB** para desarrollar una plataforma de comercio electrónico eficiente y escalable. Exploraremos aspectos fundamentales como el **modelado de datos**, la ejecución de **consultas frecuentes** y las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar). El objetivo principal es comprender cómo estructurar la información de manera óptima para satisfacer los requisitos específicos de la aplicación.

---

## 2. Actividades

### 2.1 Desarrolle dos propuestas de estructura o modelo de datos para el almacenamiento de información usando JSON y responda las siguientes preguntas para cada propuesta:

- **Modelo 1:**

#### Colección `productos`

```
{
  _id: ObjectId,
  vendedor_id: ObjectId,
  nombre: String,
  descripcion: String,
  imagen: String,
  dimensiones: {
    ancho: String,
    alto: String,
    largo: String
  },
  categoria: String,
  precio: Number,
  fecha_publicacion: Date,
  fecha_actualizacion: Date,
  cantidad_stock: Number,
  disponible_venta: Boolean,
  descuentos_compras_grandes: String, \\Opcional
  manual_instrucciones: String, \\Opcional
  videos_producto: String, \\Opcional
  valoraciones: {
    usuario_nombre: String,
    anonimo: Boolean,
    calificacion: Number,
    comentario: String, \\Opcional
    fecha: Date
  }[]
}
```

#### Colección `usuario`

```
{
  _id: ObjectId,
  tipo: String,
  nombre: String,
  documento: Number,
  fecha_nacimiento: Date,
  direccion_residencia: {
    departamento: String,
    ciudad: String,
    direccion: String
  },
  correo_electronico: String,
  telefono: Number,
  cuentas_redes_sociales: {
    twitter: {
      nombre_usuario: String,
      enlace: String
    },
    facebook: {
      nombre_usuario: String,
      enlace: String
    },
    instagram: {
      nombre_usuario: String,
      enlace: String
    }
  } \\Opcional
}
```

#### Colección `preguntas`

```
{
  _id: ObjectId,
  producto_id: ObjectId,
  pregunta: String,
  fecha: Date,
  comprador_nombre: String,
  anonimo: Boolean,
  respuestas: [
    {
      vendedor_nombre: String,
      comentario: String,
      fecha: Date,
      respuestas: [
        {
          comprador_nombre: String,
          comentario: String,
          fecha: Date
        }
      ]
    }
  ] \\Opcional
}
```

- **Modelo 2:**

#### Colección `producto`

```
{
  _id: ObjectId,
  vendedor_id: ObjectId,
  nombre: String,
  descripci´on: String,
  imagen: String,
  dimensiones: {
    unidades: String,
    ancho: Number,
    alto: Number,
    largo: Number
  },
  categoria: String,
  precio: Number,
  fecha_publicacion: Date,
  fecha_actualizacion: Date,
  cantidad_stock: Number,
  disponible_venta: Boolean,
  descuentos_compras_grandes: [String], \\Opcional
  manual_instrucciones: String, \\Opcional
  videos_producto: [String] \\Opcional
}
```

#### Colección `usuario`

```
{
  _id: ObjectId,
  tipo: String,
  nombre: String,
  documento: Number,
  fecha_nacimiento: Date,
  direccion_residencia: {
    departamento: String,
    ciudad: String,
    direccion: String
  },
  correo_electronico: String,
  telefono: Number,
  cuentas_redes_sociales: {
    twitter: {
      nombre_usuario: String,
      enlace: String
    },
    facebook: {
      nombre_usuario: String,
      enlace: String
    },
    instagram: {
      nombre_usuario: String,
      enlace: String
    }
  } \\Opcional
}
```

#### Colección `valoraciones`

```
{
  _id: ObjectId,
  producto_id: ObjectId,
  usuario_nombre: String, \\Si es anonimo no se crea este atributo
  anonimo: Boolean,
  calificacion: Number,
  comentario: String, \\Opcional
  fecha: Date
}
```

#### Colección `preguntas`

```
{
  _id: ObjectId,
  producto_id: Number,
  pregunta: String,
  fecha: Date,
  comprador_nombre: String, \\Si es anonimo no se crea este atributo
  anonimo: Boolean
}
```

#### Colección `interacciones`

```
{
  _id: ObjectId,
  pregunta_id: Number,
  vendedor_nombre: String,
  comentario: String,
  fecha: Date
}
```

**¿Es posible responder a las consultas más frecuentes sobre la base de datos con esta estructura?, ¿sí o no y por qué?**

**Modelo 1:**

Sí, es posible responder a las consultas más frecuentes con este modelo de datos. La estructura de la base de datos incluye colecciones para productos, usuarios, valoraciones y preguntas, cada una con sus respectivas interacciones. Esto permite realizar consultas eficientes sobre productos, usuarios y cómo interactúan con el sistema.

**Modelo 2:**

Sí, también es posible responder a las consultas más frecuentes con este modelo de datos. La estructura es similar a la del modelo anterior pero incluye mejoras, como el cambio en el tipo de dato del atributo "dimensiones" en la colección de productos. Esto permite realizar un mayor número de consultas y de manera más eficiente que en el modelo anterior.

---

**¿Cuáles son las ventajas de esta forma de organizar la información?**

**Modelo 1:**

Este modelo ofrece una estructura clara y organizada que facilita el acceso y la manipulación de los datos. Además, permite modificaciones sencillas en la base de datos según sea necesario, lo que favorece su adaptabilidad a futuros requerimientos.

**Modelo 2:**

Las ventajas son similares a las del modelo anterior, ya que presenta una estructura clara y organizada que facilita el acceso y manipulación de los datos. Sin embargo, este modelo también permite una expansión más sencilla de la base de datos, lo que lo hace más flexible para incorporar nuevas funcionalidades o tipos de datos en el futuro.

---

**¿Cuáles son las desventajas de esta forma de organizar la información?**

**Modelo 1:**

Una desventaja de este modelo es que la estructura puede volverse compleja a medida que la base de datos crece, especialmente en la colección de preguntas. Además, existen atributos con tipos de datos que podrían dificultar ciertas consultas. Otro problema es que las colecciones de valoraciones y usuarios se relacionan mediante un atributo no único (el nombre), lo que puede generar conflictos si dos usuarios comparten el mismo nombre.

**Modelo 2:**

Una desventaja es que, al igual que en el modelo anterior, las colecciones de valoraciones y usuarios se relacionan mediante un atributo no único, lo que puede ocasionar problemas de integridad de datos si existen usuarios con información similar.

---

**¿Qué consulta considera usted que no podría responderse con este modelo de datos propuesto?**

**Modelo 1:**

No sería posible consultar el listado de preguntas de un producto mostrando solo la pregunta y las dos últimas interacciones, ya que la estructura de la colección de preguntas no soporta eficientemente este tipo de búsquedas a medida que la base de datos escala. Además, no se podrían realizar consultas para obtener productos cuyas dimensiones sean mayores o menores a un valor específico, dado que las dimensiones se almacenan como cadenas de texto que incluyen unidades de medida, lo que dificulta las comparaciones numéricas.

**Modelo 2:**

Con este modelo, es posible realizar todas las consultas propuestas en el taller, ya que la estructura de datos ha sido optimizada para soportar diversos tipos de consultas, incluyendo aquellas que podrían ser problemáticas en el modelo anterior.

---

**¿Qué índices serían de utilidad generar en cada uno de los modelos propuestos?**

**Modelo 1:**

Sería útil generar índices en campos utilizados frecuentemente en consultas, como el "id" del producto y el "id" del usuario, especialmente para los usuarios de tipo vendedor. Esto mejoraría el rendimiento de las consultas y operaciones CRUD en estas colecciones.

**Modelo 2:**

Al igual que en el modelo anterior, sería beneficioso generar índices en campos clave como el "id" del producto y el "id" del usuario. Adicionalmente, podría ser útil indexar otros campos que se usen frecuentemente en consultas complejas, lo que mejoraría aún más el rendimiento.

---

**¿Cuáles reglas de validación cree que se pueden crear en la base de datos y por qué?**

**Modelo 1:**

Se pueden implementar reglas de validación para garantizar la integridad de los datos, como asegurar que los campos obligatorios no estén vacíos, que los precios sean números positivos, que las fechas tengan el formato correcto y que las valoraciones estén entre 1 y 5. También se podría validar que un vendedor no pueda valorar sus propios productos, a menos que exista un registro que indique que ha actuado como comprador.

**Modelo 2:**

Las reglas de validación serían similares a las del modelo anterior, pero podrían ampliarse para incluir validaciones adicionales gracias a la estructura mejorada. Por ejemplo, se podría validar que las dimensiones de los productos sean numéricas y positivas, facilitando así las consultas basadas en rangos numéricos.

---

### 3. Implementación en MongoDB

Implemente las colecciones y el modelo de datos en MongoDB utilizando el **segundo modelo** y realice las siguientes operaciones:

#### Crear la base de datos

```
use tienda_en_linea
```

#### Insertar datos individualmente:

- **Colección `usuarios`**

A continuación, se presenta un ejemplo de cómo insertar un documento en la colección `usuarios`. Para los demás ejemplos, puede revisar el archivo llamado `users.insert.js`:

```
db.usuarios.insertOne({
  tipo: "Comprador",
  nombre: "María López",
  documento: 1023456789,
  fecha_nacimiento: new Date("1995-05-20"),
  direccion_residencia: {
    departamento: "Antioquia",
    ciudad: "Medellín",
    direccion: "Calle 70 #25-45",
  },
  correo_electronico: "maria@gmail.com",
  telefono: 3109876543,
  cuentas_redes_sociales: {
    instagram: {
      nombre_usuario: "marialopez",
      enlace: "https://www.instagram.com/marialopez/",
    },
  },
});
```

- **Colección `producto`**
  A continuación, se presenta un ejemplo de cómo insertar un documento en la colección `producto`. Para los demás ejemplos, puede revisar el archivo llamado `products.insert.js`:

```
db.producto.insertOne({
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
});
```

- **Colección `valoraciones`**
  A continuación, se presenta un ejemplo de cómo insertar un documento en la colección `valoraciones`. Para los demás ejemplos, puede revisar el archivo llamado `ratings.insert.js`:

```
db.valoraciones.insertOne({
  producto_id: {
    $oid: "67317f4d73f9f4ab386582c7",
  },
  usuario_nombre: "Daniel Convers",
  anonimo: false,
  calificacion: 4,
  comentario: "El vendedor me trato mal pero el producto es 10/10", //Opcional
  fecha: new Date("2024-04-23T16:03:25Z"),
});
```

- **Colección `preguntas`**
  A continuación, se presenta un ejemplo de cómo insertar un documento en la colección `preguntas`. Para los demás ejemplos, puede revisar el archivo llamado `question.insert.js`:

```
db.preguntas.insert({
  producto_id: {
    $oid: "67317f4d73f9f4ab386582c7",
  },
  pregunta: "Cuanto tiene de garantia?",
  fecha: new Date("2024-03-15T08:10:23Z"),
  comprador_nombre: "Daniel Convers",
  anonimo: false,
});
```

- **Colección `interacciones`**
  A continuación, se presenta un ejemplo de cómo insertar un documento en la colección `interacciones`. Para los demás ejemplos, puede revisar el archivo llamado `interactions.insert.js`:

```
db.interacciones.insertOne({
  pregunta_id: {
    $oid: "67323deb6b4b18537b0dc060",
  },
  vendedor_nombre: "Garibel Castillo",
  comentario: "La garantía es de 1 año.",
  fecha: new Date("2024-03-20T11:30:00Z"),
});
```

#### Insertar datos simultáneamente

Para agregar estos datos, puedes consultar los archivos: `(products || ratings || users || questions || interactions).many.js`.

Estos archivos contienen las instrucciones y datos necesarios para insertar múltiples documentos en cada una de las colecciones mencionadas.

#### 4. Consultas

- Consultar el listado de productos mostrando nombre, precio y descripción ordenado por fecha del más reciente al más viejo.

```
db.producto
  .find({}, { nombre: 1, precio: 1, descripción: 1 })
  .sort({ fecha_publicacion: -1 })
  .forEach((producto) => {
    print("Nombre: " + producto.nombre);
    print("Precio: " + producto.precio);
    print("Descripción: " + producto.descripción);
    print("-".repeat(30));
  });
```

- Agrupar los productos por categorías, mostrar el listado de categorías y la cuenta de productos por categoría.

```
db.producto.aggregate([
  {
    $group: {
      _id: "$categoría",
      cantidad: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      categoría: "$_id",
      cantidad: 1,
    },
  },
  {
    $sort: { categoría: 1 },
  },
]);
```

- Consultar el listado de productos que se encuentren en un rango de valores.

```
db.producto
  .find({
    precio: {
      $gte: 80000,
      $lte: 200000,
    },
  })
  .pretty();
```

- Consultar productos que tengan en sus dimensiones un alto menor a un valor determinado.

```
db.producto
  .find({
    "dimensiones.alto": { $lt: 200 },
  })
  .pretty();
```

- Consultar el listado de calificaciones de un producto ordenado ordenando de forma que
  las mejores calificaciones se muestren primero y las peores al final.

```
db.valoraciones
  .find({ "producto_id.$oid": "67317f4d73f9f4ab386582c7" })
  .sort({ calificacion: -1 })
  .pretty();
```

- Consultar los datos completos de un vendedor.

```
db.usuario.find({ _id: ObjectId("673179d073f9f4ab386582c1") }).pretty();
```

- Consultar el listado completo de vendedores con su nombre y ubicación ordenado alfabeticamente.

```
db.usuario
  .find(
    { tipo: "Vendedor" },
    {
      _id: 0,
      nombre: 1,
      "direccion_residencia.ciudad": 1,
      "direccion_residencia.departamento": 1,
    }
  )
  .sort({ nombre: 1 })
  .pretty();
```

- Consultar el listado de preguntas y respuestas completo de un producto particular.

```
db.preguntas
  .aggregate([
    {
      $match: {
        $expr: {
          $eq: [
            {
              $getField: { field: { $literal: "$oid" }, input: "$producto_id" },
            },
            "67317f4d73f9f4ab386582c7",
          ],
        },
      },
    },
    {
      $lookup: {
        from: "interacciones",
        let: { preguntaIdStr: { $toString: "$_id" } },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: [
                  {
                    $getField: {
                      field: { $literal: "$oid" },
                      input: "$pregunta_id",
                    },
                  },
                  "$$preguntaIdStr",
                ],
              },
            },
          },
        ],
        as: "respuestas",
      },
    },
    {
      $project: {
        _id: 1,
        pregunta: 1,
        fecha: 1,
        comprador_nombre: 1,
        anonimo: 1,
        "respuestas._id": 1,
        "respuestas.vendedor_nombre": 1,
        "respuestas.comentario": 1,
        "respuestas.fecha": 1,
      },
    },
  ])
  .pretty();

```

#### 5. Actualizar

- Actualizar el precio de un producto y por lo tanto su fecha de actualizaci´on.

```
db.producto.updateOne(
  { _id: ObjectId("67317f5673f9f4ab386582c8") },
  { $set: { precio: 900000000000000, fecha_actualizacion: new Date() } }
);
```

- Actualizar todos los stocks de productos de un vendedor para llevarlos a 0 y marcarlos como no disponibles.

```
db.producto.updateMany(
  { "vendedor_id.$oid": "673179d073f9f4ab386582c1" },
  { $set: { cantidad_stock: 0, disponible_venta: false } }
);

```

#### Eliminar

- Actualizar un producto para borrar todas las calificaciones menores a 2 estrellas.

```
db.valoraciones.deleteMany({
  "producto_id.$oid": "67317f4d73f9f4ab386582c7",
  calificacion: { $lt: 2 },
});
```

- Eliminar todos los productos de un vendedor.

```
db.producto.deleteMany({ "vendedor_id.$oid": "673179d073f9f4ab386582c1" });
```

- Eliminar todos los vendedores de una ubicación específica, por municipio, departamento o las dos.

```
db.usuario.deleteMany({
  tipo: "Vendedor",
  "direccion_residencia.ciudad": "Bucaramanga",
  "direccion_residencia.departamento": "Santander",
})

```

- Eliminar todos los productos con calificaciones de 1 estrella.

```

var productosAEliminar = db.valoraciones
  .distinct("producto_id", { calificacion: 1 })
  .map(function (pid) {
    return ObjectId(pid["$oid"]);
  });

db.producto.deleteMany({ _id: { $in: productosAEliminar } });

db.valoraciones.deleteMany({ calificacion: 1 });

```
