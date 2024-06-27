import chalk from 'chalk';
import { demunge, Policy } from 'snyk-policy';
import config from './config';

export async function display(policy: Policy): Promise<string> {
  const p = demunge(policy, apiRoot);
  const delimiter = '\n\n------------------------\n';

  let res =
    chalk.bold(
      'Current Snyk policy, read from ' + policy.__filename + ' file',
    ) + '\n';
  res += 'Modified: ' + policy.__modified + '\n';
  res += 'Created:  ' + policy.__created + '\n';

  res += p.patch.map(displayRule('Patch vulnerability')).join('\n');
  if (p.patch.length && p.ignore.length) {
    res += delimiter;
  }

  res += p.ignore.map(displayRule('Ignore')).join('\n');
  if (p.ignore.length && p.exclude.length) {
    res += delimiter;
  }

  res += p.exclude.map(displayRule('Exclude')).join('\n');

  return Promise.resolve(res);
}

function displayRule(title: string): (rule: any, i: number) => string {
  return (rule, i) => {
    i += 1;

    const formattedTitle =
      title === 'Exclude'
        ? chalk.bold(`\n#${i} ${title}`) +
          ` the following ${chalk.bold(rule.id)} items/paths:\n`
        : chalk.bold(`\n#${i} ${title} ${rule.url}`) +
          ' in the following paths:\n';

    return (
      formattedTitle +
      rule.paths
        .map((p) => {
          return (
            p.path +
            (p.reason
              ? '\nReason: ' +
                p.reason +
                '\nExpires: ' +
                p.expires.toUTCString() +
                '\n'
              : '') +
            '\n'
          );
        })
        .join('')
        .replace(/\s*$/, '')
    );
  };
}

function apiRoot(vulnId: string) {
  const match = new RegExp(/^snyk:lic/i).test(vulnId);
  if (match) {
    return config.PUBLIC_LICENSE_URL;
  }
  return config.PUBLIC_VULN_DB_URL;
}
