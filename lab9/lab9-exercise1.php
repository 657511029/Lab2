<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear
$a = date("Y");
$c = date("z");
$b = 0;
if($a%100==0){//判断世纪年
    if ($a%400==0&&$a%3200!=0){
       $b = 366;//世纪年里的闰年
    }
    else{$b = 365;}
}
else{//剩下的就是普通年了
    if($a%4==0&&$a%100!=0){
        $b = 366;//普通年里的闰年
    }
    else {$b = 365;}
}
$d = $b - $c;
echo "There are ". $d . " days left in the year";//notice we must echo tags in php.

?>
</body>
</html>