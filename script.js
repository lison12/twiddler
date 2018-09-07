$(document).ready(function() {
  renderTweets();

  $(".btn").on("click", function() {
    console.log("clicked");
    renderTweets();
  });
});

function renderTweets() {
  var $tweets = $("#tweets");
  $tweets.html("");

  var index = streams.home.length - 1;
  while (index >= 0) {
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet-box"></div>');
    var $user = $("<div class='userTag'></div>");
    var $message = $("<div></div>");
    var $time = $('<div class="time"></div>');
    //$tweet.text('@' + tweet.user + ': ' + tweet.message );
    $user.text("@" + tweet.user);
    $message.text(tweet.message);
    $time.append(tweet.created_at);
    $tweet.append($user, $message, $time);
    $tweet.appendTo($tweets);
    index -= 1;
  }

  $($user).on("click", function() {
    renderUserTweets($user);
  });
}

function renderUserTweets(name) {
    var $tweets = $("#tweets");
    $tweets.html("");

  var index = streams.users.length - 1;
  while (index >= 0) {
    var userTweet = streams.users.name[index];
    var $tweet = $('<div class="tweet-box"></div>');
    var $user = $("<div></div>");
    var $message = $("<div></div>");
    var $time = $("<div></div>");
    $user.text("@" + userTweet.user);
    $message.text(userTweet.message);
    $time.text(userTweet.created_at);
    $tweet.append($message, $time);
    $tweets.append($user)
    $tweet.appendTo($tweets);
    index -= 1;
  } 
}
