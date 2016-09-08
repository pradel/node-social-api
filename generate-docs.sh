#!/bin/bash
git clone https://github.com/pradel/node-social-api
mv node-social-api/.gitignore .
mv docs/* .
version=$(node -p "require('./node-social-api/package.json').version" 2>/dev/null) ||
  (echo "Cannot read package version" >&2 ; exit 1)
rm -rf node-social-api
git add .
git commit --message $version
git push origin gh-pages
git checkout master
