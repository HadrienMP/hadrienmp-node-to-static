rm -rf dist
mkdir -p dist/css dist/js dist/img
cp public/css/* dist/css
cp public/img/* dist/img
cp public/js/* dist/js
cd dist || exit
#wget http://0.0.0.0:3000
curl http://0.0.0.0:3000 > index.html