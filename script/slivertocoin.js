var ak = $prefs.valueForKey("tk");
var url = "https://api.live.bilibili.com/pay/v1/Exchange/silver2coin?access_key="+ak;
var method = "POST";
var headers = {"Content-Type": "application/x-www-form-urlencoded","User-Agent": "bili-universal/9290 CFNetwork/1121.2.2 Darwin/19.3.0 os/ios model/iPhone 7 mobi_app/iphone osVer/13.3.1 network/1",};
var myRequest = {
    url: url,
    headers:headers,
    method: method, // Optional, default GET.
};
$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    var result = JSON.parse(response.body)
    var msg = result.msg
    $notify("📺银瓜子自动换硬币","",msg); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});
