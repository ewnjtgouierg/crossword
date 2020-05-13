document.addEventListener('keyup', function(e) {
		if (e.key == 'Enter' && e.ctrlKey) {} else return;
		e.stopPropagation();
		e.preventDefault();
		document.body.style.background = 'white';
		var graphics = document.querySelector('#game>div:nth-of-type(3)'),
			w = graphics.offsetWidth, h = graphics.offsetHeight;
		var html = "<div page1><table>";
		var table = [];
		for (var cell of Array.from(document.querySelectorAll('[style*="height: 26px; width: 26px;"]:not([style*="background-color: black"])')))
			{
				if (!table[cell.offsetTop]) table[cell.offsetTop] = [];
				table[cell.offsetTop][cell.offsetLeft] = cell.innerText;
			}
		for (var cell of Array.from(document.querySelectorAll('[style*="height: 26px; width: 26px;"][style*="background-color: black"]')))
			{
				if (!table[cell.offsetTop]) table[cell.offsetTop] = [];
				table[cell.offsetTop][cell.offsetLeft] = 'x';
			}
		for (var row of table)
			if (typeof row != 'undefined')
			{
				html += "<tr>";
				for (var cell of row)
					if (typeof cell != 'undefined')
					{
						html += "<td";
						if (cell == 'x')
							{
								html += " gap";
								cell = '';
							}
						html += ">" + cell + "</td>";
					}
				html += "</tr>";
			}
		html += "</table><br><br>";
		html += document.querySelectorAll('.cr-left')[1].outerHTML
				+ "<br>" + document.querySelectorAll('.cr-right')[1].outerHTML
				+ "</div>"
				+ document.querySelector('#ans').outerHTML;
		document.body.innerHTML = html;
	});