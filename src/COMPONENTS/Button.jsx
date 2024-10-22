export function Button(props) {
    return <button onClick={() => { console.log("YOU ARE STUPID") }}>{props.children}</button>
}