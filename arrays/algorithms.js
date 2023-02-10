
function openOrSenior(data){
    let namesArray = "";
     for(let i = 0 ; i < data.length; i++)
     {
        if(data[i][0] >= 55 && data[i][1] > 7)
        {
            namesArray += ' Senior ';
        }else{
            namesArray += ' Open ';
        }
    }
       namesArray = namesArray.split(" ");
       console.log(namesArray.filter(n => n !== ""));
}


openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
openOrSenior([[104, 20],[23,22],[67,61],[23,13],[67,12],[61,12]]);
openOrSenior([]);