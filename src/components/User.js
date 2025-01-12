import React, { useState } from "react"

export default function User(){

const [name,setName] = React.useState("Maria")

function changeName(){
    let newName = prompt("Qual nome você deseja inserir?")
    if (!newName){}
    else{
        setName(newName)
    }
}


    return(<>
    <div class="usuario">
          <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{name}</strong>
              <ion-icon name="pencil" onClick={()=>changeName()}></ion-icon>
            </span>
          </div>
    </div></>)
}