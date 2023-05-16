import PropTypes from 'prop-types';
import css from './Notification.module.css'
function NotificationMessage({ message }) {
    return <h3 className={css.title}>{message}</h3>
}


NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export { NotificationMessage }