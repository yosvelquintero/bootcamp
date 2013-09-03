/**
 * Movie object
 */
function Movie() {
    var title;

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

        return this.output('Incorrect argument title!!');
    }

    /**
     * play
     * @return string message info
     */
    this.play = function () {
        return this.output('Playing ' + this.getTitle() + '...');
    };

    /**
     * stop
     * @return string message info
     */
    this.stop = function () {
        return this.output('Stoped ' + this.getTitle() + '!!');        
    };

    /**
     * validate validate if title is defined
     * @return boolean true/false
     */
    this.validate = function () {
        return (typeof this.getTitle() != 'undefined') ? true : false;
    }

    /**
     * output Movie class output
     * @param  string str
     * @return string     [description]
     */
    this.output = function (str) {
        if (this.validated) {
            return console.log('Movie title is undefined!!')
        }

        return console.log(str);
    }
}