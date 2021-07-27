const searchFunc=(data, value)=>{
  if (value!==''||value!==null) {
    console.log('in if', value);
    const val=value.toLowerCase();
    const list=[];
    data.forEach((item)=>{
      const curr=item.text.toLowerCase();
      if (curr.includes(val)) {
        list.push(item);
      }
    });
    return list;
  }
  return data;
};

export default searchFunc;


