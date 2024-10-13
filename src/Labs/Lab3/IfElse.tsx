export default function IfElse() {
    let true1 = true, false1 = false;
    return (
        <div id="wd-if-else">
            <h4>If Else</h4>
            {true1 && <p>true1</p>}
            {/* show the right part if true1 is true */}
            {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
        </div>
    )
}
