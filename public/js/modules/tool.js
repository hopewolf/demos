'use strict';

var util = {
    cashe : function () {
        var data = {};

        return {
            set : function (name, value) {
                data[ name ] = value;
            },
            get : function (name) {
                return data[ name ];
            },
            rm : function (name) {
                delete data[ name ];
            }
        };
    },
    regexp : function () {
        return {
            mail : /^([a-z0-9]+[\-|\_|\.]*[\w]*@[a-z0-9\-]+(\.[a-z]{2,3}){1,2})$/i
        }
    },
    cookieToObject : function (str) {
        var obj = {};
        var arr = str.split( '; ' );
        for( var i = 0; i < arr.length; i++ ){
            var aCookie = arr[i].split( '=' );
            obj[ aCookie[0] ] = aCookie[1];
        }
        return obj;
    },
    getType : function () {
        var pathname = window.location.pathname;
        var type = '';

        if( pathname.indexOf('/js/') === 0 ) type = 'js';
        if( pathname.indexOf('/html/') === 0 ) type = 'html';

        return type;
    },
    getID : function () {
        var id = '';
        var pathname = window.location.pathname;
        if( pathname.indexOf('/js/') === 0 ) id = pathname.substring( 4 );
        if( pathname.indexOf('/html/') === 0 ) id = pathname.substring( 6 );
        return id;
    },
    drag : function (target, cb, cb2) {
        target.onmousedown = function( ev ){
            var oEvent = ev || event;
            var disX = oEvent.clientX - oScroll.offsetLeft;
            var sw = oScroll.offsetWidth;
            
            document.onmousemove = function( ev ){
                
            };
            document.onmouseup = function(){
                
            };
            return false;
        };
    }
};

define(function (require, exports, module) {
    module.exports = util;
});