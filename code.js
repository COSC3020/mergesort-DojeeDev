// may be helpful : 
// https://www.maxgcoding.com/in-place-merge-sorting
function mergesort(arr) {
  console.log(arr.length);
  for (var j = 1; j < arr.length; j *= 2) { 
    console.log(j + " => " + (j*2));
    for (var m = 0; m < arr.length-1; m += (2*j)) {
      var start = m;
      var end = Math.min(m + j, arr.length-1);

      while (start < end && end < Math.min((m + (2*j), arr.length)) ) {
        // compare
        if ( arr[start] <= arr[end] ) {
          start += 1;
        }
        else {
          var tmp = arr[start] 
          arr[start] = arr[end] 

          for (var s = end; s > start; s--) {
            arr[s] = arr[s-1];
          }
          arr[start+1] = tmp;
          end++;
        }
      }
    }
  }
  return arr;
}

function isSorted(a) {
  for (var i = 1; i < a.length; i++) {
    if (a[i-1] > a[i]) { 
      console.log(a[i-1] + " > " + a[i]);
      return false; 
    }
  }
  return true;
}

var a = Array.from({length: 32}, () => Math.floor(Math.random() * 40));
console.log(a);
console.log(mergesort(a));
if (!isSorted(a)) { console.log("NOT SORTED RIGHT") };
console.log(mergesort([2,4,2,4,1,3,8,]));
