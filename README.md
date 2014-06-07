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

## var body = ra.body();

Returns the responseText of the xhr object.

## var responseobject = ra.responseobject();

Returns the body as parsed JSON.

## var method = ra.method();

Returns the method as a string.
