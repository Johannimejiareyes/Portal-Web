
const users = [
  { username: "estudiante", password: "mejia1221", role: "estudiante", page: "estudiante.html" },
  { username: "profesor", password: "mejia1221", role: "profesor", page: "profesor.html" },
  { username: "admin", password: "mejia1221", role: "administrador", page: "admin.html" }
];

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();


  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    
    window.location.href = user.page;
  } else {
    
    alert("Acceso denegado: Usuario o Contraseña incorrecto ");
  }
});
