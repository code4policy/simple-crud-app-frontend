var API_ENDPOINT = "https://thawing-castle-69213.herokuapp.com/api/v1/posts/"

function submit() {
	let content = document.querySelector('textarea').value;
	let payload = {
		"title": "New Post",
		"content": content
	}

	fetch(API_ENDPOINT, {
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

function writePosts() {
	let content = document.querySelector('textarea').value;
	let payload = {
		"title": "New Post",
		"content": content
	}

	fetch(API_ENDPOINT, {
		method: 'GET',
	}).then(function(response){
		return response.json()
	}).then(function(posts){

		posts.reverse().forEach(post => {
			document.getElementById('post-container').innerHTML += '<p>' + post.content + '</p>';
		});

	})
}
