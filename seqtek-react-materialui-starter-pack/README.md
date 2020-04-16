# Verinovum Organization Manager

To get the project running

```sh
# install the required npm packages
npm install

# run the project
npm start
```

If you need to edit the project, and will be editing SASS files, you'll need to run the following in a new terminal window/tab

```sh
# in a new terminal window/tab
npm run watch-css
```

### Mock API Service

If you want to run the mock API service

```sh
# in a new terminal window/tab
# http://localhost:3004 will spin up
npm run mock-api
```

If you want to add/edit the API calls, the JSON file is located in the `./mock-api`

If you want to learn more about `interfake`, you can view the [Readme for on GitHub](https://github.com/basicallydan/interfake)

### Building The Project

```sh
# build the core project
npm run build

# compile SASS to CSS
npm run build-css
```

The build files are in the `./build` folder

### Additional Assets

If there is a need to add additional assets to the project (fonts, favicon, images, etc.), add them to the `./public` folder and link to them in `./public/index.html` or within the SASS files
