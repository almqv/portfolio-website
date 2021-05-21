#!/usr/bin/bash

files=$(ls $PWD)

for f in $files; do
	echo Converting $f...
	convert $f $f.jpeg
done
