var config = require('../config');
var framework = require('../framework');
var utils = require('../utils');
var $ = require('dom-select');
var Tween = require('gsap');
var classes = require('dom-classes');

function about() {
	
	this.view = config.$view;
	this.slug = 'about';
	this.page;

};

about.prototype = {
    
     init: function(req, done) {

		var view = this.view;
		var page = this.page = utils.loadPage(req, view, done);

	},

	resize: function(width, height) {
	
		//console.log(width+' | '+height);
	
	},

	animateIn: function(req, done) {

		classes.add(config.$body, 'is-'+this.slug);

		Tween.from(this.page, 1, {
			y: -100, 
			autoAlpha: 0,
			ease: Expo.easeInOut, 
			onComplete: done
		});

	},

	animateOut: function(req, done) {

		classes.remove(config.$body, 'is-'+this.slug);

		Tween.to(this.page, 0.25, {
			y: 100,
			autoAlpha: 0,
			ease: Expo.easeInOut, 
			onComplete: done
		});

	},

	destroy: function(req, done) {

		this.page.parentNode.removeChild(this.page);

	}

};

module.exports = about;