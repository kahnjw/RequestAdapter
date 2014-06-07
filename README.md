# RequestAdapter

xhrAdapter exposes an interface for interacting with a Javascript XHR object.

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
