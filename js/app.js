function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let postData = {
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
    ajax.send(JSON.stringify(postData));
   
}

document.getElementById("tweet-submit").addEventListener("click", sendTweet);