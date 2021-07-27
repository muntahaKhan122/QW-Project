const searchFunc=(data,value)=>{
   
   
    if(value!==""||value!==null){
     console.log("in if",value);   
    var val=value.toLowerCase();
    var list=[];
    for(var item in data)
    {
         var curr=data[item].text.toLowerCase();
        if(curr.includes(val))
        {
             list.push(data[item]);
        }

    }

    return list;
   }
   return data;
   
}

export default searchFunc;


