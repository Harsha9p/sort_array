 function rearrange(arr, n)
{
    let temp = new Array(n);
    let small = 0, large = n - 1;
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (flag)
            temp[i] = arr[large--];
        else
            temp[i] = arr[small++];
 
        flag = !flag;
    }
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}
    let arr = [2,4,6,8,10];
    let n = arr.length;
    document.write("Original Array");
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
    rearrange(arr, n);
    document.write("Modified Array");
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
 
