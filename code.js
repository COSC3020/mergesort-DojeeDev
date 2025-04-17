function mergesort(arr) {
  for (var j = 1; j < arr.length; j *= 2) { 
    for (var m = 0; m < arr.length-1; m += (2*j)) {
      var start = m;
      var end = Math.min(m + j, arr.length-1);

      while (start < end && end < (Math.min((m + (2*j)), arr.length)) )  {
        // compare
        if ( arr[start] <= arr[end] ) {
          start += 1;
        }
        else {
          //swap
          var tmp = arr[start] 
          arr[start] = arr[end] 
          
          //shift
          for (var s = end; s > start; s--) {
            arr[s] = arr[s-1];
          }
          //finish swap
          arr[start+1] = tmp;
          //move pointers
          start++;
          end++;
        }
      }
    }
  }
  return arr;
}
