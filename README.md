# LinkedIn AI Chat Reply Extension

## 📌 Overview

The **LinkedIn AI Chat Reply** is a Chrome extension designed to enhance LinkedIn messaging by providing AI-powered responses. It comes with two key features:

- **Reply AI**: Automatically generates context-aware replies based on the previous chat messages.
- **Fix**: Improves the grammar of your typed message before sending it.

---

## 🚀 Features

- **Message Extraction**: Automatically extracts LinkedIn chat messages.
- **Instant AI Replies**: Provides instant AI-generated replies based on the chat context.
- **Grammar Fix**: Refines your written responses with a grammar-fixing tool.
- **Seamless Integration**: Integrates smoothly into LinkedIn's messaging interface.

---

## 🛠 Installation

### 1. Clone the Project

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/LinkedIn-AI-Chat-Reply.git
cd LinkedIn-AI-Chat-Reply
```

### 2. Load the Extension in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer Mode** by toggling the switch at the top right.
3. Click on **Load Unpacked** and select the project folder where the extension is stored.

---

## 📄 File Structure

```
LinkedIn-AI-Chat-Reply/
│── manifest.json         # Chrome extension manifest file
│── background.js         # Handles AI requests in the background
│── content.js            # Manages UI and injects AI buttons into LinkedIn
│── popup.html            # UI for extension settings and controls
│── popup.js              # Handles logic for popup functionality
│── styles.css            # Styles for the popup UI
│── README.md             # Documentation file
```

---

## 🔑 Permissions Explanation

The extension requires the following permissions to function properly:

- **"scripting"**: Allows injection of scripts into LinkedIn pages to modify the UI.
- **"storage"**: Saves user preferences and settings locally in Chrome's storage.
- **"activeTab"**: Enables interaction with the currently active LinkedIn tab.
- **"host_permissions"**: Grants the extension access to LinkedIn messaging pages (`https://www.linkedin.com/messaging/*`).

---

## 🛠 How It Works

1. The extension injects AI-powered buttons into the LinkedIn messaging interface.
2. **Reply AI**: When clicked, the button extracts recent messages and requests an AI-generated reply based on the conversation.
3. **Fix**: Clicking this button will refine the user’s typed message for better grammar and readability.
4. The AI-generated or corrected response is then inserted directly into the LinkedIn message input box.

---

## ⚡ Troubleshooting

- **Buttons not appearing**: Try refreshing the LinkedIn messaging page.
- **Extension not enabled**: Check if the extension is enabled in `chrome://extensions/`.
- **Errors**: Open the Chrome Developer Console (`F12 > Console`) to check for any errors.

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository, make improvements, and submit a pull request.

---

🚀 Developed with ❤️ by Krisha Arya

