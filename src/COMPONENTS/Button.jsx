// src/COMPONENTS/Button.jsx
export function Button({
    backgroundColor = '#F2F3F5',
    size = 12,
    paddingV = 8,
    paddingH = 16,
    radius = 100,
    onClick = () => alert("All Hail The Nothing Bagel."),
    borderSize = 0,
    borderColor = 'black',
    classes = '',
    children
}) {
    return (
        <button
            class={classes}
            style={{
                "background-color": backgroundColor,
                "font-size": `${size}px`,
                "padding": `${paddingV}px ${paddingH}px`,
                "border-radius": `${radius}px`,
                "border": `${borderSize}px solid ${borderColor}`
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
