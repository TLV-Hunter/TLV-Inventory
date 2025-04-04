import React, { useContext } from 'react';
import NotificationContext from '../../contexts/NotificationContext'; // ปรับ path เนื่องจากอยู่ในโฟลเดอร์ Notification/
import '../../styles/notification.css';

const Notification = () => {
  const { notification } = useContext(NotificationContext);

  if (!notification) return null;

  const { message, type } = notification;

  return (
    <div className={`notification notification-${type}`}>
      {message}
    </div>
  );
};

export default Notification;