let url = 'https://pixiv.mlyx.workers.dev/?api=pixiv'
$task.fetch({ url: "https://raw.githubusercontent.com/qiaoborui/Quanx_conf/master/script/slivertocoin.js" }).then(response => {
if (error){
$done({});
}
else {
headers['Authorization'] = `Bearer ${data}`
$done({headers})
}
});
