'use strict'

const AbstractMethodCallError = require(__dirname + '/../errors/abstractMethodCallError')

/** 
 * A Search interface
 */
module.exports = class Search {
    constructor() {
        if (this.constructor === Search)
            throw new AbstractMethodCallError();
    }

    /**
     * Find picture meta data by imageId
     * @param {String} imageId
     * @returns {Promisse<String>} return promisse containing image meta data
     */
     findByImageId(imageId) {
         throw new AbstractMethodCallError();
     }

}