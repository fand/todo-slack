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
            todo add    title name
            todo remove title
            todo list
    `);
}

main(...[].slice.apply(process.argv, [2]));
