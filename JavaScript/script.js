  let gameMusic=new Audio("Assets/music.mp3");
  let turnMusic= new Audio("Assets/ting.mp3");
  let gameOverMusic=new Audio("Assets/gameover.mp3");
  let turn='X';
  let isgameOver=false;

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
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    wins.forEach((value)=>{
    if((boxtext[value[0]].innerText!== '')&&(boxtext[value[0]].innerText===boxtext[value[1]].innerText)&&
    (boxtext[value[1]].innerText=== boxtext[value[2]].innerText))
    {
      document.querySelector('.info-text')
      .innerHTML=`${boxtext[value[0]].innerText} Wins`;
      isgameOver=true;
      document.querySelector('.img').style.width="148px";
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
    document.querySelector('.info-text')
            .innerHTML=`Your Turn ${turn}`;

  }

