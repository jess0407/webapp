//Jessie Shi, 2014


'use strict';
//wrap the code in a self invoking function
(function(){


	var fetchPhoto = function(tags, container){
			var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		$.getJSON( flickerAPI, {
		  tags: tags,
		  tagmode: "all",
		  format: "json"
		  })
	  .done(function( data ) {
	
	    $.each( data.items, function( i, item ) {
	   		$('<div>').attr({'class':'col-md-4 col-sm-6 col-lg-3', 'id':'result'+i}).appendTo(container);
	    	$( "<img>" ).attr( {"src": item.media.m, 'class':'img-responsive' }).appendTo( "#result"+i );
	    	$('<p>').html("by "+item.author.substring(19, item.author.length-1)).appendTo( "#result"+i );

	      if ( i === 11 ) {
          return false;
        }
	    });// end of $.each
    });//end of .done

	};//end of fetchPhoto
	
	$('#fruit').on('click', function(){
		$('.fruit').removeClass('hide');
		$('.fruit').show();
		$('.contacts').hide();
		$('.vegetable').removeClass('show');


	});

	$('#veg').on('click', function(){
		$('.fruit').hide();
		$('.contacts').hide();
		$('.vegetable').addClass('show');

		fetchPhoto('vegetables, raw','#vegetables');


	});


	$('#contacts').on('click', function(){
		$('.fruit').hide();
		$('.vegetable').removeClass('show');
		$('.contacts').show();

	});

	$('#show').on('click', function(e){
		$('#images').html('');
		var searchTags = $('#picTag').val();
		fetchPhoto(searchTags,'#images');
		e.preventDefault();

	});

})();