# Description
API Project: Request Header Parser Microservice
# Running local

## .env file
create .env file in project root directory.
In .env file specify port number. For example:
```
PORT=3040
```
## installing project
```
npm i
npm start
```
# Example Usage
```
GET /api/whoami
```
will return 

```
{
    ipaddress: "localhost:3040",
    language: "en-US,en;q=0.9",
    software: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.94"
}
```
