export default function Post({imageUser,nameUser,imagePost,nameImage,likedBy,likes}){
    return(
        <>
           <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={imageUser} alt={nameUser}/>
                {nameUser}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={imagePost} alt={nameImage}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai"/>
                <div class="texto">
                  Curtido por <strong>{likedBy}</strong> e <strong>outras {likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        
        </> )}