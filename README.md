# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Analysis

We can piggyback off of the analysis we did in class already of normal mergesort. In normal merge sort we make $\log_2 (n)$ splits, and then mergeing will take n time asymptotically. In total being $\Theta (n \log(n))$. In my merge sort it being iterative does not change the time complexity, it will still take log(n) time to do the "splits". However, since it's in place we have to shift the elements which will take in the worse case n/2 shifts per element. This gives us $\frac{n}{2} \cdot n \cdot \log_2(n) \in \Theta (n^2 \log(n))$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Note: Removed eslint as it was giving the following error.

```
Error: Cannot find module '/home/runner/work/mergesort-DojeeDev/mergesort-DojeeDev/node_modules/eslint/bin/eslint'
```

