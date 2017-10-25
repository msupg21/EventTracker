$(document).ready(function() {
	$("#create").click(function() {
		createOrder();
	})
	console.log('Welcome');
	getData();
	var createOrder = function() {
		
		var order = {
				"name" : $("#orderName").val(),
				"numberOfBowls" : $("#numOfBowls").val(),
				"numberOfTimesDM" : $("#doubleMeat").val(),
				"amountSpent" : $("#amountSpent").val()
		};
		
		console.log(JSON.stringify(order));
		
		$.ajax({
			type : 'POST',
			url : 'api/order',
			dataType : 'json',
			contentType : 'application/json',
			data : JSON.stringify(order)
		}).done(function(data) {
			console.log(data);
			getData();
		}).fail(function(err) {
			console.error('ajax fail');
			console.error(err);
		});
		alert("Your form has been submitted");
		
	}
	
});

function getData() {
	$.ajax({
		type : 'GET',
		url : 'api/order',
		dataType : 'json'
	}).done(function(data) {
		console.log(data);
		buildTable(data);
	}).fail(function(err) {
		console.error('ajax fail');
		console.error(err);
	});
}

function buildTable(data) {
	console.log('building table');
	$('#stuff').empty();
	var table = $('<table> <thead> <tr><th>Order Fields</th></tr> </thead>');
	var tbody = $('<tbody>');
	var tBodyHead = $('<tr><th>Name</th><th>Number of Bowls</th><th>Double Meat</th><th>Amount Spent</th><th>Shit Pants</th><th>Edit</th><th>Delete</th>');
	tbody.append(tBodyHead);
	table.append(tbody);

	data.forEach(function(order, idx) {
		var div = $('<div id="table">');
		var tr = $('<tr>');
		var td1 = $('<td>');
		var td2 = $('<td>');
		var td4 = $('<td>');
		var td5 = $('<td>');
		var td6 = $('<td>');
		var td7 = $('<td>');
		var td8 = $('<td>');
		var endDiv = $('</div>');

		td1.text(order.name);
		td1.attr("id", order.id);

		td2.text(order.numberOfBowls);
		td2.attr("class", "bowls");

		td4.text(order.numberOfTimesDM);
		td4.attr("class", "dm");

		td5.text(order.amountSpent);
		td5.attr("class", "spent");
		var shitHisPants = "";
		if (order.amountSpent > 35) {
			shitHisPants = "True"
		} else {
			shitHisPants = "False";
		}
		td6.text(shitHisPants);
		td6.attr("class", "shitHisPants");

		var edit = $("<button>");
		edit.text("Edit");
		edit.attr("id", order.id);
		edit.click(function() {
			buildEditForm(this.id);
		})
		td7.append(edit);
		var del = $("<button>");
		del.text("Delete");
		del.attr("id", order.id);
		del.click(function() {
			deleteOrder(this.id);
		})
		td8.append(del);

		tr.append(td1, td2, td4, td5, td6, td7, td8);
		tbody.append(tr);
		
		var buildEditForm = function(id) {
			var form = $("<form>");
			var name = $("<input>")
			name.attr("type", "text");
			name.attr("id", "name");
			
			var numBowls = $("<input>");
			numBowls.attr("type", "text");
			numBowls.attr("id", "bowls");
			
			var doubleMeat = $("<input>");
			doubleMeat.attr("type", "text");
			doubleMeat.attr("id", "meat");
			
			var amountSpent = $("<input>");
			amountSpent.attr("type", "text");
			amountSpent.attr("id", "spent");
			
			form.append(name);
			form.append(numBowls);
			form.append(doubleMeat);
			form.append(amountSpent);
			$("body").append(form);
			
			alert("Your form has been updated");
			
		}


	});
	$('#stuff').append(table);

	var deleteOrder = function(id) {
		$.ajax({
			type : 'DELETE',
			url : 'api/orders/' + id,
		}).done(function(data, status) {
			loadChipotleOrders();
		}).fail(function(xhr, status, error) {
			console.error("Error");
		});
		alert("Your form has been deleted");
		getData()
	}



}

