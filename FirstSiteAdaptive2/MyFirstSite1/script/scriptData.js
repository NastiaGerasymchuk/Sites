(function(){
    // function NewsCity(id,date,title,path,description,status){
    //     this.id=id;
    //     this.date=date;
    //     this.title=title;
    //     this.path=path;
    //     this.description=description;
    //     this.status=status;
    //     this.dateInfo=function(){
    //         return this.date;
    //     }

    //     this.dateInfoToString=function(){
    //         let resDate="";
    //         if(this.date.getDate()<10){
    //             resDate=`0${this.date.getDate()}.`;
    //         }
    //         else{
    //             resDate=`${this.date.getDate()}.`;
    //         }
    //         if(this.date.getMonth()<10){
    //             resDate+=`0${this.date.getMonth()}.`;
    //         }
    //         else{
    //             resDate+=`${this.date.getMonth()}.`;
    //         }
    //         resDate+=`${this.date.getFullYear()}р.`;
    //         // `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}р.`;
    //         return resDate;
    //     }
    //     this.titleInfo=function(){
    //         return this.title;
    //     }
    //     this.pathInfo=function(){
    //         return this.path;
    //     }
    //     this.descriptionInfo=function(){
    //         return this.description;
    //     }
    //     this.idInfo=function(){
    //         return this.id;
    //     }
    //     this.statusInfo=function(){
    //         return this.status;
    //     }
        
    // }   
    var copyNewsBuild=newsBuild.slice();
    
    function getDataTitle(){
        let textAdd,
        status0="font-lighter color-black",
        status1="font-bold color-black",
        status2=`font-bold color-red`;
        common.setArr(copyNewsBuild);
        common.sortArrByDate();
        let copyNewsBuildTmp=common.getArr();  

        copyNewsBuildTmp.forEach(function(item){
            if(item.status==0){
                textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status0}">${common.dateInfoToString(item)}</span><a href="#" data-id="${item.id}" class="${status0}">${item.title}</a></div>`; 
            }  
            else if(item.status==1){
                textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status1}">${common.dateInfoToString(item)}</span><a href="#" data-id="${item.id}" class="${status1}">${item.title}</a></div>`; 
            } 
            else if(item.status==2){
                textAdd=`<div class="grey-color padding8"><span class="background-white padding3 date ${status2}">${common.dateInfoToString(item)}</span><a href="#" data-id="${item.id}" class="${status2}">${item.title}</a></div>`; 
            }

        document.querySelector("#data-title").innerHTML+=textAdd;
    } );
}

function getShortText(text){
    let letterCount=80;
    if(text.length>letterCount){
        text=text.slice(0,letterCount)+"...";
    }
    return text;
}

function learnMore(event){
    let eventTarget=event.target.getAttribute("data-id");   
        let elem=(copyNewsBuild.filter(item=>item.id==Number(eventTarget)))[0];
        document.querySelector("#short-main").innerHTML=`
        <div class="card short-card padding8 margin5 ">
        <h3 class="card-title">${elem.title}</h3>
        <span class="card-title font-lighter">${common.dateInfoToString(elem)}</span>
        <img class="card-img-top" src="${elem.path}" alt="Card image cap">
        <div class="card-body">            
            <p class="card-text font-lighter">${elem.description}</p>                        
        </div>
        </div>`;      
}

    function getAllInfo(){
        common.setArr(copyNewsBuild);
        common.sortArrByDate();
        let copyNewsBuildTmp=common.getArr();  
        let arrRes=[];
        copyNewsBuildTmp.forEach(item=>arrRes.push(`
        <div class="card short-card padding8 margin5 ">
        <h3 class="card-title">${item.title}</h3>
        <span class="card-title font-lighter">${common.dateInfoToString(item)}</span>
        <img class="card-img-top" src="${item.path}" alt="Card image cap">
        <div class="card-body">            
            <p class="card-text font-lighter">${getShortText(item.description)}</p>
            <a href="#" class="btn btn-primary" data-id=${item.id}>Дізнатися більше</a>
        </div>
        </div>
        `));
        document.querySelector("#short-main").innerHTML=arrRes.join("");

    }

    function getImageTitle(){
        let arrStatus1=[],
        arrStatus2=[];
        copyNewsBuild.forEach(function(item){
            if(item.status==1){
                arrStatus1.push(item);
            }
            else if(item.status==2){
                arrStatus2.push(item);
            }
        });
        common.setArr(arrStatus1);
        common.sortArrByDate();
        arrStatus1=common.getArr();
        common.setArr(arrStatus2);
        common.sortArrByDate();
        arrStatus2=common.getArr();
        // arrStatus1=sortArrByDate(arrStatus1);
        // arrStatus2=sortArrByDate(arrStatus2);       
        arrStatus2.forEach((item)=>
        document.querySelector("#image-title").innerHTML+='<div class="card margin5" style="width: 28rem;">'+
        '<img class="card-img-top" data-id="'+item.id+'" src="'+item.path+'" alt="'+item.title+'">'+
        '<div class="card-body">'+
          '<p class="card-text"><a href="#" data-id="'+item.id+'">'+item.title+'</a></p>'+
        '</div>'+
      '</div>');
      arrStatus1.forEach((item)=>
        document.querySelector("#image-title").innerHTML+='<div class="card margin5" style="width: 28rem;">'+
        '<img class="card-img-top" data-id="'+item.id+'" src="'+item.path+'"alt="'+item.title+'">'+
        '<div class="card-body">'+
          '<p class="card-text"><a href="#" data-id="'+item.id+'">'+item.title+'</a></p>'+
        '</div>'+
      '</div>')
    }
    function getAllDetails(item){
        document.querySelector("#image-title").innerHTML='<div class="card margin5">'
        +'<h1 class="card-title margin5"><a href="#">'+item.title+'</a></h1>'+
        '<img class="card-img-top" src="'+item.path+'" alt="'+item.title+'">'+
        '<div class="card-body">'+
          '<p class="card-text text-align-just">'+item.description+'</p>'+
        '</div>'+
      '</div>';       
    }

    function initGetDetails(event){
        let eventTarget=event.target.getAttribute("data-id");
        if(eventTarget){           
            if(!event.target.classList.contains("color-red")){
                event.target.classList.remove("color-black");
                event.target.classList.add("color-blueviolet");
            }
            else{
                event.target.classList.add("backgroundcolor-blueviolet");
            }            
            let elem=(copyNewsBuild.filter(item=>item.id==Number(eventTarget)))[0];            
            getAllDetails(elem);            
        }
    }
    // function sortArrByDate(arr){
    //     arr.sort((a,b)=>a.dateInfo().getTime()-b.dateInfo().getTime());
    //     return arr;
    // }

    function getCarousel(imagePath){
        document.querySelector("#get-carousel").innerHTML=
        `<div class="carousel-item active">
            <img class="d-block w-100" src="${imagePath}" alt="${imagePath}">
        </div>`;
        console.log(imagePath);
    }

    function changeCarousel(){
        let imgName=[],i=0;
        copyNewsBuild.forEach(element => {
           imgName[i]=element.path;
           i++;  
            
        });
        min = 0;
        max = imgName.length;       
        let number=Math.floor(Math.random() * (max - min)) + min;
        console.log(imgName[number]);
        getCarousel(imgName[number]);
    }   
    // document.onload=setInterval(changeCarousel,1500);
    // document.onload=getDataTitle(); 
    // document.onload=getImageTitle();    
    // document.querySelector("#data-title").addEventListener("click",initGetDetails);
    // document.querySelector("#image-title").addEventListener("click",initGetDetails);
    function  doCarouselBootstrap(arr,selectorName){
        let resArr=[];
        resArr[0]=`<div class="carousel-item active">
        <img class="d-block w-100" src="${arr[0].path}" alt="${arr[0].path}">
         </div>`;
            arr=arr.slice(1);
            arr.forEach(item => {
                resArr.push(`<div class="carousel-item">
                <img class="d-block w-100" src="${item.path}" alt="${item.path}">
            </div>`)    
            }); 
        //console.log(resArr.join(""));   
         document.querySelector(selectorName).innerHTML=resArr.join("");
      }
      function  doCarouselBootstrapTablet(arr,selectorName){
        let resArr=[];
        resArr[0]=`<div class="carousel-item active">
        <img class="d-block w-100" src="${arr[0].path}" alt="${arr[0].path}">
      </div>`;        
            arr=arr.slice(1);
            arr.forEach(item => {
                resArr.push(`<div class="carousel-item">
                <img class="d-block w-100" src="${item.path}" alt="${item.path}">
              </div>`)    
            }); 
        //console.log(resArr.join(""));   
         document.querySelector(selectorName).innerHTML=resArr.join("");
      }

    function addShortMenuItems(arrItems){
        let menuArr=[],
        copyArrItems=arrItems.slice();
        menuArr.push(`<li class="nav-item active">
        <a class="nav-link" href="#">${copyArrItems[0]}<span class="sr-only">(current)</span></a>
        </li>`);
        copyArrItems=copyArrItems.slice(1);
        copyArrItems.forEach((item)=>
        menuArr.push(`<li class="nav-item">
        <a class="nav-link" href="#">${item}</a>
      </li>`));
      document.querySelector("#short-gamb-menu").innerHTML=menuArr.join("");
    }

    function addShortMenu(arr,place){
        let menuData=[];
        let arrCopy=arr.slice();
        arrCopy.forEach(item=>menuData.push(`<a class="a-intr ${item.color}" href="#">${item.title}</a>`));
        document.querySelector(place).innerHTML=menuData.join("");
    }

    function addNavBackground(arr){
        let arrCopy=arr.slice();
        let resArr=[];
        resArr.push(`<a class="a-background" href="#"><span>${arrCopy[0].title}</span></a>`);
        arrCopy=arrCopy.slice(1);
        arrCopy.forEach(item=>resArr.push(`<a class="a-background margin-left" href="#"><span>${item.title}</span></a>`));
        resArr.push(`<a class="a-background margin-left" href="#" id="radio"></a>`);
        document.querySelector("#nav-background").innerHTML=resArr.join("");
    }
    function addNavNotBackground(arr){
        let arrCopy=arr.slice();
        let resArr=[];       
        arrCopy.forEach(item=>resArr.push(` <a class="a-text margin5" href="#">${item.title}</a>`));        
        document.querySelector("#nav-not-background").innerHTML=resArr.join("");
    }
    function addNavFooter(arr){
        let arrCopy=arr.slice();
        let resArr=[];       
        arrCopy.forEach(item=>resArr.push(`<a class="f-text margin5" href="#">${item.title}</a>`));        
        document.querySelector("#nav-footer").innerHTML=resArr.join("");
    }

    function changeScale(event)
    {
        // if(!event.contains("transition-scale")){
            // event.classList.add("transition-scale");
        // }
        let eventTarget=event.target.getAttribute("data-id");
        if(eventTarget){           
            if(!event.target.classList.contains("transition-scale")){
               
                event.target.classList.add("transition-scale");
            }
            else{
                event.target.classList.remove("transition-scale");
            }            
                     
        }


    }
    
     
    doCarouselBootstrap(copyNewsBuild,"#bootstrap");
    doCarouselBootstrapTablet(copyNewsBuild,"#bootstrap-tablet");
    

    setInterval(changeCarousel,1500);
    getDataTitle(); 
    getAllInfo();
    getImageTitle(); 
    addShortMenuItems(["Головна", "Новини Чернівців", "Новини України", "Новини світу",
         "Блоги", "прес-релізи", "Історія успіху", "пропозиція тижня", "Публікації \"Мб\"",
          "Афіша", "Тури з Чернівців", "Куди піти вчитись"]);   
    document.querySelector("#data-title").addEventListener("click",initGetDetails);
    // document.querySelector("#image-title").addEventListener("click",initGetDetails);
    document.querySelector("#image-title").addEventListener("click",changeScale);
    document.querySelector("#short-main").addEventListener("click",learnMore);
    addShortMenu(arrShortMenu,"#short-menu-info");
    addShortMenu(arrShortMenu,"#full-menu-info");
    addNavBackground(navBackground);
    addNavNotBackground(navNotBackground);
    addNavFooter(navFooter);
    // document.querySelector("#log-out").addEventListener("click",alert("Ви вийшли"));

   
    
}());