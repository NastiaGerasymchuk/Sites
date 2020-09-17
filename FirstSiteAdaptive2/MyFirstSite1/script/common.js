let common=(function(){
    let arr;
    function setArr(arrValue){
        arr=arrValue.slice();
    }
    function getArr(){
        return arr;
    }
    function sortArrByDate(){
        arr.sort((a,b)=>b.date.getTime()-a.date.getTime());        
    }
    function fullTime(time)
    {
        if(time<10){
            return `0${time}`;
        }
        return `${time}`;   
    }
    function dateInfoToString(obj){
        let resDate="";
        resDate=`${fullTime(obj.date.getHours())}:`;
        resDate+=`${fullTime(obj.date.getMinutes())}:`;
        resDate+=`${fullTime(obj.date.getSeconds())} `;
        resDate+=`${fullTime(obj.date.getDate())}.`;
        resDate+=`${fullTime(obj.date.getMonth())}.`;        
        resDate+=`${obj.date.getFullYear()}р.`;
        // `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}р.`;
        return resDate;
    }
    return{
        setArr:setArr,
        getArr:getArr,
        sortArrByDate:sortArrByDate,
        dateInfoToString:dateInfoToString      
    }
}());