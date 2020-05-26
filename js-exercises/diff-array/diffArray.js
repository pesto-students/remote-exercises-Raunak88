function diffArray(arr1, arr2) {
  var symmetricDiffArray=[]
  let diffOfArr1FromArr2  = arr1.filter(x=>(arr2.indexOf(x)<0))
  let diffOfArr2FromArr1 = arr2.filter(x=>(arr1.indexOf(x)<0))
  symmetricDiffArray=[...diffOfArr1FromArr2,...diffOfArr2FromArr1] 
  return symmetricDiffArray
}

export {
  diffArray,
};

