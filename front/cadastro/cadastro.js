let button = document.getElementById("handleSubmit");

button.onclick = async function() {
  let nome       = document.getElementById("nome").value;
  let email      = document.getElementById("email").value;
  let senha      = document.getElementById("senha").value;
  let description = document.getElementById("description").value;  
  let data        = {nome,email,senha}  

  const response = await fetch('http://localhost:3000/api/user/create', {
    method: "POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  });

  let content = await response.json();    
    
  if(content.success) {
    alert("Senha correta")
  } else {
    alert('Senha incorreta');
  }
}