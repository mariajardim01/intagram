import React, { useState } from "react"

export default function User(){

const [name,setName] = React.useState("Maria")
const [image,setImage] = React.useState("assets/img/catanacomics.svg")

function changeName(){
    let newName = prompt("Qual nome você deseja inserir?")
    if (!newName){}
    else{
        setName(newName)
    }
}

function changeImage(){
    let newImage = prompt("Insira o link da nova imagem:")
    if (!newImage){}
    else {
        setImage(newImage)
    }

}


    return(<>
    <div class="usuario">
          <img src={image} alt="imagem de perfil" onClick={()=>changeImage()}/>
          <div class="texto">
            <span>
              <strong>{name}</strong>
              <ion-icon name="pencil" onClick={()=>changeName()}></ion-icon>
            </span>
          </div>
    </div></>)
}