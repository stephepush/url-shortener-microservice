const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'shortenedLinks.json'
);

const arrayFetchHelper = cb => {

    fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                cb(JSON.parse(fileContent))
            }
        })
        //return links
}

module.exports = class ShortenedLink {

    constructor(url, cutUrl) {
        this.id = ShortenedLink.incrementId()
        this.url = url;
        this.cutUrl = cutUrl

    }

    save() {
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'shortenedLinks.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let links = []
            if (!err) {
                links = JSON.parse(fileContent)
            }
            links.push(this)
            fs.writeFile(p, JSON.stringify(links), (err) => { console.log(err) })
        })
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
            return this.latestId
    }

    static fetchAll(cb) {
        arrayFetchHelper(cb)
    }
}