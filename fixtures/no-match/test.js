import parentModule from '../../index.js';

// Test filePath that doesn't exist in the call stack
const result = parentModule('/nonexistent/path.js');
console.log(result ?? 'undefined');
