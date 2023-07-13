  let gameMusic=new Audio("Assets/music.mp3");
  let turnMusic= new Audio("Assets/ting.mp3");
  let gameOverMusic=new Audio("Assets/gameover.mp3");
  let turn='X';
  let isgameOver=false;
  //gameMusic.play();

  function changeTurn()
  {
    if(turn === 'X')
    {
      return '0';
    }
    else {
      return 'X';
    }
  }

  //Turn Logic


  
  let boxes = document.getElementsByClassName("box");
  Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(isgameOver === false)
            {
            document.querySelector('.info-text')
            .innerHTML=`Your Turn ${turn}`;
            }
            
            
        }
    });
});

  function checkWin()
  {
    let boxtext=document.getElementsByClassName('box-text');
    let wins=[
      [0,1,2,0,100,0],
      [3,4,5,0,255,0],
      [6,7,8,0,380,0],
      [0,3,6,-150,250,90],
      [1,4,7,0,250,90],
      [2,5,8,150,250,90],
      [0,4,8,0,250,45],
      [2,4,6,0,250,-45],
    ];
    wins.forEach((value)=>{
    if((boxtext[value[0]].innerText!== '')&&(boxtext[value[0]].innerText===boxtext[value[1]].innerText)&&
    (boxtext[value[1]].innerText=== boxtext[value[2]].innerText))
    {
      document.querySelector('.info-text')
      .innerHTML=`${boxtext[value[0]].innerText} Wins`;
      isgameOver=true;
      gameOverMusic.play();
      document.querySelector('.img').style.width="148px";
     /* document.querySelector('.line').style.width="30vw";
      document.querySelector('.line').style.transform=
      `translate(${value[3]}px,${value[4]}px) rotate(${value[5]}deg)`;*/
    }

    });
  }

  const reset=document.querySelector('.reset');
  reset.addEventListener('click',()=>
  {
    resetGame();

  }); 

  function resetGame()
  {
    let boxtexts=document.getElementsByClassName('box-text');
    Array.from(boxtexts).forEach(element=>{
      element.innerText='';
    });
    turn='X';
    isgameOver = false;
    document.querySelector('.img').style.width="0px";
    //document.querySelector('.line').style.width="0vw";
    document.querySelector('.info-text')
            .innerHTML=`Turn for ${turn}`;

  }

