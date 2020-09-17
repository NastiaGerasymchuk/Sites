let commonLogining=(function(){
    let _login,_password;
    function setLogin(login){
        _login=login;
    }
    function setPassword(password){
        _password=password;
    }
    function getLogin(){
        return _login;
    }
    function getPassword(){
        return _password;
    }
    function reviseLogin(){
        console.log(_login);
        if(_login!=""){
            return 1;
        }
        return 0;
    }
    function revisePassword(){
        console.log(_password);
        if(_password!=""&&_password.length>=8){
            return 1;
        }
        return 0;
    }
    function reviseRepeatPassword(value){
        if(_password==value){
            return 1;
        }
        return 0;
    }
    return{
        setLogin:setLogin,
        setPassword:setPassword,
        getLogin:getLogin,
        getPassword:getPassword,
        reviseLogin:reviseLogin,
        revisePassword:revisePassword,
        reviseRepeatPassword:reviseRepeatPassword
    }
}());