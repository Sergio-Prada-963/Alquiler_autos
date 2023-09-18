# Alquiler_autos

`Alquiler de automoviles, consiste en desarrollar una aplicación
web utilizando Node.js y Express para el backend. Se utilizará
una base de datos MongoDB para almacenar toda la información
relacionada con los clientes, automóviles, alquileres, reservas,
sucursales y empleados. endpoints realizados tal y como se pide,`

##### 2 . `Mostrar todos los clientes registrados en la base de datos. --GET`

```nodejs
http://localhost:3309/api/clientes/all
```

##### 3 . `Obtener todos los automóviles disponibles para alquiler. --GET`

```nodejs
http://localhost:3309/api/sucursalAuto/disponibles
```

##### 4 . `Listar todos los alquileres activos junto con los datos de los clientes relacionados --GET`

```nodejs
http://localhost:3309/api/alquiler/activo
```

##### 5 . `Mostrar todas las reservas pendientes con los datos del cliente y el auto móvil reservado. --GET`

```nodejs
http://localhost:3309/api/reservas/pendiente
```

##### 6 . `Obtener los detalles del alquiler con el ID_Alquiler específico. --GET`

```nodejs
http://localhost:3309/api/alquiler/find
// Se envia el id
{
    "id": "65066fd282c709990ece5402" //ejemplo
}
```

##### 7 . `Listar los empleados con el cargo de "Vendedor" --GET`

```nodejs
http://localhost:3309/api/empleado/vendedor
```

##### 8 . `Mostrar la cantidad total de automóviles disponibles en cada sucursal. --GET`

```nodejs
http://localhost:3309/api/sucursalAuto/cantidad
```

##### 9 . `Obtener el costo total de un alquiler específico. --GET`

```nodejs
http://localhost:3309/api/alquiler/costoTotal
// Se envia el id
{
    "id": "65066fd282c709990ece5402" //ejemplo
}
```

##### 10 . `Listar los clientes con el DNI específico. --GET`

```nodejs
http://localhost:3309/api/clientes/DNI
// Se envia el DNI
{
    "DNI": 846655420 //ejemplo
}
```

##### 11 . `Mostrar todos los automóviles con una capacidad mayor a 5 personas. --GET`

```nodejs
http://localhost:3309/api/automovil/capacidad5
```

##### 12 . `Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'. --GET`

```nodejs
http://localhost:3309/api/alquiler/fechaEspecifica
```

##### 13 . `Listar las reservas pendientes realizadas por un cliente específico. --GET`

```nodejs
http://localhost:3309/api/reservas/pendienteEspecifico
// Se envia el idClientes
{
    "idCliente": "65064c9cbf2d49bcd3814ec3" //ejemplo
}
```

##### 14 . `Mostrar los empleados con cargo de "Gerente" o "Asistente". --GET`

```nodejs
http://localhost:3309/api/empleado/ger_Asis
```

##### 15 . `Obtener los datos de los clientes que realizaron almenos un alquiler. --GET`

```nodejs
http://localhost:3309/api/clientes/alquilado
```

##### 16 . `Listar todos los automóviles ordenados por marca y modelo. --GET`

```nodejs
http://localhost:3309/api/automovil/ordenados
```

##### 17 . `Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección. --GET`

```nodejs
http://localhost:3309/api/sucursalAuto/cantidadDireccion
```

##### 18 . `Obtener la cantidad total de alquileres registrados en la base de datos. --GET`

```nodejs
http://localhost:3309/api/alquiler/cantidadAlquiler
```

##### 19 . `Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles. --GET`

```nodejs
http://localhost:3309/api/sucursalAuto/cap5Disponible
```

##### 20 . `Obtener los datos del cliente que realizó la reserva. --GET`

```nodejs
http://localhost:3309/api/reservas/cliente_data
```

##### 21 . `Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'. --GET`

```nodejs
http://localhost:3309/api/alquiler/fechas
```

#### La aplicación permitirá a los empleados registrar nuevos clientes --POST

```nodejs
http://localhost:3309/api/empleado
// datos a enviar ejemplo
{
    "nombre": "Alejandro",
    "apellido": "Hernández Pino",
    "DNI": 846655420,
    "direccion": "Avenida Sur #52",
    "telefono": 3185478795,
    "email": "alejandro@gmail.com"
}
```

#### Administrar la disponibilidad de automóviles en cada sucursal -- PATCH

```nodejs
http://localhost:3309/api/sucursalAuto/:id // ejemplo 65066186848d7fe7047c4fd7
// datos a enviar ejemplo
{
    "cantidad_disponible": 3
}
```

#### realizar alquileres --POST

```nodejs
http://localhost:3309/api/alquiler
// datos a enviar ejemplo
{
    "id_cliente": "65064c9cbf2d49bcd3814ec4",
    "id_automovil": "65064c83bf2d49bcd3814eb4",
    "fecha_inicio": "2023-04-09T00:00:00.000Z",
    "fecha_fin": "2023-04-28T00:00:00.000Z",
    "costo_total": 941,
    "estado": false
}
```

#### realizar reservas --POST

```nodejs
http://localhost:3309/api/reservas
// datos a enviar ejemplo
{
    "id_cliente": "65064c9cbf2d49bcd3814ec4",
    "id_automovil": "65064c83bf2d49bcd3814eb4",
    "fecha_reserva": "2023-08-24T00:00:00.000Z",
    "fecha_inicio": "2023-09-04T00:00:00.000Z",
    "fecha_fin": "2023-10-04T00:00:00.000Z",
    "estado": true
}
```

#### llevar un registro detallado de cada entrega -- POST 