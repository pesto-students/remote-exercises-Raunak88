function aperture(n,list) {
    let tuples  = list.map((x)=>{        
        if(list.indexOf(x)+n <= list.length){
            return (list.slice(list.indexOf(x),(list.indexOf(x)+n)))
        }else{
            return [];
        }        
       
    }).filter(function(item){
        return typeof item !=='undefined' && item.length>0  
    });
    return tuples;
}

 export { aperture };
