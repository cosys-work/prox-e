#!/bin/bash

pusher() {
	git pull
	git push
}

checkouter() {
	git checkout "$1"
	pusher
}

syncer() {
	branches=( develop master feature/wizard feature/scheduler )
	for d in "${branches[@]}"
	do
		checkouter "$d"
	done
}

pusher
syncer

wait
echo "All branches are synced to develop ~~!"
