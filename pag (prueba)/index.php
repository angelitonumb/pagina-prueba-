<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "ejemplo";

$conexion = mysqli_connect($servidor, $usuario, $clave, $bd);

if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
}

if (isset($_POST['enviar'])) {
    $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
    $correo = mysqli_real_escape_string($conexion, $_POST['correo']);
    $pedido = mysqli_real_escape_string($conexion, $_POST['pedido']);

    $imagen_nombre = $_FILES['imagen']['name'];
    $imagen_temp = $_FILES['imagen']['tmp_name'];
    $carpeta_destino = "uploads/";
    $ruta_destino = $carpeta_destino . $imagen_nombre;

    move_uploaded_file($imagen_temp, $ruta_destino);

    $insertar = "INSERT INTO pedidos (nombre, correo, pedido, imagen_path) VALUES ('$nombre', '$correo', '$pedido', '$ruta_destino')";

    if (mysqli_query($conexion, $insertar)) {
        echo "Pedido guardado correctamente.";
    } else {
        echo "Error al guardar el pedido: " . mysqli_error($conexion);
    }
}

mysqli_close($conexion);
?>