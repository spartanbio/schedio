#!/bin/bash
# Stops accidental commits/pushes to master and develop.

BRANCH=`git rev-parse --abbrev-ref HEAD`

# pick which git config variables to get
if ${SWITCHY-false}; then
    config=user.work
else
    config=user
fi

# skip hook if `semantic-release` running
bypass_user="@semantic-release-bot"
current_user=$(git config --get $config.name)

if [[ $current_user == $bypass_user ]]; then
  echo "Running as @semantic-release-bot"
  exit 0
fi

# Verify commit to `master`
if [[ "$BRANCH" == "master" ]]; then
  echo "You are on branch $BRANCH. You shouldn't be working on this branch"
  exit 1
fi

exit 0
