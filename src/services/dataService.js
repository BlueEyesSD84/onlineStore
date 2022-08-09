var catalog = [
    {
        _id: "ink1",
        title: "ink",
        price: 20.00,
        category: "Ink",
        image: "ink1.png",

    },
    {
        _id: "ink2",
        title: "ink",
        price: 50.00,
        category: "Ink",
        image: "ink2.png",

    },
    {
        _id: "ink3",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink3.png",

    },
    {
        _id: "ink4",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink4.png",

    },
    {
        _id: "ink5",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink5.png",

    },
    {
        _id: "ink6",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink6.png",

    },
    {
        _id: "ink7",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink7.png",

    },
    {
        _id: "ink8",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink8.png",

    },
    {
        _id: "ink9",
        title: "ink",
        price: 750.00,
        category: "Ink",
        image: "ink9.png",

    },
    {
        _id: "pencil1",
        title: "pencil",
        price: 100.00,
        category: "Pencil",
        image: "pencil1.png",

    },    
];


class DataService {

    getCatalog() {
        //Used to call the server and get a list of products and return.

        return catalog;
    }

}
export default DataService;