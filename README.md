# `@candrewsintegralblue/snyk`

`@candrewsintegralblue/snyk` is a fork of [`snyk`](https://www.npmjs.com/package/snyk) that adds a new subcommand, `client-sbom`, that creates an SBOM (Software Bill of Material) of the project being scanned entirely client side - there is no communication with the Snyk API, therefore no Snyk credentials are required and no network access is required.

[The SBOM creation feature has been submitted via merge request to Snyk](https://github.com/snyk/cli/pull/3983) for inclusion in the official package, but so far, it hasn't been merged or included in any releases.

[Snyk added an `sbom` command](https://docs.snyk.io/snyk-cli/commands/sbom) in [v1.1071.0](https://github.com/snyk/cli/releases/tag/v1.1071.0). However, this command generates the sbom on the Snyk server and requires an Enterprise plan to use. Therefore, this client side approach to generating the sbom is still valuable.

For background on why this improvement is a very useful enhancement to Snyk, see [Creating SBOMs with the Snyk CLI](https://candrews.integralblue.com/2022/10/creating-sboms-with-the-snyk-cli/).

For more information on how to use this feature, see the built in help: `npx @candrewsintegralblue/snyk client-sbom --help`
