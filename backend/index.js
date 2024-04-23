import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// list of jokes

app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "What do you call a fake noodle? An impasta!",

    },
    {
      id: 2,
      joke:"Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 3,
      joke: "What do you call a fake noodle? An impasta!",
    },
    {
      id: 4,
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 5,
      joke: "What do you call a fake noodle? An impasta!",
    }
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
