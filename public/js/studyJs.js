/**
 * Created by JKL on 2017/3/19.
 */
function titleCase(str) {
    str = str.toLowerCase();
    var arr = str.split(/\s/);
    var arr2 = arr.map(function(val){
        var st = "";
        var valArr = val.split("");
        if(valArr.length>0){
            st = valArr.shift().toUpperCase();
        }
        if(valArr.length>0){
            st +=  valArr.join("");
        }
        return st;
    });
    return arr2.join(" ");
}

//console.log(titleCase("sHoRt AnD sToUt"));
function largestOfFour(arr) {
    var rtnArr = [];

    // You can do this!
    for(var i in arr){
        arr[i].sort(function (a,b) {
            return b - a;
        });
        rtnArr.push(arr[i][0])
    }
    return rtnArr;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//求数组的子数组和最大值
var arr = [-2,5,-8,13,-6,4,3,-8,6];
var total=0;

for(var i =0;i<arr.length;i ++){

    var sum = arr[i];
    if(sum>total){
        total = sum;
        console.log("single max");
    }
    for(var j =i+1;j<arr.length;j++){
        sum +=  arr[j];
        if(sum>total){
            total = sum;
            console.log("sum max i="+i+" ;j="+j);
        }
    }
}
console.log(total);