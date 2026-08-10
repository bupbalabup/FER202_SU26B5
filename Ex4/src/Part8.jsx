import { Table } from "react-bootstrap"

function Part8() {

    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        }
    };

    const companyNames = [];
    companies.forEach(c => {
        companyNames.push(<li key={c.name}>{c.name}</li>);
    });

    const companiesAfter1987 = [];
    companies
        .filter(c => c.start > 1987)
        .forEach(c => {
            companiesAfter1987.push(<li key={c.name}>{c.name}</li>);
        });

    const retailCompanies = companies
        .filter(c => c.category === "Retail")
        .map(c => ({
            ...c,
            start: c.start + 1
        }));

    const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);

    const sortedAgesDesc = [...ages].sort((a, b) => b - a);

    const sumAges = ages.reduce((total, age) => total + age, 0);

    const { name, category } = companies[0];
    const newObj = {
        name,
        category,
        print() {
            console.log("Name:", this.name);
        },
    };

    const sumUnknown = (...nums) => nums.reduce((a, b) => a + b, 0);

    const collectArgs = (...args) => {
        const result = [];
        args.forEach((item) => {
            if (Array.isArray(item)) {
                result.push(...item);
            } else {
                result.push(item);
            }
        });
        return result;
    };

    const { address: { street } } = person;

    const createCounter = () => {
        let count = 0;
        return () => count++;
    };
    const counter = createCounter();

    const parseQuery = (url) => {
        const obj = {};
        const query = url.split("?")[1];
        if (!query) return obj;

        query.split("&").forEach((pair) => {
            const [key, value] = pair.split("=");
            obj[key] = decodeURIComponent(value);
        });

        return obj;
    };

    return (
        <div>
            <h1>Part 8</h1>
            <ul>Name of each company: {companyNames}</ul>
            <ul>Companies started after 1987: {companiesAfter1987}</ul>
            <div className="p-4">
                <h3>Retail Companies (start incremented +1)</h3>

                <Table bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                    </thead>

                    <tbody>
                        {retailCompanies.map(company => (
                            <tr key={company.name}>
                                <td>{company.name}</td>
                                <td>{company.start}</td>
                                <td>{company.end}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Part8;