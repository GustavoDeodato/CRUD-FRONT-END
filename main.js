"use strict"

async function getContatos(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    return data
} 

async function postContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

async function putContato(contato, id){

     const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(contato, id)
    }

    const response = await fetch(url, options)

    return response.ok
}

async function DeleteContato(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(contato, id)
    }

    const response = await fetch(url, options)

    return response.ok
}


const contato = {
    
        
        "nome": "Vini Abandono",
        "celular": "11 9 111-1111",
        "foto": "../img/ana-oliveira-dias.png",
        "email": "dizerissonaootraradevolta@gmail.com",
        "endereco": "Av. Sem pai, 234",
        "cidade": "Itapevi"
      
}

