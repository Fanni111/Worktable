#!/bin/bash
echo "mvn -N io.takari:maven:wrapper"
echo "./mvnw install -DskipTests=true -Dmaven.javadoc.skip=true -B -V"
echo "./mvnw test -B"
exit 0