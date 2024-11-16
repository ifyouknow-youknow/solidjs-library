function Clickable(props) {
    const handleClick = () => {
        if (props.onPress) {
            props.onPress();
        }
    };

    return (
        <div onClick={handleClick}>
            {props.children}
        </div>
    );
}

export default Clickable;