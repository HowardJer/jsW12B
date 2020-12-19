// posti request

function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
        
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            document.getElementById("post-status").innerHTML = "Post Success!";
        } else if (this.readyState != 4) {
            document.getElementById("post-status").innerHTML = "Posting";
        } else {
            document.getElementById("post-status").innerHTML = "Post Failure";
        }
    }

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
   
}

document.getElementById("tweet-submit").addEventListener("click", sendTweet);


// patch request

function patchTweet() {
    let tweetData = {
        title: "New Title",
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText);
        } else if (this.readyState != 4) {
            console.log("Loading");
        } else {
            console.log("Failure " + this.status);
        }
    }

    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

patchTweet();

// delete request

function deleteTweet() {
    // let tweetData = {
    //     title: "New Title",
    // }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText);
        } else if (this.readyState != 4) {
            console.log("Deleting");
        } else {
            console.log("Failure " + this.status);
        }
    }

    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    // ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

deleteTweet();

// get request

function getTweet() {
    // let tweetData = {
    //     title: "New Title",
    // }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           let posts=JSON.parse(this.responseText);

           for(let i=0; i<posts.length; i++) {
               document.getElementById("all-tweets").innerHTML +="<h3>"+posts[i].title + "</h3>"
               document.getElementById("all-tweets").innerHTML +="<p>"+posts[i].body + "</p>"
           }

        } else if (this.readyState != 4) {
            document.getElementById("all-tweets").innerHTML="<p>Loading</p>";
        } else {
            document.getElementById("all-tweets").innerHTML="<p>Failure</p>";
        }
    }

    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

getTweet();



