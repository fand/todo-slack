#!/usr/bin/env node
var addTodo    = require('./src/addTodo');
var removeTodo = require('./src/removeTodo');
var listTodo   = require('./src/listTodo');

function main (command, title, content) {
    if (command === 'add') {
      addTodo(title, content);
    }
    else if (command === 'remove') {
      removeTodo(title);
    }
    else if (command === 'list') {
      listTodo(title);
    }
    else {
      showUsage();
    }
}

function showUsage () {
    console.log(`
Usage:
    todo add    title content
    todo remove title
    todo list
    `.trim());
}

main(process.argv[2], process.argv[3], process.argv[4]);
