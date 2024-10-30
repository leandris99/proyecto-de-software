document.addEventListener("click", e => {
    //document.getElementById("panel_general").style.display = "none";
    document.getElementById("igm_clientes").style.display = "none";
    document.getElementById("img_empleados").style.display = "none";
    document.getElementById("igm_proveedores").style.display = "none";
    document.getElementById("igm_productos").style.display = "none";
    document.getElementById("igm_ventas").style.display = "none";
    
    if (e.target.matches("#inicio")) {
        document.getElementById("panel_general").style.display = "flex";

    } else if (e.target.matches("#empleados")) {
        document.getElementById("img_empleados").style.display = "flex";

    } else if (e.target.matches("#clientes")) {
        document.getElementById("igm_clientes").style.display = "flex";

    } else if (e.target.matches("#proveedores")) {
        document.getElementById("igm_proveedores").style.display = "flex";

    } else if (e.target.matches("#productos")) {
        document.getElementById("igm_productos").style.display = "flex";

    } else if (e.target.matches("#ventas")) {
        document.getElementById("igm_ventas").style.display = "flex";

    } else {
        return;
    }
});

