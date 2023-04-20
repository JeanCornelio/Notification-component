
export const notificationsActiveNumber = (data) => {
  return data.filter(el => el.isactive === true).length
}

export const markAllNotification = (notificationData) => {
  const dataMarket = notificationData.map(notification => {
    if (notification.isactive) {
      notification.isactive = false
    }
    return notification
  })
  const dataMap = notificationsActiveNumber(dataMarket)
  return dataMap
}

export const markNotification = (user, notificationData) => {
  const notiView = notificationData.map(notification => {
    if (notification.username === user && notification.isactive) {
      notification.isactive = false
    }
    return notification
  })

  const notificationActives = notificationsActiveNumber(notiView)
  return { notiView, notificationActives }
}
