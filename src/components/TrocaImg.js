import React,{useState} from 'react'

export default function TrocaImg(props) {
    const [timg, setTimg] = useState(1)

    function condicao(clicado){
        if (clicado===1){return <img src={props.img1} />}
        else if (clicado===2){return <img src={props.img2} />}
        else {return <img src={props.img3} />}
    }
       
    return (
    <div className="container">
    <h1>{timg}</h1>
    {condicao(timg)}
    <br></br>
    <button onClick={() => setTimg(1)}>-- 1 --</button>
    <button onClick={() => setTimg(2)}>-- 2 --</button>
    <button onClick={() => setTimg(3)}>-- 3 --</button>
</div>
    )
}
