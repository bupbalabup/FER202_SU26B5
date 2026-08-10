function Part6() {
    const people = [
        { name: 'Jack', age: 50 },
        { name: 'Michael', age: 9 },
        { name: 'John', age: 40 },
        { name: 'Ann', age: 19 },
        { name: 'Elisabeth', age: 16 }
    ];

    const firstPersonIsTeenager = people.find(
        (p) => p.age >= 10 && p.age <= 20
    );

    const allPersonIsTeenager = people.filter(
        (p) => p.age >= 10 && p.age <= 20
    );

    const everyPersonIsTeenager = people.every(
        (p) => p.age >= 10 && p.age <= 20
    );

    const anyPersonIsTeenager = people.some(
        (p) => p.age >= 10 && p.age <= 20
    );

    return (
        <div>
            <h1>Part 6</h1>
            <ul>
                <li>The first person off the people array is teenager: {firstPersonIsTeenager.name}</li>
                <li>All person of the people array is teenager:
                    {allPersonIsTeenager.length > 0
                        ? allPersonIsTeenager.map(p => p.name).join(", ")
                        : "None"}
                </li>
                <li>Every person of the people array is teenager: {everyPersonIsTeenager ? "Yes" : "No"} </li>
                <li>Any person of the people array is teenager: {anyPersonIsTeenager ? "Yes" : "No"}</li>
            </ul>
        </div>
    )

}

export default Part6;