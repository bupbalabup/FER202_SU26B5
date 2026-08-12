function Part4() {
    function Title({ text }) {
        return <h2>{text}</h2>;
    }

    function Description({ text }) {
        return <p>{text}</p>;
    }

    function Image({ url }) {
        return <img src={url} alt="card" style={{ width: "100%", borderRadius: "8px" }} />;
    }

    function SimpleCard({ item }) {
        return (
            <div>
                <div class="row">
                    <div class="col-6">
                        <Image url={item.image} />
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="text-center">
                        <Title text={item.title} />
                        <Description text={item.description} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const DataDescription = {
        title: 'Hoai Nguyen - FPT DaNang',
        description: 'Mobile: 0982827763',
        image: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png'
    }


    return (
        <div>
            <h1>Part 4</h1>
            <SimpleCard item={DataDescription} />
        </div>
    )
}

export default Part4;