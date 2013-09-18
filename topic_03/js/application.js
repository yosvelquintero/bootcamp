/**
 * Movie class
 */
var Movie = function Movie() {
    var title,
        actors = [];

    /**
     * setTitle
     * @param string str title name
     */
    this.setTitle = function (str) {
        this.title = str;
    };

    /**
     * getTitle
     * @return string title name
     */
    this.getTitle = function () {
        return this.title;
    }

    /**
     * set I don't like to name a method like this :(
     * @param string title
     * @param string str   title name
     */
    this.set = function (title, str) {
        if ('title' == title) {
            return this.setTitle(str);
        }

        return console.log('First argument "title" is incorrect!!');
    }

    /**
     * play
     * @return string message info
     */
    this.play = function () {
        return this.output('playing "'  + this.getTitle() + '"...');
    };

    /**
     * stop
     * @return string message info
     */
    this.stop = function () {
        return this.output('stopped');        
    };

    /**
     * isValidTitle
     * @return boolean true/false
     */
    this.isValidTitle = function () {
        return typeof this.title != 'undefined';
    }

    /**
     * output Movie class output
     * @param  string str
     * @return string     [description]
     */
    this.output = function (str) {
        if (this.isValidTitle()) {
            return console.log(str);
        }

        return console.log('Movie title is undefined!!');
    }
};


/**
 * download method, that extends Movie class
 * @return void [description]
 */
Movie.prototype.download = function() {
    return this.output('This is the method "download" that extends from Movie.');
};


//---------------------------------------------------------------------------------------------------------


/**
 * asSocial: 9. Create a mixin object called Social with the methods: share(friendName) and like().
 * @return Social Object
 */
var asSocial = function() {

    /**
     * share
     * @param  string friendName
     * @return string
     */
    this.share = function(friendName) {
        return this.like() + this.title + ' with '  + friendName + '!!';
    };

    /**
     * like
     * @return string
     */
    this.like = function() {
        return 'Sharing ';
    }

    return this;
};

var Social = function(friendName) {
    this.friendName = friendName;
};

asSocial.call(Social.prototype);
asSocial.call(Movie.prototype);

// var social1 = new Social('Cuco');
// social1.share(); // I like this Cuco!!


//---------------------------------------------------------------------------------------------------------

var Actor = function Actor() {

    this.addActor = function (name) {
        this.actors.push(name);
    }
}

Actor.call(Movie.prototype);
