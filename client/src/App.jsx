// import React, {useEffect} from 'react'
// import {io} from "socket.io-client"
// import {Container} from "@mui/material"
// const App = () => {
//   const socket = io("http://localhost:3000")

//   useEffect (() => {
//     socket.on("connect",() =>{
//       console.log("Connected",socket.id);
//     });

    

//       socket.on("disconnect", () => {
//   console.log("Disconnected");
// });
    
//   },[]);



//   return (
//     < Container maxWidth = "sm">



//   )
// }

// export default App;
import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import { Container, TextField, Button } from "@mui/material"

const socket = io("http://localhost:3000")

const App = () => {

  const [message, setMessage] = useState("")

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

  }, []);

  const sendMessage = (e) => {
    e.preventDefault()

    socket.emit("message", message)

    setMessage("")
  }

  return (
    <Container maxWidth="sm">

      <form onSubmit={sendMessage}>

        <TextField
          fullWidth
          label="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />

        <Button variant="contained" type="submit">
          Send
        </Button>

      </form>

    </Container>
  )
}

export default App
