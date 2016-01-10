#!/bin/bash

# Create temporary directory

tmpdir=$(mktemp -d)
#echo $tmpdir

mkdir ${tmpdir}/css
mkdir -p ${tmpdir}/compiled/min

# Copy the latest build to it

cp resources/public/*.html "$tmpdir"
cp resources/public/css/* "$tmpdir"/css
cp resources/public/compiled/min/om_next_datascript_localisation_demo.js "$tmpdir"/compiled/min/om_next_datascript_localisation_demo.js

# Switch to the gh-pages branch
git checkout gh-pages

# Remove the old sources
git rm -rf *.html css compiled

# Copy the build into it
cp -R "$tmpdir"/* .
rm -rf "$tmpdir"

# Determine the latest commit in master
commit=$(git log -n1 --format="%H" master)

# Create a new commit from the new sources
git add .
git commit -a -m "Update to $commit"

# Push gh-pages to GitHub
git push origin gh-pages:gh-pages

# Switch back to master
git checkout master
