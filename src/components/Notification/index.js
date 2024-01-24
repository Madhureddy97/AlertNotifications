// Write your code here
import {GrFormClose} from 'react-icons/gr'


import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children.icon)
  return (
    <div className="list-container">
      <div className="text-container">
        <div className="title-container">
          <{children.icon} />
          <h1>{children.title}</h1>
        </div>
        <p className="description">{children.description}</p>
      </div>
      <GrFormClose />
    </div>
  )
}

export default Notification
