=== Meteor ===

Каталоги:
- Код в директории ‘/server’ исполняется только на сервере
- Код в директории ‘/client’ исполняется только на клиенте
- Все остальные файлы исполняются и на клиенте, и на сервере
- Файлы в директории ‘/lib’ загружаются самыми первыми
- Все файлы с именем ‘main.*’ загружаются самыми последними
- Статичные файлы (картинки, шрифты и т.п.) - в директории /public

=== Material Design ===
Обновление:
1) Вручную качаем архив с https://github.com/FezVrasta/bootstrap-material-design
2) Копируем всё из папки dist к нам в проект в public

Не используем бовер и пакет метеора потому что они слишком глючат. Обновлено 20.04.15

Меняем цвет приложения:
1) выбираем http://materializecss.com/color.html
2) cd public/css
3) правим custom.less
4) lessc custom.less > material-custom.css

=== Настройка сервера ===

Установка и деплой через mup: https://github.com/arunoda/meteor-up#installation

Сервер:
1) sudo adduser admin  sudo
2) sudo nano /etc/sudoers.d/admin

# replace this line
admin   ALL=(ALL)       ALL

# by this line
admin   ALL=(ALL)      NOPASSWD:ALL

3) sudo service sudo restart
4) У себя на клиенте: mup setup mup deploy

nginx на сервере:

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

Локально настраиваем ДНС запись p.kellot.ru, иначе сервисы авторизации будут ругаться.

vagrant: 
1) Install vagrant 
2) git clone git@bitbucket.org:kafeg/kellot.git
3) vagrant up 
4) cd /home/vagrant/ && meteor create kellot 
5) echo 'sudo mount --bind /home/vagrant/kellot/.meteor/local/db /vagrant/.meteor/local/db' >> /home/vagrant/.bashrc
6) sudo chmod 777 -R /vagrant/
7) vagrant reload
8) Add Start-Vagrant to autostart via regedit

RUN:
ROOT_URL=http://p.kellot.ru:3000 meteor --settings mup/settings.json