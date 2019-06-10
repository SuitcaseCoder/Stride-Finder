module.exports = function(app,passort){
    //process the login form
    //app.post('/login', do all our passport stuff)

    //process the signup form
    //app.post('./signup', do our passort stuff here)

    //logout
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};

//middleware to detect login 
function isLoggedIn(req,res, next){
    if(req.isAuthenticated())
        return next();

    res.redirect('/');
}