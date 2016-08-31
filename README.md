# @fand/todo-slack

## Install

```
$ npm i -g @fand/todo-slack
```

Then put `.todorc` in your home directory.

```javascript
// .todorc
{
  "token"    : "__YOUR_SLACK_API_TOKEN__",
  "user"     : "__YOUR_SLACK_USER_ID__",
  "channels" : "#__CHANNEL_NAME_TO_POST_",
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

or you can abbreviate the title:

```
$ todo remove milk  # `buy-milk` will be removed
```

## License
MIT
