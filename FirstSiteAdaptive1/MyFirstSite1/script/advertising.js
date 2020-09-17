(function(){
    function addOpacity(){
        document.querySelector("header").classList.add("opacity0-3");
        document.querySelector("main").classList.add("opacity0-3");
        document.querySelector("footer").classList.add("opacity0-3");
    }
    function removeOpacity(){
        document.querySelector("header").classList.remove("opacity0-3");
        document.querySelector("main").classList.remove("opacity0-3");
        document.querySelector("footer").classList.remove("opacity0-3");
    }
    function changeClass(arrPlace=[],doAction,className){//ніяк не виходить
        
        arrPlace.forEach(item => { 
            let someText=`document.querySelector("${item}").classList.doAction("${className}")`;            
            //document.querySelector(item).classList.doAction(className); 
            someText;
            console.log(someText); 
                   
        });
    }
    // function openCard(){
    //     removeOpacity();
    //    // window.open("https://map.meta.ua/ua/chernovtsy/#zoom=14&lat=48.30922&lon=25.93768&base=B00");
        
    // } 
    function closeAdvertising(){
        if(!cardCity.hasAttribute("hidden")){
            cardCity.setAttribute("hidden","hidden");
            //removeOpacity();    
            //changeClass(["header","main","footer"],"remove","opacity0-3");       
        }
               
    } 
    function  openAdvertising(){        
        if(cardCity.hasAttribute("hidden")){
            cardCity.removeAttribute("hidden");
            //changeClass(["header","main","footer"],"add","opacity0-3");
            //addOpacity();            
            //document.body.classList.add("opacity0-5");
        } 
        //cardCity.removeAttribute("hidden");       
    } 
    
   
    let cardCity=document.querySelector("#card-city"),
    btnYes=document.querySelector("#yes"),
    btnNo=document.querySelector("#no");
    // btnYes.addEventListener("click",openCard);  
    btnYes.addEventListener("click",closeAdvertising);   
    btnNo.addEventListener("click",closeAdvertising);
    // document.onload=setTimeout(openAdvertising,1000);
    setTimeout(openAdvertising,1000);
    
}());