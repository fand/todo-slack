# @fand/todo-slack

## Install

```
$ npm i -g @fand/todo-slack
```

Then put `secret.js` in todo-slack's root directory.

```javascript
// secret.js
module.exports = {
  token    : '__YOUR_SLACK_API_TOKEN__',
  user     : '__YOUR_SLACK_USER_ID__',  
  channels : '#times_foo',
};
```

## Usage

Add TODO

```
$ todo add buy-milk two-bottles
```

Remove TODO

```
$ todo remove buy-milk
```

## License
MIT
