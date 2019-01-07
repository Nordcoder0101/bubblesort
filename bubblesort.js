function bubbleSort(arr){
  for (var i = 1; i < arr.length; i ++){
    for (var j = 0; j < arr.length; j++){
      if (arr[i] < arr[j]){
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
}

bubbleSort([2,3,6,1,9,4])