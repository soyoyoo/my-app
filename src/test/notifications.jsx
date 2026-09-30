let notificationTimeout;

export function showNotification(message, theme = 'light') {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.setAttribute('role', 'status');
  notification.setAttribute('aria-live', 'polite');
  Object.assign(notification.style, {
    position: 'fixed',
    top: '16px',
    right: '16px',
    zIndex: '9999',
    padding: '12px 16px',
    borderRadius: '6px',
    color: theme === 'dark' ? '#f8fafc' : '#17202a',
    backgroundColor: theme === 'dark' ? '#263238' : '#ffffff',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
    fontFamily: 'sans-serif',
  });

  document.getElementById('app-notification')?.remove();
  clearTimeout(notificationTimeout);
  notification.id = 'app-notification';
  document.body.append(notification);

  notificationTimeout = setTimeout(() => notification.remove(), 3000);
}