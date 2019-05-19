  echo "Publishing javadoc..."

  #cp -R target/site/apidocs $HOME/apidocs

  cd $HOME
  echo $HOME
    git config --global user.email "marthipeti1996@gmail.com"
    git config --global user.name "peti_marthi"
  #git clone --quiet --branch=master https://${GH_TOKEN}@github.com/gelin/gelin.github.io gh-pages > /dev/null

  cd gh-pages
  
  git rm -rf ./doc/backend
  mkdir -p ./doc/backend
  javadoc -private -d "./doc/backend" -sourcepath src/main/java -subpackages .
  git add -f .
  git commit -m "Latest javadoc on successful travis build $TRAVIS_BUILD_NUMBER"
  git push -fq origin master


javadoc -private -d "./doc/backend" -sourcepath src/main/java -subpackages .

  echo "Published Javadoc to gh-pages."

  return 0