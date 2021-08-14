
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'


const headingStyle = {color:'red', backgroundColor:'black'}
export default function Header ({title}) {


  return (<header className="header">
<h1> {title}</h1>
<Button variant = "light" color = "green" className="add-btn"> Add</Button>

  </header>)
}

Header.defaultProps ={
title:"Task Tracker"

}