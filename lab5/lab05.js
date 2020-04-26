let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref)
function showWindowHref(){
    function getename() {
        var name;
        var string1 =url.value.split("?")[1];
        string2 = string1.split("&");
        for(var i = 0;i < string2.length;i++){
            string3 = string2[i].split("=");
            if(string3[0] == 'name')
            {
                name = string3[1];
                break;
            }
            else
                name = "没有name参数";
        }
        return name;
    }
    url_result.value = getename();

}
let mul = document.getElementById("mul");
window.onload = timeTest();
function timeTest(){
    mul.value = 1;
    var count = 0;
    const final = window.setInterval(function () {
        count++;
        mul.value *= 2;
        if(new Date().getSeconds() == 0 || count >= 10){
            window.clearInterval(final);
        }
    },5000);
}
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    var string = most.value;
    var arr = string.split('');
    var newArr = [];
    var numArr = [];
    arr.forEach(function(element,index,array){
        var index1 = newArr.indexOf(element);
        if(index1==-1){
            newArr.push(element);
            numArr.push(1);
        }else{
            numArr[index1]++;
        }
    })
    console.log(arr,newArr,numArr);
    function sortNumber(a,b){
        return b-a;
    }
    var numArr1 = [].concat(numArr);
    numArr1.sort(sortNumber);
    var maxNum = numArr1[0];
    var index = numArr.indexOf(maxNum);
    var maxStr = newArr[index];
    result.value =  "The most character is:" + maxStr + " times:" + maxNum ;
}