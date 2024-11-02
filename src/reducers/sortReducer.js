export default function searchReducer(sort, action) {
    switch (action.type) {
        case "desc":
            return action.search;
        case "asc":
            return action.search;
        default:
            return sort;
    }
}