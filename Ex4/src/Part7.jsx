function Part7() {
    var array = [1, 2, 3, 4];

    const sum = array.reduce((accumulator, value) => accumulator + value, 0);

    const product = array.reduce((accumulator, value) => accumulator * value, 1);
    return (
        <div>
            <h1>Part 7</h1>
            <p>Sum: {sum}</p>
            <p>Product: {product}</p>
        </div>
    )
}

export default Part7;