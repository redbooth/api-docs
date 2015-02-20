FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

Welcome to Redbooth’s API Documentation. In this section you will learn how to interact with Redbooth’s application programming interface and how start building your own apps on top of an amazing collaboration platform. We use our own API to serve our web and mobile products and so do the [existing integrations](https://redbooth.com/platform/integrations) with other popular technology solutions.
As you go through the **Basic concepts** and the documentation of the different endpoints, you may want to test how our API works and what can you get from it. We recommend you to go ahead and start playing with the [Interactive Console](https://developer.redbooth.com/console/) to better understand what can be accomplished with each endpoint.

Enjoy Redbooth’s API

## Basic concepts

Our API has been built with high standards and the aim to offer an efficient and pleasant user experience. That is why in most endpoints you will be able to use the same parameters with your different GETs, POSTs, PUTs and DELETEs. The specific characteristics are detailed in each endpoint.

### Authentication

Apps connect to Redbooth using OAuth 2, the standard used by most APIs for authenticating and authorizing users. The following walkthrough will show you how to authenticate a user to use the Redbooth API with OAuth 2. Learn more on our [authentication page](https://developer.redbooth.com/authentication/).

### Parameters

Notice that the verbs POST and PUT expect parameters as a JSON string, whereas the rest of verbs work with standard query strings. You will find examples in each endpoint and verb, click on the "view more info" links to see them!

### Sorting the results

The results of a GET are ordered by ascending id by default. Nevertheless, you will be able to order them as you want using the parameter `order`.

You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements:

- id → order=id-ASC or order=id-DESC
- created_at → order=created_at-ASC or order=created_at-DESC
- updated_at → order=updated_at-ASC or order=updated_at-DESC
- position → order=position-ASC or order=position-DESC

Example → Let’s ask for our conversations ordered by created_at using curl:

```
curl -X GET -H 'Authorization: Bearer Oauth_Access_token' -d 'order=created_at-ASC' -v https://redbooth.com/api/3/conversations
```

This request will give us a JSON with all the conversations to which we have access, conversations sorted by creation date.

### Pagination

By default, all list endpoints will return the first 1,000 results. More results can be retrieved by paginating using the fields: page and per_page.

- page → you choose the page that you want to get.
- per_page → you choose how many results per page do you want to get, with a maximum of 1000.
- page&per_page → having chosen an “x” number of results per_page, you want to see the “y” page.

Example → Let’s ask for the second page of our conversations distributed in 5-result pages using curl:

```
curl -X GET -H 'Authorization: Bearer Oauth_Access_token' -d 'order=id&page=2&per_page=5' -v https://redbooth.com/api/3/conversations
```

This request will give us a JSON with the 5 conversations hosted in the second 5-result page of a series of pages.

### Location

There are location filters that enable you to GET something from somewhere or to PUT it, POST it or DELETE it from somewhere you define. This filters are different for each endpoint but work in a standard way and can be the same in similar endpoints. In some cases, this parameters will be mandatory, since we can’t post, for example, a subtask anywhere in an account, we need to relate it to a task. On the other hand, we won’t find parameters as task_id in the endpoint conversations since there is no relation between them, it is just logic!

Let’s see a GET and a POST example with the conversations endpoint. This are the most used parameters in this endpoint:

- organization_id → The id of the organization to which the element belongs or will belong after posting it.
- project_id → The project’s id to which the element belongs or will belong after posting it.
- user_id → The user’s id to which the element belongs or will belong after posting it.

Example with POST:

```
curl -X POST -H 'Content-type: application/json' -H 'Authorization: Bearer Oauth_Access_token' -d '{"name":"Example title","project_id":"x","type":"Conversation"}' -v https://redbooth.com/api/3/conversations
```

Example with GET:

```
curl -X GET -H 'Authorization: Bearer Oauth_Access_token' -d 'order=id&organization_id=x' -v https://redbooth.com/api/3/conversations
```

### Error codes & Responses

- **200 OK** - Successful request.
- **202 Created** - Successfully created element.
- **400 BadRequest** - Invalid format.
- **422 UnprocessableEntity** - The request is understood but can't be processed because of a conflict or similar.
- **404 NotFound** - No elements found with the given information.
- **401 Unauthorized** - Your credentials don't allow you to access this information or have expired.
- **304 NotModified** - The information hosted in your cache is updated, nothing has changed since your last call.
- **403 AccessDenied** - The request is understood but has been refused. It usually means that you are not allowed to perform this action due to insufficient authorization.
- **500 Internal Server Error**

### Web hooks

Web hooks send you update messages when an element of your organization is created, updated or deleted. Read more about Redbooth's web hooks [here](https://developer.redbooth.com/web-hooks/).

