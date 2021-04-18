#!/usr/bin/env bash

cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Starting in $(pwd)"

# get the base url from the _config.yml file
baseurl_line=$(grep -R "baseurl" "_config.yml" | tail -n1)

echo "Found baseurl configuration line in _config.yml file:"
echo $baseurl_line

# get only the second parameter, not the keyword, and not any comments
baseurl=$(echo "$baseurl_line" | awk '{ print $2 }' )

# remove all slashes; we'll add our own later.  note multiple subdirectory depth not supported
baseurl=$(echo "$baseurl" | tr -d / )

echo "Using a value of baseurl=$baseurl"

SITE_DIR="$(pwd)/_site/"

# Optional prompt to delete files in _site directory (yes, I've seen cached files get seemingly stuck there!')
read -p "Delete files in $SITE_DIR? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] &&  if [ -d "$SITE_DIR" ]; then rm -Rf $SITE_DIR; fi

echo "launching browser for baseurl=$baseurl found in_config.yml"
python3 -mwebbrowser http://127.0.0.1:4000/$baseurl/
bundle exec jekyll serve --profile --incremental --drafts

