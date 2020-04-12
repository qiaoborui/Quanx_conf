var url = $request.url
var acckey = url.match(/access_key=(.*?)&/)[1]
$prefs.setValueForKey(acckey, "tk")
console.log(acckey)

let body = $response.body
body=JSON.parse(body)

var tab = body['data']['tab']
var top = body['data']['top']
var bottom = body['data']['bottom']
bottom.splice(2,2)
top.splice(0,1)
delete tab[1].default_selected
tab[3]["default_selected"]=1
tab.splice(5,3)
//console.log(tab)
body=JSON.stringify(body)
$done({body}) 
