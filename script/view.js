var body = JSON.parse($response.body)
var note = body.data["qrcode_msg"]["qrcode_record"]["list_name"]
console.log(note)
$notify(note,"","")
$done(response.body)
