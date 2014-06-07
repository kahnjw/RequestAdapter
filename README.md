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

## var headers = ra.allResponseHeaders();

Returns all the response headers.

_Warning: This method only gives partial adapter support_
* In a Node environment the headers will be an object
* In a browser environment the headers will be a concatenated string

## var responseHeader = ra.responseHeader();

Returns the specified response header.

_Warning: This method only gives partial adapter support_
Header values differ between the browser and Node.

## var rawReqResObject = ra.rawRequestResponse();

Returns the raw request response object instance for direct use.
