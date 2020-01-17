function submit() {
	let content = document.querySelector('textarea').value;
	let payload = {
		"title": "New Post",
		"content": content
	}

	fetch("https://thawing-castle-69213.herokuapp.com/api/v1/posts/", {
		method: 'POST',
		mode: 'cors',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	}).then(function(response){
		return response.text()
	}).then(alert)
}