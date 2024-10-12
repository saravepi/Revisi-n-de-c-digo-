
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Se cambió el nombre de las variables para un mejor entendimiento
const userName = document.querySelector('.name');  // Se eliminó el signo '$' a las variables const por buenas práticas & al "name" se le agregó un . porque en el html esta calificado como una class
const blog = document.querySelector('.blog'); // Se cambió el selector de ID por el selector class
const spot = document.querySelector('.location'); // Se agregó el selector de ID


async function displayUser(username) { // Se reestructura a funcion a una async function

  try { // Se utliza una declaración try ... catch para el manejo de errores en la solicitud a la api
    userName.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);  // El await solo es válido en una async function 

    // se tiene que declarar una variable data para almacenar el response de JSON
    const data = await response.json(); // se utiizó el método JSON para conversión a formato json, el response es para que lea la información 
    console.log(data); 

    // Se cambian las comillas simples por unas backticks (`) para interpolar las variables
    userName.textContent = `${data.name}`;
    blog.textContent = `${data.blog}`;
    spot.textContent = `${data.location}`;

  } catch (err) { 
    handleError(err); 
  }


}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; // se escribe ';' al final de la línea de código
}

displayUser('stolinski').catch(handleError);