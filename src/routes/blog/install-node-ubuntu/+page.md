---
title: Installing nodejs on Ubuntu or Debian from binaries
date: '2022-05-28'
excerpt: I got tired of looking up guides so I made my own
---

I have no clue why installing node is such a pain on linux, but it is and I was tired of constantly needing to look up guides so I wrote my own.

This is for installing node 18.2.0 and npm 8.9.0 which are the latest bundled versions as of writing. npm can be updated to 8.11.0 with `sudo npm i -g npm@latest`.

1) download and extract binary archive
```
wget https://nodejs.org/dist/v18.2.0/node-v18.2.0-linux-x64.tar.xz
tar -xf node-v18.2.0-linux-x64.tar.xz
```

2) move binaries into /usr/local/bin
```
cd node-v18.2.0-linux-x64/bin
sudo mv node npm npx /usr/local/bin
```

3) move libs into /usr/local/lib
```
cd ../lib
sudo mv node_modules/ /usr/local/lib
```

4) profit
```
node -v
> v18.2.0
npm -v
> 8.9.0
```

To update node download the latest archive from [nodejs.org](https://nodejs.org/en/download/current/), extract the archive, and move the node binary into /usr/local/bin/ again.

To update npm run `sudo npm i -g npm@latest`. This will update npm and npx.