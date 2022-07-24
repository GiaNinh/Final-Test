import { useState } from "react"

const InputShort = ({setInputValue}) =>{
    const [value, setValue] = useState("");
    const handleClick = () =>{
        setInputValue(value);
    }

    return (
        <div>
            <div>
                <span >Enter a Link: </span>
                <input 
                    type="text" 
                    placeholder="Example.com" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleClick} >Short</button>
            </div>
            <div>
                <span>Short domain: </span>
                <span>fb   </span>
                <span>fb   </span>
                <span>fb   </span>
                <span>fb   </span>
                <span>fb   </span>
                
            </div>
        </div>
    )
}

export default InputShort