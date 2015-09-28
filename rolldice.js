// JavaScript File

function RollDice(){
   
    var frequency = [7];
    frequency[1]=0;
    frequency[2]=0;
    frequency[3]=0;
    frequency[4]=0;
    frequency[5]=0;
    frequency[6]=0;
    
    for(var i=1; i<=1000;i++)
    {
        var dice = parseInt(Math.random()*6)+1;
        frequency[dice] += 1;
       
        
    }
    console.log("Face     Frequency");
     for (var i = 1; i <= 6; i++)
        {
             console.log(i + "        " + frequency[i]);
        }
}
RollDice();