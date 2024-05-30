document.getElementById('bookmarkForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
		<a href="${siteURL}" target="_blank" class="siteLink">
			<span class="siteName">${siteName}</span>
		</a>
		<button class="visit">Visit</button>
		<button class="delete">Delete</button>
	`;

    listItem.querySelector('.delete').addEventListener('click', function () {
        listItem.remove();
    });

    listItem.querySelector('.visit').addEventListener('click', function () {
        window.open(siteURL);
    });

    document.getElementById('bookmarkList').appendChild(listItem);

    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';
});