#!/usr/bin/env bash
cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
python3 -mwebbrowser http://127.0.0.1:4000/gridster-jekyll-theme/

# bundle exec jekyll serve --profile --incremental --drafts
bundle exec jekyll build --trace