module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    '@semantic-release/gitlab',
    [
      '@semantic-release/git',
      {
        assets: ['dist', 'package.json', 'package-lock.json', 'CHANGELOG.md']
      }
    ]
  ]
}
