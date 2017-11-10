$(document).ready(function() {

	$.getJSON("./contacterInfo.json", function(data) {
		if (!data) {
			alert("read json file failed!");
		}

		var contacterList = data.profile;

		contacterList.forEach(function(contacter) {
			var lastname = contacter.lastname;
			var firstname = contacter.firstname;
			var phone = contacter.Phonenumber;
			var photo = contacter.Photo.slice(5);
			var address = contacter.Address;

			var tempStr = "id='"+ lastname +"' data-fname='"+ 
				firstname +"' data-phone='"+ phone +"' data-photo='"+
				photo +"' data-address='"+ address +"'";

			$("#contacterList").append(
				"<li><a "+ tempStr +" href='#detail' data-rel='popup'>" + contacter.lastname + "</a></li>"
				);
			$("#"+contacter.lastname).on('click', function(e) {
				var target = $(e.target);

				
				$('#lastname').html(e.target.id);
				$('#firstname').html("Fitst name:"+target.attr('data-fname'));
				console.log(target.attr('data-fname'));
				$('#phone').html("Phone: "+target.attr('data-phone'));
				$('#address').html("Address: "+target.attr('data-address'));
				$('#photo').attr("src", target.attr('data-photo'));
			});

		})

		$("#btncreate").on('click',function(){
		 
		   
		   var newlastn = $('#Lastname').val();
		   var newfirstn = $('#Firstname').val();
		   var newphonen =$('#PhoneNumber').val();
		   var newaddress = $('#Address').val();
		   var newbirth = $('#Birth').val();

		   var newcontacter = new Object();
		   newcontacter.lastname = newlastn;
		   newcontacter.firstname = newfirstn;
		   newcontacter.Phonenumber = newphonen;
		   newcontacter.Address = newaddress;
		   newcontacter.Birth = newbirth;

		   contacterList.push(newcontacter);

		   var tempStr = "id='"+ newlastn +"' data-fname='"+ 
		   newfirstn +"' data-phone='"+ newphonen +"' data-photo='"+
		   photo +"' data-address='"+ newaddress +"'";

		   $("#contacterList").append(
			"<li><a "+ tempStr +" href='#detail' data-rel='popup'>" +newcontacter.lastname + "</a></li>");
		   

		   console.log(contacterList+'123');

		   $("#"+newlastn).on('click', function(e) {
				var target = $(e.target);
				
				$('#lastname').html(e.target.id);
				$('#firstname').html("Fitst name:"+target.attr('data-fname'));
				console.log(target.attr('data-fname'));
				$('#phone').html("Phone: "+target.attr('data-phone'));
				$('#address').html("Address: "+target.attr('data-address'));
				$('#photo').attr("src", target.attr('data-photo'));
			});

		   $('#contacterList').listview("refresh");

		})   

		$('#contacterList').listview("refresh");


		   

		


	});

});

