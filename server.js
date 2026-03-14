const express = require("express");
const yts = require("yt-search");

const app = express();

app.get("/", (req, res) => {
res.send("Musixa API работает 🎧");
});

app.get("/search", async (req, res) => {

const query = req.query.q;

if(!query){
return res.json({error:"No search query"});
}

const result = await yts(query);

const songs = result.videos.slice(0,10).map(video => ({
title: video.title,
url: video.url,
thumbnail: video.thumbnail,
duration: video.timestamp
}));

res.json(songs);

});

app.listen(3000, () => {
console.log("Musixa server running");
});
