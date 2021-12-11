const fs = require('fs');
const path = require('path');

const greetingsDir = 'greetings/';

const greetings = fs.readdirSync(greetingsDir);

greetings.forEach(file => {
	const greeting = fs.readFileSync(greetingsDir + file, 'utf-8');
	console.log(path.basename(file, '.txt'), 'says:');
	greeting.split('\n').forEach(line => console.log('\t', line));
});