(function(){
    const weekDay=[
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота"],
        month=["січня",
            "лютого",
            "березня",
            "квітня",
            "травня",
            "червня",
            "липня",
            "серпня"];
    function getDate(){
        let today=new Date();
        document.querySelector("#date").innerHTML=`${weekDay[today.getDay()]},${today.getDate()} ${month[today.getMonth()]}`;
    }
    // document.onload=getDate();
    getDate();    
}());
