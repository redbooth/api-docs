[Redbooth](https://redbooth.com/) is a total online collaboration solution with all of the features you need to manage projects effectively from anywhere.

This is the official [Redbooth API](https://redbooth.com/api/api-docs/) documentation repository.

## Contributing

To contribute to the documentation please fork this repo, make your changes and then do a pull request.
Documentation is on [parts folder](https://github.com/teambox/api-v3-docs/tree/master/parts). You just need to change the apropiate markdown file

## Rendering the documentation
1. Install <a href="http://nodejs.org/" target="_blank">node</a> `brew install node`.
2. Install <a href="http://gulpjs.com/" target="_blank">Gulp</a> `npm install --global gulp`
3. Fork this repo
4. Once forked and cloned go to root folder and run: `make render`
5. Now run `gulp`
6. Go to your browser to `http://localhost:8080`
7. Done

## Compile to production
If you want to generate the production version of this docs you can do
it with this command:

```shell
gulp build-production --env production
```

## License

Copyright 2014 Redbooth, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
