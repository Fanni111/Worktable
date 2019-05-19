#!/bin/bash
eval "mvn -N io.takari:maven:wrapper"
eval "./mvnw install -DskipTests=true -Dmaven.javadoc.skip=true -B -V"
eval "./mvnw test -B"
exit 0