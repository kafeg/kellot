if (ServiceConfiguration.configurations.find().count() === 0) {
    //Vkontakte
    ServiceConfiguration.configurations.insert({
        service: 'vk',
        appId:   '4797182',
        secret:  'ONKAKJToaHM2o6ek0BPs',
        scope:   'Kellot'
    });

    //Google
    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId:   '133331659032-5aoc9mclr2hp3bt3p1rss7suab6ul3pf.apps.googleusercontent.com',
        secret:  'lkW4UXBft8xsrTt5qWtS3uV9'
    });

    //Facebook
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId:   '949050751780485',
        secret:  '52eeea92e35c57420dbd1761b182b2e9'
    });

    //Twitter
    ServiceConfiguration.configurations.insert({
        service: 'twitter',
        consumerKey:   '82W3qRot0DlfQ8KoUb0p5oFQU',
        secret:  'S12c47FhyBCcfCj36TcP4bTi3EwkrovQseqj2uqAvjB9niyrRq'
    });

    //MailRu
    ServiceConfiguration.configurations.insert({
        service: 'mailru',
        appId:   '730606',
        secret:  'baa1ee6f29eef85584a2bea50a1d5215'
    });
}
