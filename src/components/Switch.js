import React from 'react'

export default function Switch() {
    const [myStyle, setMyStyle] = React.useState({
        color: '#454545',
        backgroundColor: '#6495ED'
       })

const [btnText, setBtnText] = React.useState ('light mode');
 
const [imgIndex, setImgIndex] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5dh4-1ir2cizJhRs8Pupn_9_A_yqqOuauMbg50sN4TjMEEa5FH_8ZzX_RWI4TV4pjr0&usqp=CAU");

const [imgText, setImgText] = React.useState("light")
 
const handleClick = ()=> { 
    if (myStyle.color ==='#454545'){
        
        setMyStyle({
            color: 'white',
            backgroundColor: '#0c0c0c',  
        })
        setBtnText("Dark mode");
        setImgIndex("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7cvOobRu8Flj3AmaLw_Pk1pIY329BP5UUQ&usqp=CAU");
        setImgText("dark");
    }else {
        setMyStyle({
            color: '#454545',
            backgroundColor: '#6495ED'
    })
    setBtnText("Light mode");
    setImgIndex("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5dh4-1ir2cizJhRs8Pupn_9_A_yqqOuauMbg50sN4TjMEEa5FH_8ZzX_RWI4TV4pjr0&usqp=CAU");
    setImgText("light");
}
}

  return(
    <div>
      <div className='navbar' style={myStyle}>
    <div className="switch">
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={handleClick} type="checkbox" role="switch"
   id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyle}>{btnText}</label>
</div>
</div>
</div>
<div>
  <img src={imgIndex} alt={imgText} className='img'/>
</div>
   </div>   
  );
}