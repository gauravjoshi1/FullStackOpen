const Notification = ({message}) => {
    if (message === null) return;

    const notificationColor = {
        color: message.color
    }

    return (
        <div style={notificationColor} className="confirmation">
            {message.content}
        </div>
    )
}

export default Notification