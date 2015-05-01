// server/smtp.js
Meteor.startup(function () {
    smtp = {
        username: 'info@forsk.ru',   // eg: server@gentlenode.com
        password: 'TXs2QDdfHl',   // eg: 3eeP1gtizk5eziohfervU
        server:   'forsk.ru',  // eg: mail.gandi.net
        port: 587
    }
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
