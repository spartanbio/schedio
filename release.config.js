module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/gitlab',
      {
        assets: [
          'dist',
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'yarn.lock',
          'CHANGELOG.md',
          '.jest-test-results.json',
        ],
      },
    ],
  ],
}
