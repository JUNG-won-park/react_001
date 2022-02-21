import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  function changeTitle() {
    let changebutt = [...posts];
    changebutt[0] = '바뀐 글제목임';
    setPosts(changebutt);
  }

  let [modal, setModal] = useState(1);
  let [ddabong, setDdabong] = useState([0,0,0]);
  let [posts, setPosts] = useState(['1st Title', '2nd Title !', '3rd Title !!']);
  let [date, setDate] = useState(['2022-01-01','2022-02-02','2022-03-23']);
  let [article, setArticle] = useState(['blew da fckn off','god dammmm sht','hollly shttttt']);

  let [ddabong2, setDdabong2] = useState(0);

  let [clickNo, setClickNo] = useState(0);

  let [numberI, setNumberI] = useState(0);


  function 반복문(){
    let arr1 = [];

    for(let i = 0; i<3; i++) {
      arr1.push(<div>퉤!</div>);
    }

    return arr1;
  }

  function thumbsUp(t){
    let thumb = [...ddabong];
    thumb[t] = thumb[t]+1;
    setDdabong(thumb);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <div>react sht</div>
      </div>

      <button onClick={changeTitle}>change title</button>

      

    {/* {반복문()} */}

    {/* posts.indexOf(a) */}

    {
      posts.map(function(a, i){
        return(
          <div className='list'>
            <h3 onClick={ ()=>{setClickNo(i); setModal(modal+1)} } > 
            {a} <span onClick={()=>{thumbsUp(i)}}>👍</span> {ddabong[i]} </h3>
            <p>{date[i]}</p>
            <hr/>
          </div>
        )
      }) 
    }
 

   {
     modal%2 === 0
     ? <Modal posts={posts} clickNo={clickNo} date={date} article={article}></Modal>
     : null
   }  

    </div>
  );
}
 

function Modal(props) {
  return(
        <div className='modal'>
          <h2> {props.posts[props.clickNo]} </h2>
          <p>{props.date[props.clickNo]}</p>
          <p>{props.article[[props.clickNo]]}</p>
        </div>
      )
}





export default App;
