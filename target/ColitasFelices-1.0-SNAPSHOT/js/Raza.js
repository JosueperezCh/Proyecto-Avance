/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function llenarFormulario(fila){
    var descripcion = $(fila)(".descripcion").text();
    
    $("#txtDescripcion").val(descripcion);
}

$(document).ready(function () {
    $("#exampleModal").on("hidden.bs.modal", function (){
        $("#form")[0].reset();
    });
    $(document).on('click', 'btnEliiminar',function (){
        llenarFormulario($(this).closest('tr'));
    });
});


