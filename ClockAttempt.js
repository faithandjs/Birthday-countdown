
    setInterval(function(){  
        let dd = new Date(),
            y = dd.getFullYear(),
            mth = dd.getMonth(),
            d = dd.getDate(),
            h = dd.getHours(),
            min = dd.getMinutes(),
            sec = dd.getSeconds();

        let yearTest = new Date(y, 6, 22, 0, 0, 0),
            partyYear = 0
        if (yearTest - dd <= 0){
            partyYear = y + 1;
        }
        else{
            partyYear = y;
        }
    let dl = new Date(partyYear, 6, 22, 0, 0, 0),
        diff = dl-dd,
        days = 1000*60*60*24,
        rdays = Math.floor(diff/days),
        hours = Math.floor(diff%days), 
        rhours = Math.floor(hours/(1000*60*60)),
        mins = Math.floor(hours%(1000*60*60)),
        rmins= Math.floor(mins/(1000*60)),
        secs = Math.floor(mins%(1000*60)),
        rsecs = Math.floor(secs/1000);
       
        
    let d1 = d+'/'+mth+'/'+y+',',
        today = document.getElementById('ddate3').innerHTML = d1;
       
    let cdd = rdays,
        cdh= rhours,
        cdm = rmins,
        cds= rsecs;
        document.getElementById('days').innerHTML = cdd;
        document.getElementById('hours').innerHTML = cdh;
        document.getElementById('mins').innerHTML = cdm;
        document.getElementById('seconds').innerHTML = cds;
        document.getElementById('year').innerHTML = partyYear;
                             }, 1000);
   
     //fuckit();
    