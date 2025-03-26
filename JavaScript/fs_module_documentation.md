# Node.js File System (fs) Module Documentation

The `fs` module enables interacting with the file system in Node.js.

## Common Methods

### Reading Files

```javascript
// Asynchronous read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous read
const data = fs.readFileSync('file.txt', 'utf8');
```

### Writing Files

```javascript
// Asynchronous write
fs.writeFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

// Synchronous write
fs.writeFileSync('file.txt', 'Hello World!');
```

### Appending to Files

```javascript
// Asynchronous append
fs.appendFile('file.txt', 'New content', (err) => {
  if (err) throw err;
  console.log('Content appended');
});

// Synchronous append
fs.appendFileSync('file.txt', 'New content');
```

### Working with Directories

```javascript
// Create directory
fs.mkdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory created');
});

// Read directory contents
fs.readdir('dir', (err, files) => {
  if (err) throw err;
  console.log('Files:', files);
});
```

### Checking if File/Directory Exists

```javascript
// Check if file exists
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(`${err ? 'Does not exist' : 'Exists'}`);
});
```

### File Information

```javascript
// Get file stats
fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log('Stats:', stats);
  console.log('Is file?', stats.isFile());
  console.log('Is directory?', stats.isDirectory());
});
```

### Deleting Files

```javascript
// Delete file
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

### Rename Files

```javascript
// Rename/Move file
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});
```

## Important Notes

1. Always handle errors in callbacks
2. Use async methods for better performance in production
3. Sync methods block the event loop
4. Relative paths are relative to `process.cwd()`
5. Use `path` module to handle file paths cross-platform

## Streams

```javascript
// Create read stream
const readStream = fs.createReadStream('file.txt');

// Create write stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe read to write
readStream.pipe(writeStream);
```

This documentation covers the most commonly used fs module methods. For complete documentation, visit the official Node.js website.
