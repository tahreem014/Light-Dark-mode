import React, {useState} from 'react'
import img1 from './Assets/dark.jpg';
import img2 from './Assets/light.jpg';

export default function Switch() {
    const [myStyle, setMyStyle] = useState({
        color: '#454545',
        backgroundColor: '#1E90FF'
       })

const [btnText, setBtnText] = useState ('light mode')

const [img, setImg] = useState ('true')
const Img =()=> {
    if (img.img2==='true'){
      setImg({img2})
    }else{
      setImg({img1})
    }
}


const handleClick = ()=> { 
    if (myStyle.color ==='#454545'){
        setMyStyle({
            color: 'white',
            backgroundColor: '#454545',  
        })
        setBtnText("Dark mode");
        // setImg("img1");
    }else {
        setMyStyle({
            color: '#454545',
            backgroundColor: '#1E90FF'
    })
    setBtnText("Light mode");
    // setImg("img2");
}
}
  return(
    <div>
      <div className='navbar' style={myStyle}>
    <div className="switch">
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={handleClick} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyle}>{btnText}</label>
</div>
</div>
</div>
<div className='image'>
  
  <img className="img2" src={img1}  alt='night mode'>{Img}</img>
  <img className="img1" src={img2} alt='daytime mode'>{Img}</img>
</div>

   </div>   
  );
}