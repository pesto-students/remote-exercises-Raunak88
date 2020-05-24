function chunkArrayInGroups(array, chunkSize) {
var chunksArray = [];
 for(let i=0;i<array.length;i=i+chunkSize){
   let chunk = array.slice(i,chunkSize+i)
   chunksArray.push(chunk);
 }
 return(chunksArray)
}

export {
  chunkArrayInGroups,
};
