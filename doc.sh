#!/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update doc"
git push
# git checkout - 回去之前的分支
git checkout -
