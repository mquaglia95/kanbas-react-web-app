const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function ImpliedReturn() {
    return (
    <>
    <h3>Implied return</h3>
    fourTimesFive = {fourTimesFive}<br />
    multiply(4, 5) = 20<br />
    </>
    )
}

export default ImpliedReturn