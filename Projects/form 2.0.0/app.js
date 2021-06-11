		function SubForm (){
			$.ajax({
				url:"https://api.apispreadsheets.com/data/5860/",
				type:"post",
				data:$("#registration").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)");
					// $('#custom-tag').html('YourHtmlString');
					// document.registration.reset();
					// location.href = "http://google.nl";
				},
				error: function(){
					// alert("There was an error :(")
					location.href = "http://google.nl";
				}
			});
		}