const getAllAuthors = (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: `${req.method} - request to Author endpoint`});
};

const getAuthorById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - request to Author endpoint`});
};

const createAuthor = (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: `${req.method} - request to Author endpoint`});
};

const updateAuthor = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - request to Author endpoint`});
};

const deleteAuthor = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - request to Author endpoint`});
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
};

//another way of exporting
// exports.getAllAuthors = (req, res) => {
//     res.status(200).json({ 
//         success: true, 
//         message: `${req.method} - request to Author endpoint`});
// };

// exports.getAuthorById = (req, res) => {
//     const {id} = req.params;
//     res.status(200).json({ 
//         id,
//         success: true, 
//         message: `${req.method} - request to Author endpoint`});
// };

// exports.createAuthors = (req, res) => {
//     res.status(200).json({ 
//         success: true, 
//         message: `${req.method} - request to Author endpoint`});
// };

// exports.updateAuthor = (req, res) => {
//     const {id} = req.params;
//     res.status(200).json({ 
//         id,
//         success: true, 
//         message: `${req.method} - request to Author endpoint`});
// };

// exports.deleteAuthor = (req, res) => {
//     const {id} = req.params;
//     res.status(200).json({ 
//         id,
//         success: true, 
//         message: `${req.method} - request to Author endpoint`});
// };