### Install LST
```sh
sudo apt-get autoremove nodejs
sudo apt-get install libavahi-compat-libdnssd-dev

sudo mkdir ~/.nvm
sudo chmod 777 ~/.nvm

git clone https://github.com/creationix/nvm.git ~/.nvm
source ~/.nvm/nvm.sh

nvm ls-remote
nvm install v8.11.1

node --version
npm --version
```

### Usage
```
npm install
node main.js
```

### Fix
- https://github.com/noelportugal/google-home-notifier/blob/master/README.md#after-npm-install
- main.js
```
googlehome.device('Google-Home-xxx', language); // Change to your Google Home name
```
