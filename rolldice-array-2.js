// JavaScript File

function outputObject(object){
    console.log("One\t" + object.One);
    console.log("Two\t" + object.Two);
    console.log("Three\t" + object.Three);
    console.log("Four\t" + object.Four);
    console.log("Five\t" + object.Five);
     console.log("Six\t" + object.Six);
}
function RollDice(){
    var frequency ={"One" : 0,"Two" : 0,"Three" : 0,"Four" : 0,"Five" : 0,"Six" : 0};


     
    
      for(var i=1; i<=1000;i++)
    {
        var dice = parseInt(Math.random()*6)+1;
        
        switch (dice)
        {
            case 1 : frequency["One"] += 1; break;
            case 2 : frequency["Two"] += 1; break;
            case 3 : frequency["Three"] += 1; break;
            case 4 : frequency["Four"] += 1; break;
            case 5 : frequency["Five"] += 1; break;
            case 6 : frequency["Six"] += 1; break;
        }
    }
    console.log("Face\tFrequency")
    outputObject(frequency);
}
RollDice();