console.log("LinkedIn AI Chat Extension Loaded");

function extractMessages() {
  let messages = [];
  document.querySelectorAll(".msg-s-event-listitem__body").forEach((msg) => {
    messages.push(msg.innerText.trim());
  });

  console.log("Extracted Messages:", messages);
  return messages.length > 0 ? messages : ["(No previous messages)"];
}

function injectButtons() {
  let sendButton = document.querySelector(".msg-form__send-button");
  let inputBox = document.querySelector(".msg-form__contenteditable");

  if (!sendButton || !inputBox) {
    console.error("Send button or input box not found!");
    return;
  }

  sendButton.style.display = "inline-block";
  sendButton.removeAttribute("disabled");

  // Prevent duplicate buttons
  if (
    document.querySelector(".ai-reply-button") ||
    document.querySelector(".fix-button")
  )
    return;

  let aiReplyButton = document.createElement("button");
  aiReplyButton.innerText = "Reply AI";
  aiReplyButton.className =
    "artdeco-button artdeco-button--primary ai-reply-button";
  aiReplyButton.style.marginLeft = "10px";

  let fixButton = document.createElement("button");
  fixButton.innerText = "Fix";
  fixButton.className = "artdeco-button artdeco-button--secondary fix-button";
  fixButton.style.marginLeft = "10px";

  aiReplyButton.onclick = async (event) => {
    console.log("AI Reply Button Clicked");
    event.stopPropagation();
    event.preventDefault();

    let messages = extractMessages();
    chrome.runtime.sendMessage(
      { action: "generateReply", messages },
      (response) => {
        if (response && response.reply) {
          console.log("Generated AI Reply:", response.reply);
          insertText(response.reply);
        } else {
          console.error("Failed to get AI response.");
        }
      }
    );
  };

  fixButton.onclick = async (event) => {
    console.log("Fix Button Clicked");
    event.stopPropagation();
    event.preventDefault();

    let currentText = inputBox.innerText.trim();
    if (!currentText) {
      console.error("No text found to fix.");
      return;
    }

    chrome.runtime.sendMessage(
      { action: "fixGrammar", text: currentText },
      (response) => {
        if (response && response.fixedText) {
          console.log("Fixed Text:", response.fixedText);
          insertText(response.fixedText);
        } else {
          console.error("Failed to fix text.");
        }
      }
    );
  };

  sendButton.parentNode.insertBefore(aiReplyButton, sendButton.nextSibling);
  sendButton.parentNode.insertBefore(fixButton, sendButton.nextSibling);
}

function insertText(text) {
  let inputBox = document.querySelector(".msg-form__contenteditable");
  if (!inputBox) {
    console.error("Message input box not found!");
    return;
  }

  // Set the text and trigger input event to simulate user typing
  inputBox.innerHTML = `<p>${text}</p>`;

  let event = new Event("input", { bubbles: true });
  inputBox.dispatchEvent(event);

  console.log("Inserted Text:", text);
}

// Ensure buttons are injected periodically and on page changes
const observer = new MutationObserver(() => injectButtons());
observer.observe(document.body, { childList: true, subtree: true });

injectButtons();
