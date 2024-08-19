function abrirVent() {
  document.getElementById("vent").style.display = "block";
}

function cerrarVent() {
  document.getElementById("vent").style.display = "none";
}






// // dia 3

// // Función que contiene la lógica del Día 3

// document
//   .getElementById("startGame")
//   .addEventListener("click", async function () {
//     //Despalzar al usuario a la sección de juego
//     document.getElementById("dia-3").scrollIntoView({ behavior: "smooth" });

//     const { value: area } = await Swal.fire({
//       title: "¿En qué área te gustaría trabajar?",
//       input: "select",
//       inputOptions: {
//         Frontend: "Frontend",
//         Backend: "Backend",
//       },
//       inputPlaceholder: "Selecciona un área",
//       showCancelButton: true,
//     });

//     if (area) {
//       let frameworkOrLang;
//       // Preguntas adicionales según el área seleccionada

//       if (area === "Frontend") {
//         ({ value: frameworkOrLang } = await Swal.fire({
//           title: "¿Qué framework de frontend te gustaría aprender?",
//           input: "select",
//           inputOptions: {
//             React: "React",
//             Vue: "Vue",
//           },
//           inputPlaceholder: "Selecciona un framework",
//           showCancelButton: true,
//         }));
//       } else if (area === "Backend") {
//         ({ value: frameworkOrLang } = await Swal.fire({
//           title: "¿Qué lenguaje de programación te gustaría aprender?",
//           input: "select",
//           inputOptions: {
//             "C#": "C#",
//             Java: "Java",
//           },
//           inputPlaceholder: "Selecciona un lenguaje",
//           showCancelButton: true,
//         }));
//       }

//       if (frameworkOrLang) {
//         // Mensaje final con las elecciones del usuario

//         await Swal.fire(
//           `¡Genial! Te gustaría trabajar en ${area} y aprender ${frameworkOrLang}.`
//         );

//         const { value: fullstack } = await Swal.fire({
//           title: "¿Te gustaría ser desarrollador FullStack?",
//           input: "checkbox",
//           inputValue: 1,
//           text: "¡La versatilidad siempre es una gran ventaja!",
//           showCancelButton: true,
//           confirmButtonText: "Sí",
//           cancelButtonText: "No",
//         });

//         if (fullstack) {
//           await Swal.fire(
//             "¡Excelente! La versatilidad siempre es una gran ventaja."
//           );
//         } else {
//           await Swal.fire(
//             "¡Entendido! Es importante especializarse en un área para ser un experto."
//           );
//         }

//         let tecnologias = [];
//         let otraTecnologia = true;

//         // mientras el usuario quiera agregar más tecnologías

//         while (otraTecnologia) {
//           const { value: tecnologia } = await Swal.fire({
//             title: "Ingresa una tecnología que te gustaría aprender",
//             input: "text",
//             inputPlaceholder: "Nombre de la tecnología",
//             showCancelButton: true,
//           });

//           if (tecnologia) {
//             tecnologias.push(tecnologia);
//             await Swal.fire(
//               `Buena elección, ${tecnologia} es una excelente tecnología.`
//             );
//           }

//           otraTecnologia = await Swal.fire({
//             title: "¿Quieres agregar otra tecnología?",
//             input: "checkbox",
//             inputValue: 1,
//             text: "Selecciona esta opción para agregar más tecnologías.",
//             confirmButtonText: "Sí",
//             cancelButtonText: "No",
//           }).then((result) => result.value);
//         }

//         // Mensaje final con las tecnologías seleccionadas

//         if (tecnologias.length > 0) {
//           await Swal.fire(
//             `¡Genial! Te gustaría aprender: ${tecnologias.join(", ")}`
//           );
//         } else {
//           await Swal.fire({
//             title: "¡Entendido!",
//             text: "No hay problema, puedes seguir explorando nuevas tecnologías.",
//             icon: "info",
//           });
//         }
//       }
//     } else {
//       await Swal.fire({
//         title: "¡Entendido!",
//         text: "Por favor, ingresa un área válida (Frontend o Backend).",
//         icon: "alarm",
//       });
//     }
//   });
