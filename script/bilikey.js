var url = $request.url
var acckey = url.match(/access_key=(.*?)&/)[1]
$prefs.setValueForKey(acckey, "tk")
console.log(acckey)
