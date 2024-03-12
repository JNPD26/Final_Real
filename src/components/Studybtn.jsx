import Button from '@mui/material/Button';
import React from 'react'

const sayMyname = () => {
    console.log('Jay')
}
function handleClick() {
    alert('Hello')
}

const Studybtn = () => {
    return (
        <div>
            <Button variant="contained" onClick={sayMyname}>Click</Button>
            <Button onClick={handleClick}>Say Hi!!</Button>
        </div>
    )
}
export default Studybtn;