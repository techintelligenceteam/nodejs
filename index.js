const figlet = require("figlet");
const chalk = require("chalk");
const express = require("express");

const app = express();
const PORT = 3000;

// Fancy ASCII banner
console.log(
  chalk.blue(
    figlet.textSync("Tech Intelligence", {
      font: "Big",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);
console.log(chalk.green.bold("\n🚀 Welcome to the Ultimate DevOps Course! 🚀\n"));
console.log(chalk.cyan("Your journey to mastering DevOps starts here...\n"));

// Basic web server
app.get("/", (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: Arial, sans-serif; padding: 50px;">
      <h1 style="font-size: 50px; color: #007BFF;">🚀 Welcome to Tech Intelligence 🚀</h1>
      <h2 style="font-size: 30px; color: #28A745;">The Ultimate DevOps Course</h2>
      <p style="font-size: 20px; color: #333;">Your journey to mastering DevOps starts here...</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(chalk.magenta.bold(`\n🔥 Server running on http://localhost:${PORT} 🔥\n`));
});

