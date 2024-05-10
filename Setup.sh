cd server
npm install
cp .env.example .env 

echo "NODE_ENV=development" > .env
echo "CLIENT_PROD_URL=http://localhost:3000" >> .env
echo "DB_URL=mongodb://localhost:27017" >> .env
echo "REDIRECT_URL=http://localhost:8080" >> .env
echo "Port=8080" >>.env

cd ..

cd client
npm install
echo "REACT_APP_SERVER=http://localhost:8080" > .env

cd ..


cd client
npm start
