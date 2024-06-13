const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtén el ID del usuario autenticado (reemplaza esto con tu lógica real)
const id = 1; // Ejemplo: ID del usuario autenticado

// Consulta para obtener los datos del usuario
async function obtenerDatosUsuario() {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: id },
      select: { id: true, nombre: true, email: true },
    });

    if (usuario) {
      console.log('ID:', usuario.id);
      console.log('Nombre:', usuario.nombre);
      console.log('Email:', usuario.email);
    } else {
      console.error('Error al obtener los datos del usuario.');
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
  } finally {
    await prisma.$disconnect();
  }
}

obtenerDatosUsuario();
