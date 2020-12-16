#!/bin/sh

if [ -t 1 ]; then
	target="vfs_fonts.js"
else
	target="/dev/stdout"
fi

(
	echo "this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = {"
	for file in "$@"; do
		file=$1
		shift
		echo '  "'$(basename $file)'":"'$(base64 -b 0 $file)'"'
		if [ "$#" -gt 0 ]; then
			echo ","
		fi
	done
	echo "};"
) > "$target"
