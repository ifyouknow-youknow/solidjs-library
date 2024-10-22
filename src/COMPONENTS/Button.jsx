// src/COMPONENTS/Button.jsx
export function Button(props) {
    return (
        <button style={{ "background-color": props.backgroundColor !== undefined ? props.backgroundColor : 'red' }}
            onClick={() => { console.log("All Hail the Nothing Bagel"); }}
        >
            {props.children}
        </button>
    );
}
