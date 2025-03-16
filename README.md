# N8N Libraries Node

This is a custom N8N node that provides access to various JavaScript libraries. It allows you to use popular libraries in your N8N workflows without having to install them separately.

## Included Libraries

- pdf-parse: PDF parsing library
- pdf-lib: PDF manipulation library
- pdfjs-dist: PDF.js library
- bcrypt: Password hashing library
- body-parser: Body parsing middleware
- fcm-push: Firebase Cloud Messaging
- fast-xml-parser: XML parsing and building
- form-data: Form data handling
- axios: HTTP client
- lodash: Utility library
- moment: Date manipulation
- dotenv: Environment variable management

## Installation

To install this custom node:

1. Go to your n8n installation directory
2. Run the following command:
   ```bash
   npm install n8n-nodes-libraries
   ```
3. Restart your n8n instance

## Usage

After installation, you can find the "Libraries" node in the node palette under the "Transform" category. The node currently provides information about all available libraries and their versions.

## Development

If you want to develop this node:

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the node:
   ```bash
   npm run build
   ```
4. Link to your n8n installation:
   ```bash
   npm link
   ```

## License

MIT 