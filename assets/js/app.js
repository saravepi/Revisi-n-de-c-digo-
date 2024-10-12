const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`; 
const n = document.querySelector('.name');  // Se eliminó el signo '$' a las variables const por buenas práticas & al "name" se le agregó un . porque en el html esta calificado como una class
const b = document.querySelector('.blog'); // blog es una class, se agrega "."
const l = document.querySelector('.location'); // se agrega un . por ser una class


const displayUser = async (username) => { // Se reestructura a funcion a una arrow function
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);  // El await solo es válido en una async function por eso tenemos que reestructurar
  const user = await response.json(); // se utiizó el método JSON para connversión a formato json
  console.log(user.data); // Se agrega la constante user
  n.textContent = '${data.name}'; 
  b.textContent = '${data.blog}';
  l.textContent = '${data.location}';
}

const handleError = (err) => { // también se reestructura a una arrow function
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; // se escribe ';' al final de la línea de código
}

displayUser('stolinsk').catch(handleError(n)); // se agregó n 