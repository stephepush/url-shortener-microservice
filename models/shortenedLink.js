const links = []

module.exports = class ShortenedLink {
    constructor(id, url ){
        this.id = id;
        this.url = url;
    }

    save(){
        links.push(this)
    }

    static fetchAll(){
        return this.links
    }
}