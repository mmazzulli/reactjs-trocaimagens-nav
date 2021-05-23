import React from 'react'
// import TrocaNumber from '../../components/TrocaNumber'
import TrocaImg from '../../components/TrocaImg'
import imagem1 from './01.jpg'
import imagem2 from './02.jpg'
import imagem3 from './03.jpg'

function Home(){
       // const imagem1 = require('http://localhost:3000/images/01.jpg')
       // const imagem2 = require('http://localhost:3000/images/02.jpg')
       // const imagem3 = require('http://localhost:3000/images/03.jpg')
       return  <TrocaImg img1={imagem1} img2={imagem2} img3={imagem3} />
}

export default Home;


// MODELO INICIAL 
// function Home(){
//     const [num, setNum] = useState(10)
   
//     return (
//         <div className="container">
//           <h3>O valor é: {num}</h3>
//           <br></br>
//           <button onClick={()=>{setNum(num + 10)}}>Mais 10</button>
//           </div>
//     )
// }