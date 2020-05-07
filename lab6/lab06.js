function testTime(){
    var count = -1;
    function add(){

        var value = 1/2;

        return function(){
            count++;
            value*=2;
            console.log(value);
        }
    };
    var fn =  add();
    const final = window.setInterval(function () {
        fn();
        if(new Date().getSeconds() == 0 || count >= 10){
            window.clearInterval(final);
            if(new Date().getSeconds()==0){
                console.log("已提前停止");
            }
        }
    },5000);
}
function testMail(telephone,mail) {
   var tele = !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(telephone));
var ma = !(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail));
if(tele == true & ma==true){
    console.log("The telephone is wrong and the mail is wrong!")
}
else if(tele == false & ma == true){
    console.log("The telephone is right and the mail is wrong!")
}
else if(tele == false & ma == false){
    console.log("The telephone is right and the mail is right!")
}
else if(tele == true & ma == false){
    console.log("The telephone is wrong and the mail is right!")
}
}
function testRedundancy(str) {
    function compare(value1,value2) {
        if(value1.charAt(0).toLowerCase() > value2.charAt(0).toLowerCase())
            return 1;
        else  if(value1.charAt(0).toLowerCase() < value2.charAt(0).toLowerCase())
            return -1;
        else  if(value1.charAt(0).toLowerCase() == value2.charAt(0).toLowerCase())
            return 0;
    }
    if (/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/.test(str)) {
        var string1 = str.toLowerCase();
        var array = str.split(/\s+/);
        var array1 = string1.split(/\s+/);
        var array3 = new Array();
        for (var i = 0; i < array1.length - 1; i++) {
            if (array1[i] == array1[i + 1]) {
                array3.push(array[i] + " " + array[i + 1]);
            }
        }
        array3.sort(compare);
        if(array3.length > 10){
            array3.length = 10;
        }
        var string6 = "Set { ";
        for(var i = 0;i < array3.length;i++){
            string6 = string6 + " " + "\'" + array3[i] + "\' ";
        }
        string6 += "}";
        console.log(string6);
    } else {
        console.log("输入的不是全英文语句");
    }

}
function testKeyBoard(wantInput, actualInput) {
        var x = 0;
        var array = new Array();
        var wantInput1 = wantInput.toLowerCase();
        var actualInput1 = actualInput.toLowerCase();
        for(var i = 0;i < wantInput.length;i++){
            if(wantInput1.charAt(i) == actualInput1.charAt(x)){
                x++;
            }
            else{
                array.push(wantInput1.charAt(i).toUpperCase());
            }
        }
        var set = new Set(array);

      var string7 = "Set { ";
        for(let a of set){
            string7 = string7 + "\'" + a + "\' ";
        }
        string7 += "}";
        console.log(string7);
    }
function testSpecialReverse(str) {
    var str1 = str.trim();
    var array = str1.split(/\s+/);
    array.reverse();
    var str2 = "";
    for(var i = 0;i < array.length;i++){
        str2 = str2 + " " + array[i];
    }
    var str3 = str2.trim();
    console.log(str3);

}


function twoSum(nums, target) {

}
function lengthOfLongestSubstring(str) {
    var lengthOfLongestSubstring = function(s) {
        const len = s.length;
        let hashMap = new Map();
        let start = 0;
        let end = 0;
        let maxLen = 0;
        while (end < len) {
            if (!hashMap.has(s[end])) {
                hashMap.set(s[end++], 1);
                maxLen = Math.max(maxLen, [...hashMap.keys()].length);
            } else {
                hashMap.delete(s[start++]);
            }
        }
        return maxLen
    };
    console.log( lengthOfLongestSubstring(str));
}
function Country() {

    this.name = "国家";

}
function  DevelopingCountry() {
Country.call(this);
}
DevelopingCountry.prototype = Object.create(Country.prototype);
DevelopingCountry.prototype.constructor = DevelopingCountry;
DevelopingCountry.prototype.sayHi = function () {
console.log("Hi,i am a developing country.");
}
function  PoorCountry() {
    Country.call(this);
}
PoorCountry.prototype = Object.create(Country.prototype);
PoorCountry.prototype.constructor = PoorCountry;
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
}
function  DevelopedCountry() {
    Country.call(this);
}
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function () {
    console.log("I am a Happy developed country.");
}


function text() {
    testTime();
    testMail("13138686936","657511029@qq.com");
testRedundancy("Is is IS add ADD en eN");
    testKeyBoard("7_This_is_a_test","_hs_s_a_es");
    testSpecialReverse("  hello  world!  ");
    lengthOfLongestSubstring("abfcdfabcdbb");
    var developing = new DevelopingCountry();
    var developed = new DevelopedCountry();
    var poor = new PoorCountry();
    developed.sayHappy();
    developing.sayHi();
    poor.saySad();
}
