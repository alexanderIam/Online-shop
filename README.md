# Online-shop
React/Node.js online shop
## 1. Clone project
Run command:<br />
`git clone git@github.com:alexanderIam/Online-shop.git`<br />
`cd Online-shop`<br />
## 2. First you need install nodejs
On Windows:<br />
Visit the official node.js site https://nodejs.org/en/download/ and click on Windows installer to download the necessary software in your system. The installer contains the NPM package. Based on the system you want to install, choose 32-bit installer or 64-installer and proceed.<br />
On Ubuntu:<br />
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
## 3. Docker installation (your need to install docker and docker-compose)
a) Manual for Windows (install Docker Desktop) <br />
https://docs.docker.com/desktop/install/windows-install/<br />
b) Manual For Ubuntu (you may install Desktop or docker and docker-compose separately)
https://docs.docker.com/engine/install/ubuntu/<br />
https://www.youtube.com/watch?v=6j1ISxY5ss4<br />
Ubuntu Docker desktop installation:<br />
https://www.youtube.com/watch?v=Vplj9b0L_1Y&t=245s<br />
## 4. Run 2 docker containers (pgAdmin and postgres)
Run command from (/Online-shop folder) where exists docker-compose.yaml<br />
login and passwords see in docker-compose.yaml for postgres and pgAdmin <br />
On Ubuntu:<br />
`sudo systemctl start docker`<br />
`sudo docker-compose up -d`<br />
### 5. Go to http://localhost:5050 and enter:
`login: test@gmail.com`<br />
`password: Qwerty12345`<br />
### 6. Register server after getting on pgadmin dashboard:
`name: postgres` or anything you want<br />
Fill Connection tab:<br />
`Hostname/address: postgres`<br />
`port: 5432`<br />
`username: postgres`<br />
`password: Qwerty12345`<br />
### 7. Create database postgres
Create database with name:<br />
`postgres`<br />
Start server from (/server folder)<br />
`npm run dev`<br />
Tables created after start<br /> 
Stop running server<br />
`Ctrl+C`<br />
Run migrations from (/Online-shop folder) and fill data:<br />
`npx sequelize-cli db:seed:all`<br />
### 8. Start client
Start client from (/client folder)<br />
`npm start`<br />