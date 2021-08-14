
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'


const headingStyle = {color:'red', backgroundColor:'black'}
export default function Header ({title}) {

const onClick = (e) => {
  console.log("Hi!")
}
  return (<header className="header">
<h1> {title}</h1>
<Button onClick={onClick} variant = "light" color = "green" className="add-btn"> Add</Button>

  </header>)
}

Header.defaultProps ={
title:"Task Tracker"

}