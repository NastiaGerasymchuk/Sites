let common=(function(){
    let arr;
    function setArr(arrValue){
        arr=arrValue.slice();
    }
    function getArr(){
        return arr;
    }
    function sortArrByDate(){
        arr.sort((a,b)=>a.dateInfo().getTime()-b.dateInfo().getTime());        
    }
    return{
        setArr:setArr,
        getArr:getArr,
        sortArrByDate:sortArrByDate        
    }
}());