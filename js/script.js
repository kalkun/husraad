var receipesTemplate = $("#receipes").html();
var receipeTemplate = $("#receipe").html();

function init() {
	var ids = [4,1,13,20,2,18];
	var items = [];

	for(var i=0; i<ids.length; i++)
	{
		$.each(db.receipes, function(key, receipe) {			
				if(ids[i] == receipe.id) items.push(receipe);
		});
	}
	$("#initialReceipes").append(Mustache.render(receipesTemplate, {receipes: items}));
}
init();

var initialReceipes = $("#initialReceipes").html();
$("#receipes, #receipe").hide();

function searchReceipes(value)
{
	if(value == "")
	{
		$("#initialReceipes").html(initialReceipes);
		$(".searchByCategory").bind("click",function(){ searchByCategory($(this).attr("data-v1"),$(this).attr("data-v2")); });
	}
	else
	{
		var items = [];
		$.each(db.receipes, function(key, receipe) {
			if(receipe.tags.indexOf(value)> 0 || receipe.category == value || receipe.name.indexOf(value)>0)
			{
				items.push(receipe);
			}
		});
		$("#initialReceipes").html(Mustache.render(receipesTemplate, {receipes: items}));
	}
	$(".r").bind("click",function(){
		var id = $(this).attr("data-id");
		$.each(db.receipes, function(key, receipe) {
			if(receipe.id == id)
			{
				var $this = $("#myModal");
				$this.modal("show");
				$this.find("h3").text(receipe.name);
				$this.find("img").attr("src",receipe.image);
			}
		});
	});
}
$("#search").click(function(){ searchReceipes($("#searchValue").val()); });
$("#searchValue").keyup(function() { searchReceipes($("#searchValue").val()); });
$("#searchValue").attr("data-source",JSON.stringify(db.tags));

function searchByCategory(v1, v2)
{
	var items = [];
	$.each(db.receipes, function(key, receipe) {
		if(receipe.category == v1 || receipe.category == v2)
		{
			items.push(receipe);
		}
	});

	$("#initialReceipes").html(Mustache.render(receipesTemplate, {receipes: items}));
	
	$(".r").bind("click",function(){
		var id = $(this).attr("data-id");
		$.each(db.receipes, function(key, receipe) {
			if(receipe.id == id)
			{
				var $this = $("#myModal");
				$this.modal("show");
				$this.find("h3").text(receipe.name);
				$this.find(".modal-body").html("");
				for(var i=0; i<receipe.image.length; i++)
				{
					$this.find(".modal-body").append("<img src='" + receipe.image[i] + "' />");
				}
			}
		});
	});
}
$(".searchByCategory").click(function(){ searchByCategory($(this).attr("data-v1"),$(this).attr("data-v2")); });


$(".r").bind("click",function(){
	var id = $(this).attr("data-id");
	$.each(db.receipes, function(key, receipe) {
		if(receipe.id == id)
		{
			var $this = $("#myModal");
			$this.modal("show");
			$this.find("h3").text(receipe.name);
			$this.find(".modal-body").html("");
			for(var i=0; i<receipe.image.length; i++)
			{
				$this.find(".modal-body").append("<img src='" + receipe.image[i] + "' />");
			}
		}
	});
});