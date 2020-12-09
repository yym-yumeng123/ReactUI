yarn doc
git checkout gh-pages
git merge master
mv -f doc/* ./
git add .
git commit -m "update doc"
git push
git checkout -
