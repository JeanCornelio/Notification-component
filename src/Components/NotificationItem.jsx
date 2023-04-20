import React from 'react'

export const NotificationItem = ({ username, description, hour, avatar, isactive, myKey, onMarkNotifi }) => {
  const NotificationActive = isactive ? 'notification is-active' : 'notification'
  const DatActive = isactive ? 'dat-red active' : 'dat-red'

  const notifiHandle = () => {
    onMarkNotifi(myKey)
  }

  return (
    <section onClick={notifiHandle} className={NotificationActive}>
      <header className="notification_header">
        <img src={avatar} alt={avatar} />
      </header>
      <div className="notification_body">
        <div className="notification_body-description">
          <strong>{username}</strong>
          <div>{description}</div>
          <span className={DatActive}></span>
        </div>
        <span>{hour}</span>
      </div>
    </section>
  )
}
