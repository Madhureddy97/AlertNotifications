// Write your code here
// import {GrFormClose} from 'react-icons/gr'
// import {AiFillCheckCircle} from 'react-icons/ai'
// import {RiErrorWarningFill} from 'react-icons/ri'
// import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const notificationsList = [
  {
    id: 1,
    icon: 'AiFillCheckCircle',
    title: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: 'RiErrorWarningFill',
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    icon: 'MdWarning',
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: 'MdInfo',
    title: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="notifications-container">
    <h1 className="alert-notifications-heading">Alert Notifications</h1>
    {notificationsList.map(eachNotification => (
      <Notification>{eachNotification}</Notification>
    ))}
  </div>
)

export default AlertNotifications
