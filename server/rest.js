HTTP.methods({
    '/rest/list': function() {
        return '<b>Default content type is text/html</b>';
    },
    '/rest/walletone/success': function() {
        console.log(this.query, this.params, this.requestHeaders);
        return '<b>Wallet one success =)</b>';
    },
    '/rest/walletone/fail': function() {
        console.log(this.query, this.params, this.requestHeaders);
        return '<b>Wallet one failed =(</b>';
    },
    '/rest/walletone/ssl': function() {
        var key = '316d734c374a4a5a515f614e473831506e57493650595e4834617c';
        console.log(this.query, this.params, this.requestHeaders);
        return '<b>checking md5 hash!</b>';
    },
});


