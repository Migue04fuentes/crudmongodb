const userCtrl = {}; //objeto


// funciones
        //formulario de registro
userCtrl.renderSignUpForms = (req, res) => {
    res.render('users/signup');
}
     //registro de usuario
userCtrl.signup = (req, res) =>{
    res.send('signup');
}

userCtrl.renderSignInForms = (req, res) =>{
    res.render('users/signin')
}
    //Volver a entrar a la aplicacion
userCtrl.signin = (req, res) => {
    res.send('signin');  
}


userCtrl.logout= (req, res) => {
    res.send('logout');
}





// Exportaciones
module.exports = userCtrl;