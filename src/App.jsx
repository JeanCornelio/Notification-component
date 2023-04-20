import React, { useState } from 'react'
import { NotificationItem } from './Components/NotificationItem'
import notificationData from './data/notifications'
import { markAllNotification, notificationsActiveNumber, markNotification } from './logic/notificationActive'

const data = [...notificationData]
const notification = notificationsActiveNumber(data)

export const App = () => {
  const [notificationActive, setNotificationActive] = useState(notification)
  const [allNotification, setAllNotification] = useState(data)

  const markAll = () => {
    if (notificationActive <= 0) return
    console.log('prueba1')
    const dataMark = markAllNotification(allNotification)
    setNotificationActive(dataMark)
  }

  const markNotifi = (user) => {
    console.log('prueba2')
    const { notiView, notificationActives } = markNotification(user, notificationData)
    setAllNotification(notiView)
    setNotificationActive(notificationActives)
  }

  return (
    <main className="notification_cont">
      <header className="notification_cont-header">
        <div className="notification_cont-title">
          <h1>Notifications</h1>
          <span>{notificationActive}</span>
        </div>
        <button className="notification_cont-btn" onClick={markAll}>Mark all as read</button>
      </header>
      <div className="notification_cont-body">
        {allNotification.map((notification) => {
          return (
            <NotificationItem
              key={notification.username}
              onMarkNotifi = {markNotifi}
              myKey={notification.username}
              {...notification}
            ></NotificationItem>
          )
        })}
      </div>
    </main>
  )
}
