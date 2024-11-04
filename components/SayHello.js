function Sayhello({fname, lname}){
    //const name = "Fab"
    const myStyle = {
        color: 'red',
        backgroundColor: 'blue'
    }
    return (
    <h1 style={myStyle}>Hello { fname } { lname }</h1>
   // <h1>Hello {props.fname } { props.lname }</h1>
)
}

export default Sayhello;