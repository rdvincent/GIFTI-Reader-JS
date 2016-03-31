
/*jslint browser: true, node: true */
/*global require, module */

"use strict";

/*** Imports ***/

var gifti = gifti || {};



/*** Static Pseudo-constants ***/

gifti.ATT_KEY = "Key";
gifti.ATT_RED = "Red";
gifti.ATT_GREEN = "Green";
gifti.ATT_BLUE = "Blue";
gifti.ATT_ALPHA = "Alpha";



/*** Constructor ***/

/**
 * The Label constructor.
 * @constructor
 * @param {object} attributes
 * @property {string} key
 * @property {number} r
 * @property {number} g
 * @property {number} b
 * @property {string} a
 * @property {number} label
 * @type {Function|*}
 */
gifti.Label = gifti.Label || function (attributes) {
    this.key = attributes[gifti.ATT_KEY];
    this.r = parseFloat(attributes[gifti.ATT_RED]);
    this.g = parseFloat(attributes[gifti.ATT_GREEN]);
    this.b = parseFloat(attributes[gifti.ATT_BLUE]);
    this.a = parseFloat(attributes[gifti.ATT_ALPHA]);
    this.label = null;
};



/*** Exports ***/

var moduleType = typeof module;
if ((moduleType !== 'undefined') && module.exports) {
    module.exports = gifti.Label;
}