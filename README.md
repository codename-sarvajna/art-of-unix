# art-of-unix

> A GitHub App built with [Probot](https://github.com/probot/probot) that A code reviewer bot inspired by Eric S. Raymond&#x27;s \&quot;The Art of Unix Programming,\&quot; automates and enhances code reviews by integrating Unix philosophy principles into your development workflow

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t art-of-unix .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> art-of-unix
```

## Contributing

If you have suggestions for how art-of-unix could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 Inderpal Singh
