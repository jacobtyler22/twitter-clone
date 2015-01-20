$(document).ready(function(){
	$('#char-count').html(140);
	$('#tweet-controls').ready(function(){
		$('#tweet-controls').hide();
	});

	$('.tweet-actions').ready(function(){
		$('.tweet-actions').hide();
	});

	$('.tweet-compose').on('focus', function(){
		$('#tweet-controls').show();
		$(this).css('height','5em');
	});

	$('.tweet-compose').on('keyup', function(e){
		var count = 140 - $('.tweet-compose').val().length;
		if(count > 140){
			count--;
		}
		if(count <= 10){
			$('#char-count').css('color', 'red');
		}
		else{
			$('#char-count').css('color', '#999');
		}
		
		if(count < 0){
			$('button').attr('disabled', true);
		}
		else{
			$('button').attr('disabled', false);
		}

		$('#char-count').text(count);
	});

	$('.content').on('click', function(){
		$('.tweet-actions').show();
	});

	$('#tweet-submit').on('click', function(){
		if($('.tweet-compose').val().length != 0){
			$('#stream').prepend(
				'<div class="tweet">' +
					'<div class="content">' + 
						'<img class="avatar" src="img/alagoon.jpg"/>' + 
						'<strong class="fullname">Your Name Here</strong> ' + 
						'<span class="username">@yournamehere</span>' + 
						'<p class="tweet-text">' + 
						$('.tweet-compose').val() + 
						'</p>' + 
						'<div class="tweet-actions">' + 
							'<ul>' + 
								'<li><span class="icon action-reply"></span> Reply</li>' + 
								'<li><span class="icon action-retweet"></span> Retweet</li>' +
								'<li><span class="icon action-favorite"></span> Favorite</li>' +
								'<li><span class="icon action-more"></span> More</li>' + 
							'</ul>' + 
						'</div>' + 
						'<div class="stats">' + 
							'<div class="retweets">' + 
								'<p class="num-retweets">0</p>' + 
								'<p>RETWEETS</p>' + 
							'</div>' + 
							'<div class="favorites">' + 
									'<p class="num-favorites">0</p>' + 
									'<p>FAVORITES</p>' + 
							'</div>' + 
							'<div class="users-interact">' + 
								'<div>' + 
								'</div>' + 
							'</div>' + 
							'<div class="time">' + 
								'1:04 PM - 19 Sep 13' + 
							'</div>' + 
						'</div>' + 
						'<div class="reply">' + 
							'<img class="avatar" src="img/alagoon.jpg" />' + 
							'<textarea class="tweet-compose" placeholder="Reply to @yournamehere"/></textarea>' + 
						'</div>' + 
					'</div>' + 
				'</div>'
			);
			$('.tweet-actions').hide();
		}
	});

});