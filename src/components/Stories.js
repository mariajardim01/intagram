import Story from "./Story"

let storyItmes = [{name:"9gag", src:"assets/img/9gag.svg"},
    {name:"meowed", src:"assets/img/meowed.svg"} , 
    {name:"barked", src:"assets/img/barked.svg"} ,
    {name:"nathanwpylestrangeplanet", src:"assets/img/nathanwpylestrangeplanet.svg"}
]

let stories = storyItmes.map((story)=>{
    return(<>
    <Story imageSrc={story.src} name={story.name} />
    </>
    )})

export default function Stories(){
    return (
        <>
         <div class="stories">
        {stories}
        
        </div>
        </>
    )
}