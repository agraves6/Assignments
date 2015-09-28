function Initialize(element, index, array){
    array[element]=0;
}
function outputArray(element,index,array){
    console.log(element.toString() + "\t" + array[element].toString());
}
function RollDice(){
    var frequency = new Array("One","Two","Three","Four","Five","Six");
    
     frequency.forEach(Initialize);

     
    
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
    frequency.forEach((outputArray));
}
RollDice();