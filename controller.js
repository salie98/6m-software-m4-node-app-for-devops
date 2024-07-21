
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!");
}
function home(req, res){
    res.send("this is the home page");
}

function user(req, res) {
    var name1 = "Danielle";
    var email1 = "danielle@test.com";
    var password1 = "123test";
    var result = name1 + " " + email1 + " " + password1;
    res.send("person info" + result);
};

module.exports = print, home, user;