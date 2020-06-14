两者都是用来进行会话控制的:就是为了我们在访问页面和页面之间的跳转，能够识别到你的登录状态，已经你的登录时长等

cookie可以用 setcookie() 或 setrawcookie() 函数来设置 cookie。

$_COOKIE就可以读取浏览器端的cookie.

session使用session_start()调用



Session的优缺点

优点

唯一性、方便调用、不会过多占用资源，是存储在服务器的一组临时数据。一般情况下，我们在做用户登录时，会将用户数据存入session。这样，在任何页面都可以方便
调用，而且每个客户端会产生唯一的session_id，不会混淆。并且在关闭浏览器后，服务器会有session回收机制，自动删除过期session。

缺点

在客户端是以cookie方式保存的，禁用cookie，session就失效了。

Cookie的优缺点

优点

不需要服务器资源空间，持久时间更长。

缺点

客户端大小受限制，用户禁用Cookie就失效了，不安全。

