export default function Suggestion({nameUser,imageUser,nameImage}){
    return(
        <>
        <div class="sugestao">
            <div class="usuario">
              <img src={imageUser} alt={nameImage}/>
              <div class="texto">
                <div class="nome">{nameUser}</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </>

    )
}