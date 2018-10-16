var T = require('twit');
var fs = require("fs");
var twitterApiConf = require(process.env.SNT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var hitLog = '/home/ec2-user/softwarenegustweeter/logs/searchQueriesThatHit.log';
var missLog = '/home/ec2-user/softwarenegustweeter/logs/searchQueriesThatMissed.log';

tweet = function(message) {
	twitter.post('statuses/update', { status: message }, function(err, data, response) {
		console.log('tweeted: ' + message);
	});
};

retweet = function(tweetId) {
	twitter.post('statuses/retweet/' + tweetId,  function(err, data, response) {
		// console.log(data.id);
	});
};

search = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		// console.log(data.id);
	});
};

searchAndRetweet = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		var firstStatus = data.statuses[0];
		if(firstStatus) {
			retweet(firstStatus.id_str);
			var log = 'retweeted based on search query: ' + searchQuery + ' >> ' + firstStatus.text;
			console.log(log);
			fs.appendFileSync(hitLog, new Date() + ' >> ' + log + '\n');
		}
		else {
			var log = 'nothing to retweet for search query: ' + searchQuery;
			console.log(log);
			fs.appendFileSync(missLog, new Date() + ' >> ' + log + '\n');
		}
	});
};

module.exports.tweet = tweet;
module.exports.retweet = retweet;
module.exports.search = search;
module.exports.searchAndRetweet = searchAndRetweet;

