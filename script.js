function fetchdata() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data
        .map((user) => {
          return `
          <div class="user">
          <table>
          <tr>
          <td>UserID: ${user.userId}</td>
          <td>ID: ${user.id}</td>
          <td>Title: ${user.title}</td>
          <td>Body: ${user.body}</td>
          </tr>
          <table>
          </div>
          `;
        })
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchdata();
