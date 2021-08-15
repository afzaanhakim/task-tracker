import { FaTimes } from 'react-icons/fa'

export default function Task({ task, onDelete }) {

return (<div className="task"> <h3>{task.text}<FaTimes style={{ color:'red', cursor:'pointer' }}></FaTimes></h3> <p> {task.day}</p> </div>)

}