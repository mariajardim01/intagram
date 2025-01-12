import Post from "./Post"

export default function Posts(){

    const postsItem = [{imageUser:"assets/img/meowed.svg", nameUser:"meowed", imagePost:"assets/img/gato-telefone.svg", nameImage:"gato-telefone",likedBy:"jorginho-foguetes",likes:100.225},
        {imageUser:"assets/img/barked.svg", nameUser:"barked", imagePost:"assets/img/dog.svg", nameImage:"dog",likedBy:"mariana",likes:120.466},
        {imageUser:"assets/img/memeriagourmet.svg", nameUser:"memeria gourmet", imagePost:"assets/img/memeriagourmet.svg", nameImage:"memeriagourmet",likedBy:"luana",likes:12}
    ]

    let posts = postsItem.map(({imageUser,nameUser,imagePost,nameImage,likedBy,likes})=>{
        return (
            <>
            <Post imageUser={imageUser} nameUser={nameUser} imagePost={imagePost} nameImage={nameImage} likedBy={likedBy} likes={likes}/>
            </>
        )})

    return(
        <>
        <div class="posts">
        {posts}
        </div>
        </>
    )
}