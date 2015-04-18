Код в директории ‘/server’ исполняется только на сервере
Код в директории ‘/client’ исполняется только на клиенте
Все остальные файлы исполняются и на клиенте, и на сервере
Файлы в директории ‘/lib’ загружаются самыми первыми
Все файлы с именем ‘main.*’ загружаются самыми последними
Статичные файлы (картинки, шрифты и т.п.) - в директории /public

npm -g xlsx

====
Меняем цвет приложения:
1) выбираем http://materializecss.com/color.html
2) cd public/css
3) правим custom.less
4) lessc custom.less > material-custom.css

====
Установка и деплой через mup
https://github.com/arunoda/meteor-up#installation

sudo adduser admin  sudo

sudo nano /etc/sudoers.d/admin

# replace this line
admin   ALL=(ALL)       ALL

# by this line
admin   ALL=(ALL)      NOPASSWD:ALL

sudo service sudo restart

mup setup mup deploy

setup nginx:

server {
    listen      128.199.60.8:80;
    server_name p.kellot.ru www.p.kellot.ru;
    error_log  /var/log/apache2/domains/p.kellot.ru.error.log error;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $remote_addr;
    }

    location ~ /\.ht    {return 404;}
    location ~ /\.svn/  {return 404;}
    location ~ /\.git/  {return 404;}
    location ~ /\.hg/   {return 404;}
    location ~ /\.bzr/  {return 404;}

    include /home/admin/conf/web/nginx.p.kellot.ru.conf*;
}

setup dns record p.kellot.ru

vagrant: 
1) Install vagrant 
2) git clone git@bitbucket.org:kafeg/kellot.git
3) vagrant up 
4) cd /home/vagrant/ && meteor create kellot 
5) echo 'sudo mount --bind /home/vagrant/kellot/.meteor/ /vagrant/.meteor/' >> /home/vagrant/.bashrc
6) vagrant reload
7) Add Start-Vagrant to autostart via regedit
