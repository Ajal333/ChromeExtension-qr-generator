## Overview

Overview

The ChromeExtension QR Generator is a lightweight Chrome extension that allows users to generate and download QR codes directly from their browser. With this extension, users can quickly convert URLs and selected text into QR codes, making it simple to share information via scannable codes.

##
## Features

Features

- **QR Code Generation**: Instantly generate QR codes for any URL or selected text.
- **Download QR Codes**: Download the generated QR code image to your computer.
- **User-Friendly Interface**: Easy-to-use popup interface within the Chrome browser.

##
## Installation Instructions

Installation Instructions

To install the ChromeExtension QR Generator, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Ajal333/ChromeExtension-qr-generator.git
    ```
2. **Open Chrome and navigate to the Extensions page**:
    ```sh
    chrome://extensions/
    ```
3. **Enable Developer mode** by toggling the switch in the top right corner.
4. **Load the extension**:
    - Click on the "Load unpacked" button.
    - Select the cloned repository directory where the extension files are located (e.g., `ChromeExtension-qr-generator`).

The extension should now be installed and you should see the QR Generator icon in your Chrome toolbar.

##
## Usage Examples

Usage Examples

To use the ChromeExtension QR Generator:

1. **Open the extension**: Click on the QR Generator icon in the Chrome toolbar.
2. **Generate a QR code**:
    - The extension will automatically generate a QR code for the current tab's URL.
    - You can also paste a URL or text into the extension popup to generate a QR code.
3. **Download the QR code**: Click the "Download" button to save the QR code image to your computer.

Here is an example of how to use the extension:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Example</title>
</head>
<body>
    <div id="qrCodeContainer"></div>
    <div id="downloadBtnContainer"></div>

    <script src="popup.js"></script>
    <script>
        const urlToConvert = "https://www.example.com";
        addImage(urlToConvert); // This will add a QR code image for the URL
        addDownload(urlToConvert); // Adds a download button for the QR code
    </script>
</body>
</html>
```

##
## Code Summary

Code Summary

The project consists of the following key files:

- **`background.js`**: Handles background processes for the extension.
- **`content.js`**: Manages content manipulation and interaction within web pages.
- **`popup.js`**:
    - Defines the main functionality for the extension's popup interface.
    - Functions `addImage` and `addDownload` are used to generate and manage QR code images and download links within the popup.

```javascript
var modal = document.getElementById("qrCodeContainer");
var elem = document.getElementById("newImg");
var btnContainer = document.getElementById("downloadBtnContainer");
var btn = document.getElementById("downloadBtn");

const addImage = (u) => {
  if (elem) elem.parentNode.removeChild(elem);
  if (modal) modal.innerHTML = `<img src=${u} alt="newQr" id="newImg">`;
};

const addDownload = (u) => {
  if (btn) btn.parentNode.removeChild(btn);
  if (btnContainer)
    btnContainer.innerHTML = `<a href="${u}" download="qrCode.png" id="downloadBtn">Download</a>`;
};
```

##
## License

License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code as per the terms of the license. For more information, please refer to the [LICENSE](https://opensource.org/licenses/MIT) file.

---
Thank you for using the ChromeExtension QR Generator! If you have any questions, feel free to open an issue on the [project repository](https://github.com/Ajal333/ChromeExtension-qr-generator).