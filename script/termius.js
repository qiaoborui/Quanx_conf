const res = JSON.parse($response.body);
res.account = {
  ...res.account,
  plan_type: "Premium",
  user_type: "Premium",
  current_period: {
    from: "2020-03-08T04:56:22",
    until: "2030-03-22T04:56:22"
  }
};
res.trial = null
$done(JSON.stringify(res));
