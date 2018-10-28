function ajax(url, payload) {
	return new Promise(resolve => {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '../server/' + url + '.php', true);
		xhr.onload = () => {
			resolve( JSON.parse(xhr.responseText) );
		};
		xhr.send( JSON.stringify(payload) );
	})
}

function openNav() {
				document.getElementById("mySidenav").style.width = "100%";
			}

function closeNav() {
				document.getElementById("mySidenav").style.width = "0";
			}
