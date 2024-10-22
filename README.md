Here’s an updated `README.md` file that includes a **Code of Conduct** section along with the rest of the content:

```markdown
# Zeltux

An open-source Discord bot designed to enhance community interaction with a variety of engaging and useful features.

## Features

- Fun commands
- Moderation tools
- Utility functions
- And much more!

## Commands

🗂️ **Commands in ℹ️ Info**
- `/botinfo`
- `/help`
- `/ping`
- `/roleinfo`
- `/serverinfo`
- `/userinfo`

🗂️ **Commands in 🎈 Fun**
- `/8ball`
- `/catfact`
- `/coinflip`
- `/dadjoke`
- `/dogfact`
- `/joke`
- `/meme`
- `/pp`
- `/randomnumber`
- `/trivia`

🗂️ **Commands in 🔨 Moderation**
- `/ban`
- `/clear`
- `/kick`
- `/lock`
- `/nick`
- `/timeout`
- `/unban`
- `/unlock`
- `/untimeout`

🗂️ **Commands in 🪛 Utility**
- `/calculator`
- `/define`
- `/todo`
- `/translate`
- `/weather`

## Quick Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RedolentHalo/Zeltux.git
   cd Zeltux
   ```

2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Create a `config.json` file:**
   In the root of the project, copy the example configuration file:
   ```bash
   cp config.json.example config.json
   ```

4. **Fill in Your Configuration:**
   Open the `config.json` file and fill in the following fields:
   ```json
   {
       "token": "YOUR_BOT_TOKEN",
       "clientId": "YOUR_CLIENT_ID",
       "weatherApi": "YOUR_WEATHER_API_KEY",
       "MongoDBURI": "YOUR_MONGODB_CONNECTION_STRING"
   }
   ```

5. **Run the Bot:**
   ```bash
   node index.js
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Code of Conduct

We strive to maintain a friendly, inclusive, and respectful community. Please follow these guidelines:

- **Be Respectful:** Treat others with respect. Disagreements are okay, but be civil.
- **Be Inclusive:** We welcome all contributions and encourage participation from everyone.
- **Be Supportive:** Help others when they have questions, and be open to feedback.

If you experience or witness unacceptable behavior, please report it to the maintainers of this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

