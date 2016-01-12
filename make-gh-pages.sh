#!/bin/bash
# this script makes the app, copies the app files to a temporary directory,
# switches to the gh-pages branch, deletes old files, copies the new files, deletes the temporary directory
# checks in new files, pushes the commit
# switches back to the master branch
# it is lifted from https://github.com/Jannis/om-next-kanban-demo/

# make sure the compiled files exist
lein cljsbuild once prod

# Create temporary directory
tmpdir=$(mktemp -d)
#echo $tmpdir

mkdir ${tmpdir}/css
mkdir ${tmpdir}/ico
mkdir ${tmpdir}/js

# Copy the latest build to it
cp resources/public/*.html "$tmpdir"
cp resources/public/css/* "$tmpdir"/css
cp -R resources/public/ico/* "$tmpdir"/ico
cp resources/public/compiled/prod/om_next_datascript_localisation_demo.js "$tmpdir"/js

# Switch to the gh-pages branch
git checkout gh-pages

# Remove the old sources
git rm -rf *.html css ico js

# Copy the build into it
cp -R "$tmpdir"/* .
rm -rf "$tmpdir"

# Determine the latest commit in master
commit=$(git log -n1 --format="%H" master)

# Create a new commit from the new sources
git add *.html css ico js
git commit -a -m "Update to $commit"

# Push gh-pages to GitHub
git push origin gh-pages

# Switch back to master
git checkout master
