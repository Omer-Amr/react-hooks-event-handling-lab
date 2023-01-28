// Code Keypad Component Here

function Keypad (){
    const changeHandler = () => {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={changeHandler} />

    )
}

export default Keypad;