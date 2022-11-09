# `@candrewsintegralblue/snyk`

`@candrewsintegralblue/snyk` is a fork of [`snyk`](https://www.npmjs.com/package/snyk) that adds a new subcommand, `sbom`, that creates an SBOM (Software Bill of Material) of the project being scanned.

[The SBOM creation feature has been submitted via merge request to Snyk](https://github.com/snyk/cli/pull/3983) for inclusion in the official package, but so far, it hasn't been merged or included in any releases.

For background on why this improvement is a very useful enhancement to Snyk, see [Creating SBOMs with the Snyk CLI](https://candrews.integralblue.com/2022/10/creating-sboms-with-the-snyk-cli/).

For more information on how to use this feature, see the built in help: `npx @candrewsintegralblue/snyk sbom --help`