const pagination = (list) => {
    const itemsPerPage = 10;
    const numberOfPage = Math.ceil(list.length / itemsPerPage);
    const newList = Array.from({length: itemsPerPage}, (_,index) => {
        const start = index*itemsPerPage;
        return list.slice(start, start + numberOfPage);
    })
    return newList;
}

export default pagination;


// Pagination : Divide received list into smallers arrays with size fit to the items per page
// newList =Array 100items [[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items,[]:10 items ]

