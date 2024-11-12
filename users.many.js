db.usuario.insertMany([
  {
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
  },
  {
    tipo: "Comprador",
    nombre: "Daniel Convers",
    documento: 10005281870,
    fecha_nacimiento: new Date("2000-01-07"),
    direccion_residencia: {
      departamento: "Santander",
      ciudad: "Bucaramanga",
      direccion: "Carrera 20 #68-30",
    },
    correo_electronico: "convers123@gmail.com",
    telefono: 340764365,
    cuentas_redes_sociales: {
      twitter: {
        nombre_usuario: "Ceazar",
        enlace: "https://twitter.com/Ceazar_Black",
      },
      facebook: {
        nombre_usuario: "Daniel Convers",
        enlace: "https://www.facebook.com/profile.php?id=61551889845994",
      },
      instagram: {
        nombre_usuario: "conversual",
        enlace: "https://www.instagram.com/conversual/",
      },
    }, // Opcional
  },
  {
    tipo: "Vendedor",
    nombre: "Garibel Castillo",
    documento: 10941000527823,
    fecha_nacimiento: new Date("1998-07-20"),
    direccion_residencia: {
      departamento: "Santander",
      ciudad: "Bucaramanga",
      direccion: "Calle 27 #34-27",
    },
    correo_electronico: "toyota_sequoia@gmail.com",
    telefono: 3108357688,
    cuentas_redes_sociales: {
      twitter: {
        nombre_usuario: "TOYOTA COROLLA",
        enlace: "https://twitter.com/clubcorolla",
      },
    },
  },
  {
    tipo: "Vendedor",
    nombre: "Pedro Ramírez",
    documento: 1098765432,
    fecha_nacimiento: new Date("1990-03-15"),
    direccion_residencia: {
      departamento: "Cundinamarca",
      ciudad: "Bogotá",
      direccion: "Carrera 15 #80-10",
    },
    correo_electronico: "pedro@example.com",
    telefono: 3201234567,
    cuentas_redes_sociales: {
      twitter: {
        nombre_usuario: "PedroVendedor",
        enlace: "https://twitter.com/pedrovendedor",
      },
      instagram: {
        nombre_usuario: "pedrovendedor",
        enlace: "https://www.instagram.com/pedrovendedor/",
      },
    },
  },
  {
    tipo: "Comprador",
    nombre: "Ana Martínez",
    documento: 1025676739,
    fecha_nacimiento: new Date("2000-05-20"),
    direccion_residencia: {
      departamento: "Antioquia",
      ciudad: "Bello",
      direccion: "Calle 30 #17-20",
    },
    correo_electronico: "anadarc@gmail.com",
    telefono: 3140576521,
    cuentas_redes_sociales: {
      instagram: {
        nombre_usuario: "Anitaa",
        enlace: "https://www.instagram.com/anitan/",
      },
    },
  },
  {
    tipo: "Comprador",
    nombre: "Luisa Rodríguez",
    documento: 1095407261,
    fecha_nacimiento: new Date("2003-09-13"),
    direccion_residencia: {
      departamento: "Antioquia",
      ciudad: "Medellín",
      direccion: "Calle 50 #43-50",
    },
    correo_electronico: "losona@gmail.com",
    telefono: 3116856347,
  },
]);
