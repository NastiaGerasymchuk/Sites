(function(){
    function hideShowEye(text,eye){
        if(text.value!=""){
            if(text.type=="password"){
                text.type="text";
                eye.innerHTML=`&#128065`;            
                console.log(text.type);
            }
            else{
                text.type="password";
                eye.innerHTML=`<span class="glyphicon glyphicon-eye-close"></span>`;
                console.log(text.type);
            }
        }
        else{
            eye.title="Введіть пароль!!!";
        }       
    }

    function correctData(){  
        let inputLogin=((document.querySelector("#login")).value).trim(),
        inputPassword=((document.querySelector("#password")).value).trim();      
        commonLogining.setLogin(inputLogin);
        commonLogining.setPassword(inputPassword);   
        console.log(inputLogin);   
        if(commonLogining.reviseLogin()&&commonLogining.revisePassword()){
            if(!alertNotCorrect.hasAttribute("hidden")){
                alertNotCorrect.setAttribute("hidden","hidden")
            }
         if(commonLogining.getLogin()==jsonObj.user.login&&commonLogining.getPassword()==jsonObj.user.password){
            alert("Дані введено коректно!!!");
         }
         else{
            alert("Користувача не знайдено!!!");
         }
         
        }
        else{
            alertNotCorrect.removeAttribute("hidden");
        }
    }
    function runPass(){
        hideShowEye(passOrText,eyePlace);
    }
    function runPassRepeat(){
        hideShowEye(passOrTextRepeat,eyePlaceRepeat);
    }
    function reviseReg(){
        logReg.innerHTML="Реєстрація";
        btnOk.classList.remove("hide");
        passRepeat.classList.remove("hide");
        btnRegister.classList.add("hide");
        btnLogin.classList.add("hide");
        if(!alertNotCorrect.hasAttribute("hidden")){
            alertNotCorrect.setAttribute("hidden","hidden")
        }

    }
    function doRegistration(){
        logError.classList.add("hide");
        passError.classList.add("hide");
        passRepeatError.classList.add("hide");
        if(!alertNotCorrect.hasAttribute("hidden")){
            alertNotCorrect.setAttribute("hidden","hidden")
        }
        
        // document.querySelector("#pass-repeat").classList.remove("hide");        
        commonLogining.setLogin(((document.querySelector("#login")).value).trim());
        commonLogining.setPassword(((document.querySelector("#password")).value).trim());
        let repeatPass=(document.querySelector("#password-repeat").value).trim();
        let countError=0;
        if(commonLogining.reviseLogin()==0){
            logError.classList.remove("hide");
            countError+=1;
        }
        if(commonLogining.revisePassword()==0){
            passError.classList.remove("hide");
            countError=+1;
        }
        if(commonLogining.reviseRepeatPassword(repeatPass)==0){
            console.log(passwordRepeat);
            passRepeatError.classList.remove("hide");
            countError=+1;
        }
        if(countError>0){
            alertNotCorrect.removeAttribute("hidden");
        }
        else{
            logError.classList.add("hide");
            passError.classList.add("hide");
            passRepeatError.classList.add("hide");
            alert("Регістрація пройшла успішно!!!");
        }

    }
    
    let eyePlace=document.querySelector("#hide-show-eye");
    let eyePlaceRepeat=document.querySelector("#hide-show-eye-repeat");
    let passOrText=document.querySelector("#password");
    let passOrTextRepeat=document.querySelector("#password-repeat");
    let alertNotCorrect=document.querySelector("#alert-not-correct");
    let logError=document.querySelector("#log-error");
    let passError=document.querySelector("#pass-error");
    let passwordRepeat=(document.querySelector("#password-repeat").value).trim();
    let passRepeatError=document.querySelector("#pass-repeat-error");
    let passRepeat=document.querySelector("#pass-repeat");
    let btnLogin=document.querySelector("#btn-login");
    let btnRegister=document.querySelector("#btn-register");
    let btnOk=document.querySelector("#btn-ok");
    let logReg=document.querySelector("#log-reg");
    
    
    eyePlace.addEventListener("click",runPass);
    eyePlaceRepeat.addEventListener("click",runPassRepeat);
    btnLogin.addEventListener("click",correctData);
    btnRegister.addEventListener("click",reviseReg);
    btnOk.addEventListener("click",doRegistration);
}());