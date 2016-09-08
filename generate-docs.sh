#!/bin/bash
git clone https://github.com/pradel/node-social-api
cd node-social-api
npm i
npm run build:docs
mv docs/* ../
cd ..
version=$(node -p "require('./node-social-api/package.json').version" 2>/dev/null) ||
  (echo "Cannot read package version" >&2 ; exit 1)
rm -rf node-social-api
git add .
git commit --message $version
git push origin gh-pages
git checkout master
