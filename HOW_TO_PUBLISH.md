# How to publish a new version of this package

* Develop your new feature
* run the command `npm version <major|minor|patch>`
* Merge and/or push your changes on master branch
* To publish the package on NPM, you need trigger a GitHub Action workflow. To trigger the workflow you need to create a release under "Releases" section of your repo - note that a release is not the same as a tag!