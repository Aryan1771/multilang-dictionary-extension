# Multilang Dictionary Browser Extension

A lightweight **multilingual dictionary browser extension** built with **Python, JavaScript, and HTML**. It lets users search for word meanings from a popup interface and also shows instant definitions when the mouse hovers over words on a webpage.

## Preview

### Dictionary Search Popup

The extension popup provides a simple search box and displays the meaning, word type, and examples.

![Dictionary Search Popup](./icon128.png)

## Features

- Search word meanings from the browser extension popup
- Display definitions, parts of speech, and example usage
- Hover over webpage words to see instant definitions
- Supports multiple languages depending on dictionary API/data source
- Clean and simple user interface
- Built using browser extension technologies with a Python backend/helper

## Tech Stack

- **HTML** – popup structure and extension UI
- **CSS** – styling for popup and tooltip
- **JavaScript** – browser extension logic, DOM selection, hover detection, and API calls
- **Python** – dictionary backend, local API, data processing, or dictionary lookup service

## How It Works

1. The user enters a word in the extension popup.
2. JavaScript sends the word to the dictionary lookup logic or Python backend.
3. The meaning is returned and displayed inside the popup.
4. On normal webpages, the content script detects the word under the mouse pointer.
5. The extension fetches the meaning and displays it in a small tooltip near the cursor.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multilang-dictionary-extension.git
cd multilang-dictionary-extension
```

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Python Backend

```bash
python backend/app.py
```

By default, the backend may run on:

```text
http://localhost:5000
```

Update the API URL in the JavaScript files if your backend uses a different port.

### 4. Load the Extension in Browser

For Chrome, Edge, Brave, or other Chromium-based browsers:

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `extension/` folder
5. Pin the extension and start using it

## Usage

### Search from Popup

1. Click the extension icon.
2. Type a word in the search box.
3. Click **Search**.
4. View the definition, part of speech, and examples.

### Hover Definition

1. Open any webpage.
2. Move your mouse over a word.
3. A tooltip appears with the word meaning.
4. Move the mouse away to hide the tooltip.

## Example

Searching for `hello` may show:

```text
hello

noun
- "Hello!" or an equivalent greeting.

verb
- To greet with "hello".

interjection
- A greeting said when meeting someone or acknowledging someone's arrival.
```

## Browser Permissions

The extension may require permissions such as:

```json
{
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["<all_urls>"]
}
```

These permissions allow the extension to read selected or hovered words on webpages and show definitions.

## Possible APIs or Data Sources

You can connect the extension to:

- A local Python dictionary database
- A JSON dictionary file
- A public dictionary API
- A translation API for multilingual support
- A custom Flask/FastAPI backend

## Future Improvements

- Add pronunciation audio
- Add offline dictionary support
- Add translation between languages
- Add dark mode
- Add word history
- Add favorite/saved words
- Improve tooltip positioning
- Support keyboard shortcuts

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your work
5. Open a pull request

## License

This project is licensed under the GNU GPL v3.0 License.

## Author

Created by **SpaceWarpDrive7**.
