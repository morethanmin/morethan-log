# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Development environment setup

To set up a development environment, please follow these steps:

1. Clone your repo

   ```sh
   git clone [YOUR_REPOSITORY_URL]
   ```

2. Install all the packages.

   ```sh
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables.

   ```sh
   NOTION_PAGE_ID = "YOUR_NOTION_PAGE_ID"
   ```

4. Start the development Server.

   ```sh
   yarn dev
   ```

### Use Dockerfile
1. Run setup command
   ```sh
   make setup NOTION_PAGE_ID='YOUR_NOTION_PAGE_ID'
   ```

2. Start the development Server.
   ```sh
   make dev
   ```

3. Open `localhost:8001` in your browser.

### Commit message rules

Consider following the below format for the commit message:

Commit Type : `feat|fix|perf|refactor|test|ci|docs|build|chore`

**Examples**

- feat: when create new feature.
- style: when styling a this application.
- fix: when fixing a bug.

## Issues and feature requests

You've found a bug in the source code, a mistake in the documentation or maybe you'd like a new feature? You can help us by [submitting an issue on GitHub](https://github.com/morethanmin/morethan-log/issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

If you have any great ideas of Feature Request, please avoid adding it to the Issues section in Github and instead [start a new Discussion on Github](https://github.com/morethanmin/morethan-log/discussions/categories/ideas). This allows the maintainers and the member a common place to discuss about the Request. Make sure to check if your request or idea has already been discussed or closed to avoid duplication.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Search our repository for open or closed [Pull Requests](https://github.com/morethanmin/morethan-log/pulls) that relate to your submission. You don't want to duplicate effort.
2. Fork the project.
3. Create your feature branch (`git checkout -b feat/amazing_feature`).
4. Commit your changes (`git commit -m 'feat: add amazing_feature'`). Please follow the specification mentioned above for your commit messages.
5. Push to the branch (`git push origin feat/amazing_feature`).
6. [Open a Pull Request](https://github.com/morethanmin/morethan-log/compare?expand=1).
7. Make sure to fill in the all the details in the Pull Request to make it easier for the reviewers. Make sure to refer to any discussion or Issues that your PR is fixing.
