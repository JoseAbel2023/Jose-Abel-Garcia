<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae</title>
    
<link rel= "stylesheet" href="estilos.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

</head>

<body>

<!-- columna izquierda--> 

<nav class="navbar navbar-default">
   
<div class="wrapper">

<div id="columns">                   <!--defino la clase columnas-->
 
<div id ="left">                     <!--Es la división izquierda-->

<div class= "img"> <img src="foto1.jpg" width="250px" height="250px"> <br>

</div>
   
<h4 class="uno">Datos personales</h4>

<ul>
    <li >DNI/CUIL: 20-17044798-6</li>
    <li >Fecha de nacimiento: 10/11/1969</li>
    <li >Domicilio: Villa Elisa, La Plata</li>
    <li >Nacionalidad: Argentina</li>
    <li > <a href="mailto:josecapacitaciondocente@gmail.com"> Correo electrónico: CV@gmail.com</a> </li><br>
</ul>

<h4 class="uno">Idiomas</h4>

<ul>
    <li>Inglés: (C1)</li>
    <li>Alemán: (A1)</li>
    <li>Portugués:(C1)</li>
</ul>

<h4 class="uno">Habilidades</h4>
<ul>
    <li>Gestión de equipo</li>
    <li>Planificación estratégica</li>
    <li>Manejo de MS Office/Google Apps / SAP </li>
    <li>Manejo básico de HTML frontend </li>
</ul>

</div>  <!--cierro la división izquierda, queda v1 y columns-->

<!-- columna derecha--> 
                                                
<div id ="right">        <!--Abro la columna derecha-->

<h1 class=" dos">José Angel Reyes</h1><br>

<h4 class="uno">Experiencia</h4><br>

<ul>
    <li> <a href= "https://meranol.com.ar/" target = "_blank"> Calculista en oficina técnica Fábrica de Acído Sulfúrico Meranol</li></a><br>
 
    <li><a href="https://www.edesur.com.ar/acerca-de-edesur/"target="_blank">Inspector de obra eléctrica de distribución MT/BT en Edesur SA</li></a><br>

    <li><a href="https://www.edesur.com.ar/acerca-de-edesur/" target="_blank">Jefe de Proyectos de distribución MT/BT en Edesur SA</li></a><br>

    <li><a href= "https://www.edesur.com.ar/acerca-de-edesur/ " target="_blank">Jefe de Planificación de la red de media y alta tensión en Edesur SA </li></a><br>

    <li><a href="https://www.frlp.utn.edu.ar/" target="_blank"> Docente en U.T.N - F.R.L.P </li></a><br>
</ul>


<h4 class="uno">Educación Formal</h4>
<br>
<ul>
    <li> <a href="https://www.frlp.utn.edu.ar/" target="_blank"> Ingeniero Electricista 1983-1990 UTN FRLP </li></a><br>

    <li> <a href="https://www.frlp.utn.edu.ar/" target="_blank"> Posgrado Ingeniería Ambiental 1993-1994 UTN FRLP </li></a><br>

    <li> <a href="https://www.upm.es/" target="_blank">MBA Universidad Politécnica de Madrid 1999-2002 (sin finalizar) </li></a><br>

    <li> <a href="https://www.jursoc.unlp.edu.ar/" target="_blank"> Abogacía (cursando 3° año) 2019- 2023 </li></a><br>
</ul>
</div>

<button id="myBtn">Tareas principales</button>   <!--Creo el boton y le asigno una id -->

</div>                      <!--cierro columna derecha-->

<!--Agrego la funcionalidad button-->

<div id="myModal" class="modal">                  <!-- Genero un espacio con un id y una clase-->
                            
<div class="modal-content">                       <!-- le indico cual es el contenido-->
                            
<span class="close">&times;</span>
                            
<h2>Meranol</h2>
                            
<ul>
    <li class="tres"  >Dimensionamiento de cañerías de vapor, aire comprimido y conducción de azufre líquido</li><br>
    <li class="tres" >Dimensionamiento de torre de absorción</li><br>
    <li class="tres" >Asistencia técnica en paradas de planta programadas</li><br>
</ul>
                            
<h2>Edesur S.A</h2>
                            
<ul >
    <li class="tres" >Inspeccion de obras de distribución en media y baja tensión</li><br>
    <li class="tres" >Reingeniería del departamento de "Proyectos - Obras - Almacén y Medidores"</li><br>
    <li class="tres" >Jefatura de Proyectos de distribución en media y baja tensión</li><br>
    <li class="tres" >Implementación y upgrade de SAP para el módulo distribución MT/BT</li><br>
    <li class="tres" >Planificación de la red de media y alta tensión</li><br>
</ul>
                            
<h2>Univesidad Tecnológica Nacional FRLP</h2>
                            
<ul >
    <li class="tres"  >Docente en la asignatura: Proyecto y Diseño de Instalaciones Eléctricas</li>
    <li class="tres"  >Docente en la asignatura: Mantenimiento y Montaje Electromecánico</li><br>
</ul>
                            
<h2>Habilidades comunes adquiridas</h2>
                            
<ul>
    <li class="tres" >Trabajo en equipo para la planificacion y ejecución de tareas</li><br>
    <li class="tres" >Coodinación con otras áreas internas y proveedores externos</li><br>
</ul>
</div>
</div> <!--cierro button-->

<script src="funcionesJS.js"></script>        <!-- llamo al archivo JS donde se definen las funciones-->
<br>



<footer>
    <div class = "footer">

        Creado por J.A.G.   
       
    <span class="material-symbols-outlined">
            copyright
    </span>
    
</div> 

</footer><br>

</nav>  

</div>

</div>    

</body>
</html>
