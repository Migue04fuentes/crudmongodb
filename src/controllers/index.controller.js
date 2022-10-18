// Renderización al archivo index
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) =>{
    res.render('index');
};

// Rendirizacion al archivo about
indexCtrl.renderAbout = (req, res) => {
    res.render('about');
}


module.exports = indexCtrl;