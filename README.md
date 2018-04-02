# error loading lib created with vue-cli

Creating a lib with `vue-cli` works with the demo, but importing into 
an app (also created by `vue-cli`) returns the following:

```
This dependency was not found:

* @jwc/alib1 in ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"D://src//temp//vue-cli-scoped-lib-issue//app1//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Home.vue

To install it, you can run: npm install --save @jwc/alib1
```

## Steps to reproduce

git clone https://github.com/johnwebbcole/vue-cli-scoped-lib-issue.git

cd vue-cli-scoped-lib-issue
cd lib1
npm i
npm run build
cd ..
cd app1
npm i
npm run serve
