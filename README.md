# griffwerkprototype

## enabling node with apache (my digitialocean VM)
### Resources
https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-ubuntu-16-04

    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod proxy_balancer
    sudo a2enmod lbmethod_byrequests
    sudo systemctl restart apache2  

* Edting `etc/apache2/sites-available/000-default.conf`

        <VirtualHost *:80>
            ProxyPreserveHost On

            ProxyPass /node http://localhost:3000/
            ProxyPassReverse /node http://localhost:3000/
        </VirtualHost>


## node.js specifics
* see `package.json` for specifics

        npm install --dev-start nodemon

* devscript

        npm devstart


## express.js 
* keep it running 

        pm2 list
        pm2 stop <index> 
        pm2 delete 0


