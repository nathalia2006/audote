async function handleSubmit(event) {
  event.preventDefault();
  
  let email       = document.getElementById("email").value;
  let senha      = document.getElementById("senha").value;
  let descrição_animal      = document.getElementById("descrição_animal").value;
  let foto_animal      = document.getElementById("foto_animal").value;

  let data        = {email,senha,descrição_animal,foto_animal}  
  
  const response = await fetch('http://localhost:3005/api/cadastroAnimais/create', {
    method: "POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  });
  
  let content = await response.json();    
      
  if(content.success) {
    alert(content.message)
  } else {
    alert('Senha incorreta');
  }
}
