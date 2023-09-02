const fs = require('fs');
const path = require('path');

function convertToTxt(sourcePath, destinationPath) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath);
  }

  // Read the source directory
  const files = fs.readdirSync(sourcePath);

  files.forEach((file) => {
    const filePath = path.join(sourcePath, file);

    // Check if it's a directory
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively call the function for nested directories
      convertToTxt(filePath, destinationPath);
    } else {
      // Read the file content
      const content = fs.readFileSync(filePath, 'utf8');

      // Change the file extension to txt
      const txtFilePath = path.join(
        destinationPath,
        file.replace(/\.[^/.]+$/, '.txt'),
      );

      // Write the converted content to a new file
      fs.writeFileSync(txtFilePath, content);
    }
  });
}

// Usage example
const sourceFolderPath = 'src/scripts/raw';
const destinationFolderPath = 'src/scripts/txt-folder';

convertToTxt(sourceFolderPath, destinationFolderPath);
