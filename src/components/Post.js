import React from "react"
import { useState } from "react"


export default function Post({imageUser,nameUser,imagePost,nameImage,likedBy,likes}){
  
  function savedPicture(button){
    if (button.name == "bookmark-outline" ){
      button.name = "bookmark"
    }else if (button.name == "bookmark"){
      button.name = "bookmark-outline"
    }

  }
  const [buttonHeart, setButtonHeart] = useState(() =>
    React.createElement('ion-icon', {
      name: 'heart-outline',
      onClick: (event) => likedPicture(event.target),
    })
  );
  
  const [allLikes,setAllLikes] = React.useState(likes)
  
  function likedPicture(button){
    if (button.name == "heart-outline" ){
      setButtonHeart(<>
        <ion-icon name="heart" style={{color:"red"}} onClick={(b)=>likedPicture(b.target)}></ion-icon>
        </>)
      setAllLikes(likes + 1)
      
    }else if (button.name == "heart"){
      setButtonHeart(<>
        <ion-icon name="heart-outline" style={{color:"#000000"}} onClick={(b)=>likedPicture(b.target)}></ion-icon>
        </>)
      setAllLikes(likes )
    }

  }
  
  function likePictureImage(){
    const heartName = buttonHeart.props.name;
    if (heartName == "heart-outline"|| allLikes == likes){
      setButtonHeart(<>
        <ion-icon name="heart" style={{color:"red"}} onClick={(b)=>likedPicture(b.target)}></ion-icon>
        </>)
      setAllLikes(likes + 1)
    }
  }
    

  
  return(
        <>
           <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={imageUser} alt={nameUser} />
                {nameUser}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={imagePost} alt={nameImage} onClick={()=>likePictureImage()}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  {buttonHeart}
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline" onClick={(b)=>savedPicture(b.target)}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai"/>
                <div class="texto">
                  Curtido por <strong>{likedBy}</strong> e <strong>outras {Intl.NumberFormat('pt-BR').format(allLikes)} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        
        </> )}