  echo "Publishing javadoc..."

  #cp -R target/site/apidocs $HOME/apidocs

  cd $HOME
  echo $HOME
    git config --global user.email "marthipeti1996@gmail.com"
    git config --global user.name "peti_marthi"
  #git clone --quiet --branch=master https://${GH_TOKEN}@github.com/gelin/gelin.github.io gh-pages > /dev/null

  cd gh-pages
  #git rm -rf ./travis-javadoc-test/apidocs
  #mkdir -p ./travis-javadoc-test/apidocs
  #cp -Rf $HOME/apidocs ./travis-javadoc-test
  #git add -f .
  #git commit -m "Latest javadoc on successful travis build $TRAVIS_BUILD_NUMBER auto-pushed to gh-pages"
  #git push -fq origin master > /dev/null

  echo "Published Javadoc to gh-pages."

  return 0