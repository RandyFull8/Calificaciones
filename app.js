document.addEventListener("DOMContentLoaded", function () {
    const parcial1Input = document.getElementById("parcial1");
    const parcial2Input = document.getElementById("parcial2");
    const parcial3Input = document.getElementById("parcial3");
    const examenInstitucionalInput = document.getElementById("examenInstitucional");
    const promedioTotal = document.getElementById("promedioTotal");
    const calificacionNecesaria = document.getElementById("calificacionNecesaria");
    const initialAnimation = document.createElement("div");
    const promedioParciales = document.getElementById("promedioParciales"); // Nuevo elemento para mostrar el promedio de los parciales

    initialAnimation.id = "initialAnimation";
    initialAnimation.textContent = "🐻";
    document.body.appendChild(initialAnimation);

    setTimeout(() => {
        initialAnimation.style.display = "none";
    }, 2000); // La animación se ocultará después de 2 segundos

    const updatePromedio = () => {
        const parcial1 = parseFloat(parcial1Input.value);
        const parcial2 = parseFloat(parcial2Input.value);
        const parcial3 = parseFloat(parcial3Input.value);
        const examenInstitucional = parseFloat(examenInstitucionalInput.value);

        if ((isNaN(parcial1) && parcial1Input.value !== "") || 
            (isNaN(parcial2) && parcial2Input.value !== "") || 
            (isNaN(parcial3) && parcial3Input.value !== "") || 
            (isNaN(examenInstitucional) && examenInstitucionalInput.value !== "") || 
            (parcial1 < 0 || parcial1 > 10) || 
            (parcial2 < 0 || parcial2 > 10) || 
            (parcial3 < 0 || parcial3 > 10) || 
            (examenInstitucional < 0 || examenInstitucional > 10)) {
            alert("Por favor, ingrese calificaciones válidas entre 0 y 10.0.");
            promedioTotal.textContent = "Promedio: -";
            calificacionNecesaria.textContent = "Calificación necesaria en el Examen Institucional para aprobar con 7 en promedio es: -";
            promedioParciales.textContent = "-";
            return;
        }

        const promedio = ((parcial1 + parcial2 + parcial3) / 3) * 0.8 + (examenInstitucional * 0.2);
        promedioTotal.textContent = `Promedio: ${promedio.toFixed(1)}`;
        promedioParciales.textContent = ((parcial1 + parcial2 + parcial3) / 3).toFixed(1);

        const calificacionNecesariaParaAprobar = (7 - ((parcial1 + parcial2 + parcial3) / 3) * 0.8) / 0.2;
        calificacionNecesaria.textContent = `Calificación necesaria en el Examen Institucional para aprobar con 7 en promedio es: ${calificacionNecesariaParaAprobar.toFixed(1)}`;
    };

    parcial1Input.addEventListener("input", updatePromedio);
    parcial2Input.addEventListener("input", updatePromedio);
    parcial3Input.addEventListener("input", updatePromedio);
    examenInstitucionalInput.addEventListener("input", updatePromedio);

    updatePromedio();
});
