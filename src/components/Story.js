export default function Story({imageSrc, name}){
   return ( 
    <>
    <div class="story">
            <div class="imagem">
              <img src={imageSrc} alt={name}/>
            </div>
            <div class="usuario">
              {name}
            </div>
    </div></>)
}