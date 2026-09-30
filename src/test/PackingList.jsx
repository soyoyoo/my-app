function Item({name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = name + " ✅";

    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}
export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                    isPacked={true}
                    name="Space suit"
                />
            </ul>
            <ul>
                <Item
                    isPacked={false}
                    name = "Photo of Tam"
                    />
                <Item
                    isPacked={false}
                    name = "Helmet"
                    />
            </ul>
        </section>
    );
}