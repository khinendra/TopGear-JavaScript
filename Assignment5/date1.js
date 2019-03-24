function displayDate(){
    date = new Date();
   year = date.getFullYear();
   month = date.getMonth()+1;
    date = date.getDate();
    
    alert("Today's date is "+date+"-"+month+"-"+year);
}
function displayDate2(){

    var month_names =["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];

    date = new Date();
   year = date.getFullYear();
   month_index = date.getMonth();
    date = date.getDate();
    date2 = date+"-"+month_names[month_index]+"-"+year;
   // var formattedDate = getDateString(new Date(date2), "d-M-y")
    
    alert("Today's date is "+date2);
}
function myDate(){
    today = new Date(); 
    dd = today.getDate(); 
    mm = today.getMonth()+1; 
    const yyyy = today.getFullYear(); 
    if(dd<10) { dd=`0${dd}`; } 
    if(mm<10) { mm=`0${mm}`; } 
    today = `${mm}-${dd}-${yyyy}`; 
    console.log(today); today = 
    `${mm}/${dd}/${yyyy}`; 
    console.log(today); 
    today = `${dd}-${mm}-${yyyy}`; 
    console.log(today);
}