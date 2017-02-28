//JS FROM scripts.js

///*****   Libraries added   *****///
global.jQuery = require('jquery');
bootstrap = require('bootstrap');
mustache = require('mustache');

///*****  end Libraries *****///


///***** My Code *****///
jQuery(document).ready(function($){
    var jqXhr = $.getJSON('data.json', function(){

    }).done(function(data){
        var template = $('#template').html();
        var showTemplate = mustache.render(template, data);
        $('#gallery').html(showTemplate);
    });
});
