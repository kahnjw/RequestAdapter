# xhrAdapter

xhrAdapter exposes an interface for interacting with a Javascript XHR object.

## var xhra = new XhrAdapter(xhr);

Returns an xhra instance.

## var status = xhra.status();

Returns the status code of the object.

## var body = xhra.body();

Returns the responseText of the xhr object.

## var responseobject = xhra.responseobject();

Returns the body as parsed JSON.

## var method = xhra.method();

Returns the method as a string.
