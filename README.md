# RequestAdapter

[![Build Status](https://travis-ci.org/kahnjw/RequestAdapter.png)](https://travis-ci.org/kahnjw/RequestAdapter)

```
npm install requestadapter
```

RequestAdapter exposes an interface for interacting with javascript request response objects on Node and in the browser in a simple, unified way.

## var ra = new RequestAdapter(requestResponse);

Returns an ra instance.

## var status = ra.status();

Returns the status code of the object.

## var text = ra.text();

Returns the text of the response body.

## var responseObject = ra.responseObject();

Returns the body as parsed JSON.
