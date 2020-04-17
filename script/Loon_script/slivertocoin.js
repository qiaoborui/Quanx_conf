var ak = $persistentStore.read("tk");
var url = "https://api.live.bilibili.com/pay/v1/Exchange/silver2coin?access_key="+ak;
var headers = {"Content-Type": "application/x-www-form-urlencoded","User-Agent": "bili-universal/9290 CFNetwork/1121.2.2 Darwin/19.3.0 os/ios model/iPhone 7 mobi_app/iphone osVer/13.3.1 network/1",};
var myRequest = {
    url: url,
    headers:headers,
};
console.log(myRequest);
$httpClient.post(myRequest,function(error,response,data){
    console.log(data)
    var msg = JSON.parse(data).msg;
    $notification.post("银瓜子换硬币📺",msg,"")})
