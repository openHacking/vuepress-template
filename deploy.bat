# deploy gh-pages
npm run docs:build
git add docs/.vuepress/dist
git commit -m "Initial dist subtree commit"
git subtree push --prefix docs/.vuepress/dist origin gh-pages