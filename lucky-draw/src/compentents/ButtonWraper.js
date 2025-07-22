import React from 'react';

const ButtonWraper = (props) =>{
    const {text,onClick} = props;
    console.log("iam here " +text);
    
    return (
        
        <button className='btn-wrap' onClick={onClick}> {text}</button>
    
    )

}
export default ButtonWraper;