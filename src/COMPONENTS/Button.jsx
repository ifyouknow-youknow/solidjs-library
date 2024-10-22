// src/COMPONENTS/Button.jsx
export function Button(props) {
    return (
        <button
            style={{
                backgroundColor: props.backgroundColor !== undefined ? "black" : `#${props.backgroundColor}`
            }}
            onClick={() => { console.log("Button clicked"); }}
        >
            {props.children}
        </button>
    );
}
