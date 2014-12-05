.PHONY: doc
doc:
	cat ./parts/* > api.md

.PHONY: deps
deps:
	npm install

.PHONY: render
render: doc deps
	./node_modules/.bin/aglio -i api.md -o redbooth-api-v3.html