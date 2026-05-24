require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

const githubData = {
  "login": "AbdullahKhetran",
  "id": 101284310,
  "node_id": "U_kgDOBgl51g",
  "avatar_url": "https://avatars.githubusercontent.com/u/101284310?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AbdullahKhetran",
  "html_url": "https://github.com/AbdullahKhetran",
  "followers_url": "https://api.github.com/users/AbdullahKhetran/followers",
  "following_url": "https://api.github.com/users/AbdullahKhetran/following{/other_user}",
  "gists_url": "https://api.github.com/users/AbdullahKhetran/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AbdullahKhetran/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AbdullahKhetran/subscriptions",
  "organizations_url": "https://api.github.com/users/AbdullahKhetran/orgs",
  "repos_url": "https://api.github.com/users/AbdullahKhetran/repos",
  "events_url": "https://api.github.com/users/AbdullahKhetran/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AbdullahKhetran/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdullah Khetran",
  "company": null,
  "blog": "",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 55,
  "public_gists": 4,
  "followers": 4,
  "following": 4,
  "created_at": "2022-03-09T18:02:27Z",
  "updated_at": "2026-05-15T15:38:10Z"
}

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.get("/twitter", (req,res) => {
    res.send("twitter route")
})

app.get("/login", (req,res) => {
    res.send("<h1>please login")
})

app.get("/youtube", (req,res) => {
    res.send("<h1>Youtube route</h1>")
})

app.get("/github", (req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})