# Zeltux

An open-source Discord bot designed to enhance community interaction with a variety of engaging and useful features.

## Features

-   🎉 Fun Commands
-   🛠️ Moderation Tools
-   🔧 Utility Functions
-   🎮 Minecraft Integration
-   🌐 And Much More!

## Support Server

For any assistance, join our support server:

<a href="https://discord.gg/M7zYS7vwJW"><img src="https://discord.com/api/guilds/1077990533802229760/widget.png?style=banner2" alt="Support Server"></a>

## 🔍 Command Categories
<details>
<summary>ℹ️ <strong>Info Commands</strong></summary>
<br>

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `/botinfo`     | Display information about the bot      |
| `/help`        | Show help menu with all commands       |
| `/ping`        | Check the bot's response time          |
| `/roleinfo`    | View detailed information about a role |
| `/serverinfo`  | Display information about the server   |
| `/userinfo`    | Show information about a user          |
| `/level`       | Check your current level and XP        |
| `/leaderboard` | View the server's level leaderboard    |

</details>

<details>
<summary>🎈 <strong>Fun Commands</strong></summary>
<br>

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `/8ball`        | Ask the magic 8-ball a question            |
| `/catfact`      | Get a random fact about cats               |
| `/coinflip`     | Flip a coin                                |
| `/dadjoke`      | Hear a random dad joke                     |
| `/dogfact`      | Get a random fact about dogs               |
| `/joke`         | Receive a random joke                      |
| `/meme`         | View a random meme                         |
| `/pp`           | Check the size of your... nevermind        |
| `/randomnumber` | Generate a random number                   |
| `/trivia`       | Test your knowledge with a trivia question |

</details>

<details>
<summary>🔨 <strong>Moderation Commands</strong></summary>
<br>

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `/ban`       | Ban a user from the server              |
| `/clear`     | Delete multiple messages at once        |
| `/kick`      | Kick a user from the server             |
| `/lock`      | Lock a channel to prevent messages      |
| `/nick`      | Change a user's nickname                |
| `/timeout`   | Timeout a user for a specified duration |
| `/unban`     | Unban a user from the server            |
| `/unlock`    | Unlock a previously locked channel      |
| `/untimeout` | Remove a timeout from a user            |
| `/warn`      | Warn a user for inappropriate behavior  |
| `/warnings`  | View a user's warning history           |

</details>

<details>
<summary>🪛 <strong>Utility Commands</strong></summary>
<br>

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `/calculator` | Perform mathematical calculations          |
| `/define`     | Look up the definition of a word           |
| `/todo`       | Manage your personal to-do list            |
| `/translate`  | Translate text between languages           |
| `/weather`    | Check the weather for a specified location |

</details>

<details>
<summary>⚙️ <strong>Admin Commands</strong></summary>
<br>

| Command          | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `/giveaway`      | Create and manage giveaways                                 |
| `/leveladmin`    | Configure the leveling system                               |
| `/welcome`       | Set up custom welcome messages                              |
| `/guildsettings` | Manage server-specific settings                             |
| `/autorole`      | Configure roles to be automatically assigned to new members |

</details>

<details>
<summary>🌎 <strong>Minecraft Commands</strong></summary>
<br>

| Command               | Description                            |
| --------------------- | -------------------------------------- |
| `/achievement`        | Generate a Minecraft achievement image |
| `/addserverstatus`    | Add a Minecraft server to monitor      |
| `/bodyavatar`         | View a player's body avatar            |
| `/fullbody`           | View a player's full body model        |
| `/headavatar`         | View a player's head avatar            |
| `/listserverstatus`   | List all monitored Minecraft servers   |
| `/playerhead`         | Get a player's head image              |
| `/removeserverstatus` | Stop monitoring a Minecraft server     |
| `/serverstatus`       | Check the status of a monitored server |
| `/skin`               | View a player's skin                   |

</details>

## Quick Setup

### 1. **Clone the Repository**

Clone the repository and navigate to the project folder:

```bash
git clone https://github.com/RedolentHalo/Zeltux.git
cd Zeltux
```

### 2. **Install Dependencies**

Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required dependencies:

```bash
npm install
```

### 3. **Run the Setup Script**

In the root of the project, run the following command to set up your configuration:

```bash
npm run setup
```

The script will prompt you to enter your configuration details interactively.

### 4. **Enter Your Configuration Details**

The `setup.js` script will ask for the following details:

-   **Bot Token**: Your bot's token from the [Discord Developer Portal](https://discord.com/developers/applications).
-   **Client ID**: The client ID of your bot.
-   **Weather API Key**: The API key for the weather service you're using.
-   **MongoDB Connection String**: The connection string for your MongoDB database.

These details will be saved in a `config.json` file.

### 5. **Run the Bot**

Start the bot with the following command:

```bash
npm run start
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## Code of Conduct

We strive to maintain a friendly, inclusive, and respectful community. Please follow these guidelines:

-   **Be Respectful**: Treat others with respect. Disagreements are okay, but be civil.
-   **Be Inclusive**: We welcome all contributions and encourage participation from everyone.
-   **Be Supportive**: Help others when they have questions and be open to feedback.

If you experience or witness unacceptable behavior, please report it to the maintainers of this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## To-Do List

-   Server logs system
-   Enhance Minecraft integration features
-   Suggestions? Feel free to share in the [Support Server](https://discord.gg/M7zYS7vwJW)
