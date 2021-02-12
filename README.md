# simple-http2-server
A project that demonstrates how to make a simple HTTP/2 server under Node.JS

**Step 1:** Generate the SSL keys:

`openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-privkey.pem -out localhost-cert.pem`

Running the command above will create two files:

`localhost-cert.pem` and `localhost-privkey.pem`

**Step 2:** Move the files to the directory, `certs`

`mv localhost-cert.pem ./certs/localhost-cert.pem`

`mv localhost-privkey.pem ./certs/localhost-privkey.pem`

**Step 3:** In you Chrome browser, enter the following in the address bar...

`chrome://flags/#allow-insecure-localhost`
 
...and enable:

`Allow invalid certificates for resources loaded from localhost.`

**Step 4:** Start the HTTP/2 server

`node index.js`


**Step 5:** In your Chrome browser call:

`https://localhost:3030/stream`

You'll get a continuous stream of random numbers like so:

```text
data: 0.5045979885929588 at: Thu Feb 11 2021 17:00:37 GMT-0800 (Pacific Standard Time)
data: 0.0717682278576206 at: Thu Feb 11 2021 17:00:37 GMT-0800 (Pacific Standard Time)
data: 0.5940154843903955 at: Thu Feb 11 2021 17:00:37 GMT-0800 (Pacific Standard Time)
data: 0.21631392705260577 at: Thu Feb 11 2021 17:00:37 GMT-0800 (Pacific Standard Time)
data: 0.19082386775833893 at: Thu Feb 11 2021 17:00:38 GMT-0800 (Pacific Standard Time)
data: 0.38827042507954945 at: Thu Feb 11 2021 17:00:38 GMT-0800 (Pacific Standard Time)
data: 0.09599617644466196 at: Thu Feb 11 2021 17:00:38 GMT-0800 (Pacific Standard Time)
data: 0.3009100216418814 at: Thu Feb 11 2021 17:00:38 GMT-0800 (Pacific Standard Time)
.
.
.
```
