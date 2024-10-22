export function Textfield({
    id,
    backgroundColor = '#F2F3F5',
    isPassword = false,
    isEmail = false,
    isNumber = false,
    placeholder = 'Type here..',
    size = 12,
    paddingV = 8,
    paddingH = 8,
    radius = 10,
    minWidth = 0,
    maxWidth = 400,
    onChange = (value) => console.log(value),
    classes = ''
}) {
    const inputType = isPassword ? 'password' : isEmail ? 'email' : isNumber ? 'number' : 'text';

    return (
        <input
            class={classes}
            id={`tb${id !== undefined ? id : 'nothingbagel'}`}
            type={inputType}
            style={{
                "background-color": backgroundColor,
                "font-size": `${size}px`,
                "outline": "none",
                "padding": `${paddingV}px ${paddingH}px`,
                "border-radius": `${radius}px`,
                "min-width": `${minWidth}px`,
                "max-width": `${maxWidth}px`
            }}
            placeholder={placeholder}
            onInput={(e) => onChange(e.target.value)}
        />
    );
}
