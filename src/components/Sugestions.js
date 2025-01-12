import Suggestion from "./Suggestion"

export default function Sugestions(){

    const suggestionsItem = [{nameUser:"chibirdart",imageUser:"assets/img/chibirdart.svg",nameImage:"chibirdart"},
        {nameUser:"razoesparaacreditar",imageUser:"assets/img/razoesparaacreditar.svg",nameImage:"razoesparaacreditar"},
        {nameUser:"adorable_animals",imageUser:"assets/img/adorable_animals.svg",nameImage:"adorable_animals"}
    ]

    const suggestions = suggestionsItem.map(({nameUser,imageUser,nameImage})=>{
        return(
            <>
            <Suggestion nameUser={nameUser} imageUser={imageUser} nameImage={nameImage} />
            </>
        )
    })

   return(<> <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {suggestions}

          

        
          
        </div></>)
}