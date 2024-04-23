const cuerpotabla = document.getElementById('tableData');
let i = 1;

const register = (event) =>{

    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('Apellidos').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('dateOfBirth').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('passwordconfirm').value;

    if (nombre === '' || apellidos === '' || email === '' || fecha === '' || password === '' || confirm === '') {
        alert('Por favor, complete todos los campos.');
        return; // Salir de la función si falta algún dato
      }
    
    const rows = cuerpotabla.querySelectorAll('tr');
    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length === 3) { // Verificar que sea una fila con datos de usuario
          const existingNombre = cells[0].innerText.trim();
          const existingApellidos = cells[1].innerText.trim();
          const existingEmail = cells[2].innerText.trim();
          
          if (nombre == existingNombre || apellidos === existingApellidos || email === existingEmail) {
            alert('Los datos ingresados ya existen en la tabla.');
            return; // Salir de la función si los datos ya existen
          }
        }
      }
    
      cuerpotabla.innerHTML += `<tr><th scope="row">${i}</th><td>${nombre}</td><td>${apellidos}</td><td>${email}</td></tr>`;

      document.getElementById('nombre').value = '';
      document.getElementById('Apellidos').value = '';
      document.getElementById('dateOfBirth').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('passwordconfirm').value = '';
    i++;
};

document.getElementById('createForm').addEventListener('submit', register);