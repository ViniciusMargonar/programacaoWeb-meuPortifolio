async function consultarRepositorio(){
    const nomeUsuario = document.getElementById("inputNomeUsuario").value;
    
    const listaRepositorios = document.getElementById("listaRepositorios");
    listaRepositorios.innerText='';
    const status = document.getElementById("status");

    if(!nomeUsuario){
        alert("Informar o nome do usuário!");
        return;
    }

    const url = `https://api.github.com/users/${nomeUsuario}/repos`;

    status.innerText = " Carregando... ";

    try {
        const resposta = await fetch(url);
        console.log("Antes da Promisse");

        /*resposta.then(res=>{
            console.log(res);
        });*/

        if(!resposta.ok){
            alert("Erro ao consultar o repositório!");
            return;
        }

        const repositorios = await resposta.json();

        repositorios.forEach(element => {
            const itemLista = document.createElement("li");
            itemLista.textContent = element.name;
            listaRepositorios.appendChild(itemLista);        
        });

        console.log("Após a Promisse");
    } catch (error) {
        console.error(error);
    }

status.innerText="";
}


