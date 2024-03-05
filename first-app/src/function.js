
import React, { useState } from "react"

const fun = () =>{
    const [name,setName] =useState('');
    render(
        <div>
            <center>
                Name : {name} <br/>
                <input type='text' name="usename" onChange={(e)=>setName(e.traget.value)} />
            </center>
        </div>
    )
}