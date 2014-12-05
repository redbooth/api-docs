FORMAT: 1A
HOST: https://api.mywebsite.com

# API Documentation

Welcome to Redbooth’s API Documentation. In this section you will learn how to interact with Redbooth’s application programming interface and how start building your own apps on top of an amazing collaboration platform. We use our own API to serve our web and mobile products and so do the [existing integrations](https://redbooth.com/platform/integrations) with other popular technology solutions.
As you go through the **Basic concepts** and the documentation of the different endpoints, you may want to test how our API works and what can you get from it. We recommend you to go ahead and start playing with the [Interactive Console](https://developer.redbooth.com/console/) to better understand what can be accomplished with each endpoint.
Enjoy Redbooth’s API

##Basic concepts

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

# Group Activities
This endpoint only offers an index. It enables us to get a list of activities filtered by different parameters
## Activity List [/activities]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {}
            ]

### Get Activities [GET]
Returns a JSON list of activities to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `121`) ... The project’s id to which the element belongs.
    + target_type (optional, string, `task`) ... Activities can be related to a Task, a Conversation, a Person, a Comment an Upload, a Page, a TaskList or a Project.
    + created_from (optional, integer, `12356`) ... This parameter has to be a date in unix time stamp and enables us to filter the activities per date, getting the activities created from a certain date ("created_from":"12345") to the current date or to the created_to parameter's date.
    + created_to (optional, integer, `12345`) ... This parameter has to be a date in unix time stamp and enables us to filter the activities per date, getting the activities created before a certain date ("created_to":"12345").


+ Response 200

    [Activity List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }
# Group Comments
Redbooth’s comments are small peaces of content that form part of tasks and conversations. They can include attachments and enriched text.

## Comment List [/comments]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type":"Comment",
                    "created_at":1403778346,
                    "updated_at":1403778347,
                    "id":39637070,
                    "body":"I also found this document very interesting.",
                    "body_html":"<p>I also found this document very interesting.</p>",
                    "user_id":688561,
                    "project_id":902783,
                    "target_id":13019770,"target_type":"Task",
                    "minutes":null,
                    "upload_ids":[3757011],
                    "assigned_id":null,
                    "previous_assigned_id":null,
                    "due_on":null,
                    "previous_due_on":null,
                    "is_private":false,
                    "previous_is_private":null,
                    "urgent":false,
                    "previous_urgent":false,
                    "email_id":null,
                    "time_tracking_on":"2014-06-26",
                    "status":"new","previous_status":"new"
                },
                {
                    "type":"Comment",
                    "created_at":1403778147,
                    "updated_at":1403778147,
                    "id":39636832,
                    "body":"This may help!",
                    "body_html":"<p>This may help!</p>",
                    "user_id":688561,
                    "project_id":902783,
                    "target_id":13019770,
                    "target_type":"Task",
                    "minutes":null,
                    "upload_ids":[3757001],
                    "assigned_id":null,
                    "previous_assigned_id":null,
                    "due_on":null,
                    "previous_due_on":null,
                    "is_private":false,
                    "previous_is_private":null,
                    "urgent":false,
                    "previous_urgent":false,
                    "email_id":null,
                    "time_tracking_on":"2014-06-26",
                    "status":"new",
                    "previous_status":"new"
                }
            ]

### Get Comments [GET]
Returns a JSON list of comments to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `121`) ... The project’s id to which the element belongs.
    + target_type (optional, string, `task`) ... Comments can be part of a conversation or part of a task.
    + target_id (optional, integer, `121`) ... Id of the element to which they belong. If they are part of a tas, the task's id.

+ Response 200

    [Comment List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Comment [POST]
Posts a new comment with a new id in the location (task_id or conversation_id) that you specify.

+ Parameters

    + target_type (required, string, `task`) ... Comments can be part of a conversation or part of a task.
    + target_id (required, integer, `121`) ... Id of the element to which the comment will belong. If it is going to be part of a task, the task's id.
    + body (optional, string, `Example body`) ... Body of the comment.
    + minutes (optional, integer, `60`) ... This parameter is used to add time spent to a task.
    + time_tracking_on (optional, date, `2014-06-26`) ... Enables us to add time spent in a different date than the current date, that would be the default value.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "target_id":"13019770",
                "target_type":"task",
                "body":"Presentation draft",
                "minutes":"30"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Comment",
                "created_at": 1404125775,
                "updated_at": 1404125775,
                "id": 39864568,
                "body": "Presentation draft.",
                "body_html": "<p>Presentation draft.</p>",
                "user_id": 688561,
                "project_id": 902783,
                "target_id": 13019770,
                "target_type": "Task",
                "minutes": 30,
                "upload_ids":  [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "email_id": null,
                "time_tracking_on": "2014-06-30",
                "status": "new",
                "previous_status": "new"
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Comment [/comment/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type":"Comment",
                "created_at":1403778147,
                "updated_at":1403778147,
                "id":39636832,
                "body":"This may help!",
                "body_html":"<p>This may help!</p>",
                "user_id":688561,
                "project_id":902783,
                "target_id":13019770,
                "target_type":"Task",
                "minutes":null,
                "upload_ids":[3757001],
                "assigned_id":null,
                "previous_assigned_id":null,
                "due_on":null,
                "previous_due_on":null,
                "is_private":false,
                "previous_is_private":null,
                "urgent":false,
                "previous_urgent":false,
                "email_id":null,
                "time_tracking_on":"2014-06-26",
                "status":"new",
                "previous_status":"new"
            }

### Get Comment [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the comment that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Comment][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }



### Update a single Comment [PUT]
Modifies an existing comment, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the comment that we are looking for. It is mandatory and it has to be in the url.
    + target_type (optional, string, `task`) ... Comments can be part of a conversation or part of a task.
    + target_id (optional, integer, `121`) ... Id of the element to which the comment will belong. If it is going to be part of a task, the task's id.
    + body (optional, string, `Example body`) ... Body of the comment.
    + minutes (optional, integer, `60`) ... This parameter is used to add time spent to a task.
    + time_tracking_on (optional, date, `2014-06-26`) ... Enables us to add time spent in a different date than the current date, that would be the default value.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "minutes":"45"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Comment",
                "created_at": 1404125775,
                "updated_at": 1404125795,
                "id": 39864568,
                "body": "Presentation draft.",
                "body_html": "<p>Presentation draft.</p>",
                "user_id": 688561,
                "project_id": 902783,
                "target_id": 13019770,
                "target_type": "Task",
                "minutes": 45,
                "upload_ids":  [],
                "assigned_id": null,
                "previous_assigned_id": null,
                "due_on": null,
                "previous_due_on": null,
                "is_private": false,
                "previous_is_private": null,
                "urgent": false,
                "previous_urgent": false,
                "email_id": null,
                "time_tracking_on": "2014-06-30",
                "status": "new",
                "previous_status": "new"
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No comment found with the given id"
                    }
            }

### Delete a Comment [DELETE]
This endpoint deletes a comment and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the comment that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Comment not found"
            }
# Group Conversations
Redbooth’s conversations are interactive spaces where users can discuss about any subject or topic. Each conversation belongs to a project and once it is created, user’s comments are added to it in custom blocks that may include attached files. Conversations can be public or private.

## Conversation List [/conversations]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1402940016,
                    "updated_at": 1402940018,
                    "id": 1014040,
                    "name": "Conversation 2",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": 56202516
                  },
                  {
                    "type": "Conversation",
                    "created_at": 1400750904,
                    "updated_at": 1402940024,
                    "id": 991093,
                    "name": "Conversation 1",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 5,
                    "is_private": false,
                    "last_activity_id": 53787980
                  }
            ]

### Get Conversations [GET]
Returns a JSON list of conversations to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `121`) ... Id of the project to which the element belongs.

+ Response 200

    [Conversation List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Conversation [POST]
Posts a new conversation with a new id in the location (project_id) that you specify.

+ Parameters

    + project_id (required, integer, `121`) ... Id of the project to which the element will belong after posting it.
    + name (required, string, `Example name`) ... The name that the conversation will have.
    + body (optional, string, `Example body`) ... The body of the conversation.
    + is_private = `false` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the conversation will be public if there is no specification.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title",
                "body":"Example body",
                "project_id":"902783",
                "is_private":"false"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1403118272,
                    "updated_at": 1403118273,
                    "id": 1016324,
                    "name": "Example title",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": null
                }
            ]

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Conversation [/conversations/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                  "type":"Conversation",
                  "created_at":1402940016,
                  "updated_at":1402940018,
                  "id":1014040,
                  "name":"Conversation 2",
                  "project_id":902783,
                  "user_id":688561,
                  "comments_count":1,
                  "is_private":false,
                  "last_activity_id":56202516
                }
            ]

### Get Conversation [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Conversation][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }



### Update a single Conversation [PUT]
Modifies an existing conversation, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (optional, integer, `121`) ... Id of the project to which the element will belong after modifying it.
    + name (optional, string, `Example title modified`) ... The name that the conversation will have.
    + body (optional, string, `Example body modified`) ... The body of the conversation.
    + is_private = `fasle` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the conversation will be public if there is no specification.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title modified",
                "body":"Example body modified",
                "project_id":"902789",
                "is_private":"false"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1403118272,
                    "updated_at": 1403118273,
                    "id": 1016324,
                    "name": "Example title",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": null
                }
            ]

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No conversation found with the given id"
                    }
            }

### Delete a Conversation [DELETE]
This endpoint deletes a conversation and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Conversation not found"
            }
# Group Files
This endpoint enables you to post, modify, get or delete files and folders form your account. The examples posted in the following verbs only affect to folders and repositories. Here's an example of the curl request that should be sent in order to create a real file:

    curl 'https://redbooth.com/api/3/files' \
     -H 'Authorization: Bearer Oauth_Access_token' \
     -F 'asset=@examples/test.txt' \
     -F 'project_id=12345' \
     -F 'is_dir=false' \
     -F 'name=test.txt' \
     --compressed -v

*Where  -F 'asset=@examples/test.txt'\ is the path to the local file


## File List [/files]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.205826

    + Body

            [
               {
                  "created_at":1403778342,
                  "updated_at":1403778347,
                  "id":3698074,
                  "name":"20130704094446.pdf",
                  "backend":"redbooth",
                  "project_id":902783,
                  "parent_id":null,
                  "backend_id":"3757011",
                  "is_dir":false,
                  "is_downloadable":true,
                  "is_previewable":true,
                  "is_private":false,
                  "mime_type":"application/pdf",
                  "public_token":null,
                  "pinned":false,
                  "size":155049,
                  "user_id":688561,
                  "type":"file"
               },
               {
                  "created_at":1403778133,
                  "updated_at":1403778147,
                  "id":3698064,
                  "name":"blog examples.pdf",
                  "backend":"redbooth",
                  "project_id":902783,
                  "parent_id":null,
                  "backend_id":"3757001",
                  "is_dir":false,
                  "is_downloadable":true,
                  "is_previewable":true,
                  "is_private":false,
                  "mime_type":"application/pdf",
                  "public_token":null,
                  "pinned":false,
                  "size":20597,
                  "user_id":688561,
                  "type":"file"
               },
               {
                  "created_at":1403542303,
                  "updated_at":1403542311,
                  "id":3672677,
                  "name":"Screen Shot 2014-06-23 at 1.27.54 PM.png",
                  "backend":"redbooth",
                  "project_id":902783,
                  "parent_id":null,
                  "backend_id":"3732670",
                  "is_dir":false,
                  "is_downloadable":true,
                  "is_previewable":true,
                  "is_private":false,
                  "mime_type":"image/png",
                  "public_token":null,
                  "pinned":false,
                  "size":179300,
                  "user_id":688561,
                  "type":"file"
               }
            ]

### Get Files [GET]
Returns a JSON list of files and folders to which the user has access. This index can be filtered and ordered with the listed parameters.

+ Parameters

    + order = `id_DESC` (optional, string, `created_at_ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1295`) ... Id of the organization to which the element belongs.
    + project_id (optional, integer, `18921`) ... Id of the project to which the file belongs.
    + target_id (optional, integer, `18921`) ... Id of the element to which the file belongs.
    + pinned (optional, boolean_param, `true`) ... Files can be pinned or not, check your pins in the files section of each project!
    + target_type (optional, string, `task`) ... Type of the host element: task or conversation.
    + type (optional, string, `file`) This enables you to filter files and folders, it can be =file or =folder.


+ Response 200

    [File List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New File [POST]

Posts a new repository or folder with a new id in the location (project_id, target_id,parent_id) that you specify. When posting an element, we will be able to determine some of his characteristics via parameters and some parameters will be mandatory.

+ Parameters

    + project_id (required, integer, `18921`) ... Id of the project to which the file will belong.
    + target_id (optional, integer, `18921`) ... Id of the element to which the file will belong.
    + parent_id (optional, integer, `18921`) ... Id of the folder to which the file will belong after being created, it can be null.
    + pinned = false (optional, boolean_param, `true`) ... Files can be pinned or not, check your pins in the files section of each project!
    + is_dir = false (optional, string, `true`) In this endpoint you can create both files and folders, so this parameter can be =true for folders or =false for files.
    + name (required, string, `Firs_folder`) ... The name that the file will have.
    + backend (required, string, `redbooth`) ... Use `redbooth` by default. If you know the id of a file that you have in another backend and you want to have it in Redbooth, then choose that backend (oogle, dropbox, box, copy, signnow) and make sure to send the next parameter (backend_id) in your call to the API. This will create an image of the file linked to the specified file in the other backend.
    + backend_id (optional, integer, `1234`) ... Id of the element that you want to attach. Backend <> redbooth required.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {  
                "name":"First_folder",
                "backend":"redbooth",
                "project_id":902783,
                "is_dir":"true"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "created_at":1409852563,
                "updated_at":1409852563,
                "id":4647893,
                "name":"First_folder",
                "backend":"redbooth",
                "project_id":902783,
                "parent_id":null,
                "backend_id":"220554",
                "is_dir":true,
                "is_downloadable":false,
                "is_previewable":false,
                "is_private":false,
                "mime_type":"text/directory",
                "public_token":null,
                "pinned":true,
                "size":0,
                "user_id":688561,
                "type":"file"
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## File [/files/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                   "created_at":1403778342,
                   "updated_at":1403778347,
                   "id":3698074,
                   "name":"20130704094446.pdf",
                   "backend":"redbooth",
                   "project_id":902783,
                   "parent_id":null,
                   "backend_id":"3757011",
                   "is_dir":false,
                   "is_downloadable":true,
                   "is_previewable":true,
                   "is_private":false,
                   "mime_type":"application/pdf",
                   "public_token":null,
                   "pinned":false,
                   "size":155049,
                   "user_id":688561,
                   "type":"file"
                }
            ]

### Get File [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the file that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [File][]

+ Response 404

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Not Found"
                      }
            }

### Update a single File [PUT]
Modifies an existing file, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the file that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (required, integer, `18921`) ... Id of the project to which the file will belong.
    + target_id (optional, integer, `18921`) ... Id of the element to which the file will belong.
    + parent_id (optional, integer, `18921`) ... Id of the folder to which the file will belong after being created, it can be null.
    + pinned = false (optional, boolean_param, `true`) ... Files can be pinned or not, check your pins in the files section of each project!
    + is_dir = false (optional, string, `true`) In this endpoint you can create both files and folders, so this parameter can be =true for folders or =false for files.
    + name (required, string, `Firs_folder`) ... The name that the file will have.
    + backend (required, string, `redbooth`) ... Use `redbooth` by default. If you know the id of a file that you have in another backend and you want to have it in Redbooth, then choose that backend (oogle, dropbox, box, copy, signnow) and make sure to send the next parameter (backend_id) in your call to the API. This will create an image of the file linked to the specified file in the other backend.
    + backend_id (optional, integer, `1234`) ... Id of the element that you want to attach. Backend <> redbooth required.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"First_folder_modified",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "created_at":1409852563,
                "updated_at":1409855146,
                "id":4647893,
                "name":"First_folder_modified",
                "backend":"redbooth",
                "project_id":902783,
                "parent_id":null,
                "backend_id":"220554",
                "is_dir":true,
                "is_downloadable":false,
                "is_previewable":false,
                "is_private":false,
                "mime_type":"text/directory",
                "public_token":null,
                "pinned":false,
                "size":0,"user_id":688561,
                "type":"file"
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No file found with the given id"
                    }
            }

### Delete a File [DELETE]
This verb deletes a file and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the file that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "File not found"
            }
# Group User information
This endpoint gives you information about your user or the user related to the authentication token that you are using.

## User information [/me]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

              {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Eduardo",
                "last_name":"Rodés Pons",
                "email":"eduardo.rodes@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/4573567/thumb.png?245724154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/34536/profile.png?8756536",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?24755735",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f008db31b3b0eb98dd3ce35a0","calendar_token":"bb9fd6e48699071bd936e7171233fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              }

### Get User information [GET]
Returns a JSON with all the user information.

+ Parameters

+ Response 200

    [User information][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Update your information [PUT]
Modifies your user information, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Your user id. It is mandatory and it has to be in the url.
    + first_name (optional, string, `Eduardo`) ... First name of your user.
    + last_name (optional, string, `Rodés`) ... Last name of your user.
    + email (optional, string, `eduardo.rodes@redbooth.com`) ... Email address of your user.
    + password (optional, string, 'secretpassword2') ... New password.
    + password_confirmation (optional, string, 'secretpassword2') ... Confirmation of the new password. It will be required if you're trying to change your user's account password.
    + old_password (optional, string, 'secretpassword') ... Old password. It will be required if you're trying to change your user's account password.


+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "first_name":"Edu",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Edu",
                "last_name":"Rodés Pons",
                "email":"eduardo.rodes@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/4573567/thumb.png?245724154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/34536/profile.png?8756536",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?24755735",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f008db31b3b0eb98dd3ce35a0","calendar_token":"bb9fd6e48699071bd936e7171233fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No user found with the given id"
                    }
            }

### Delete your user [DELETE]
This endpoint deletes your user and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Your user id. It is mandatory and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "User not found"
            }


# Group Memberships
Memberships is a bridge endpoint that gathers users relating them with organizations, their role in those, etc. One user can have different memberships in different organizations, those are gathered in the endpoint memberships as different elements.

## Membership List [/memberships]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Membership",
                    "id": 583561,
                    "user_id": 749971,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 583554,
                    "user_id": 749993,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 581507,
                    "user_id": 748080,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 581488,
                    "user_id": 748122,
                    "organization_id": 364563,
                    "role": admin
                }
            ]

### Get Memberships [GET]
Returns a JSON list of memberships in the different organizations to which the user has access. Notice that that list will have at least one membership per user to which the requester is related + the different memberships that himself may represent in different organizations.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... Id of the organization to which the element belongs.
    + user_id (optional, integer, `12341`) ... Id of the user who created the element.
    + role (optional, string, `participant`) ... A person can have different roles: external, participant, admin.

+ Response 200

    [Membership List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Membership [POST]
Creates a new membership with a new id in the location (organization_id) that you specify. Note that creating a membership is creating a user-to-organization relationship, it is inviting a user to an organization and that is why his user_id will be essential.

+ Parameters

    + organization_id (required, integer, `121`) ... Id of the organization to which the element will belong.
    + user_id (required, integer, `12341`) ... Id of the user who will own the membership.
    + role (optional, string, `observer`) ... A membership can have different roles: external, participant, admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "user_id":"749971",
                "project_id":"902783",
                "role":"admin"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": admin
            }


+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Membership [/memberships/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": participant
            }

### Get Membership [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is mandatory and it has to be in the url.

+ Response 200

    [Membership][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Membership [PUT]
Modifies an existing person, id is mandatory.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is MANDATORY and it has to be in the url.
    + organization_id (required, integer, `121`) ... Id of the project to which the element will belong.
    + user_id (required, integer, `12341`) ... Id of the user who owns the membership.
    + role (optional, string, `observer`) ... A person can have different roles: external, participant, admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "role":"participant"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": participant
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No membership found with the given id"
                    }
            }

### Delete a membership [DELETE]
This endpoint deletes a membership and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "No membership found with the given id"
            }
# Group Notes
Redbooth’s notes are shared pieces of contet taht can include files, images and other resources. They can be publicly shared and easily printed.

## Note List [/notes]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Page",
                    "created_at": 1403542336,
                    "updated_at": 1403542336,
                    "id": 1161133,
                    "name": "Example Note 2",
                    "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <em>sociosqu ad litora torquent</em> per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p><p><br>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p><p><br>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p><p><br>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <u>Morbi lacinia molestie dui</u>. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. </p><hr><p>Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. <del>Vestibulum nisi lectus,</del> commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. </p><p><span data-id="3732670" data-filename="Screen Shot 2014-06-23 at 1.27.54 PM.png"></span></p>",
                    "project_id": 902783,
                    "position": 0,
                    "permalink": "example-note-2",
                    "is_private": false,
                    "shared": false,
                    "token": "c43a25255a6ae253",
                    "user_id": 688561,
                    "updated_by_id": 688561,
                    "metadata":  {},
                    "deleted": false

                  },
                  {
                    "type": "Page",
                    "created_at": 1403542310,
                    "updated_at": 1403542310,
                    "id": 1161132,
                    "name": "Example Note 1",
                    "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <em>sociosqu ad litora torquent</em> per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p><p><br>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p><p><br>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a <strong>tellus consequat</strong> imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p><p><br>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <u>Morbi lacinia molestie dui</u>. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. </p><p></p><hr><p>Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. <del>Vestibulum nisi lectus,</del> commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. </p><p><span data-id="3732670" data-filename="Screen Shot 2014-06-23 at 1.27.54 PM.png"></span></p>",
                    "project_id": 902783,
                    "position": 1,
                    "permalink": "example-note-1",
                    "is_private": false,
                    "shared": false,
                    "token": "44f6d5f932f502e9",
                    "user_id": 688561,
                    "updated_by_id": 688561,
                    "metadata":  {},
                    "deleted": false
                  }
            ]

### Get Notes [GET]
Returns a JSON list of notes to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `121`) ... Id of the project to which the element belongs.
    + user_id (optional, integer, `12341`) ... Id of the user who created the element.

+ Response 200

    [Note List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Note [POST]
Posts a new note with a new id in the location (project_id) that you specify.

+ Parameters

    + project_id (required, integer, `121`) ... Id of the project to which the element will belong after posting it.
    + name (required, string, `Example name`) ... The name that the note will have.
    + content (optional, string, `Example content`) ... The body of the note.
    + is_private = `false` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the note will be public if there is no specification.
    + shared = `false` (optional, string, `true`) ... Notes can be publicly shared and accessible to externals.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title",
                "content":"Example content.",
                "project_id":"902783",
                "shared":"true"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type":"Page",
                    "created_at":1403544523,
                    "updated_at":1403544523,
                    "id":1161200,
                    "name":"Example title",
                    "content":"Example content.",
                    "project_id":902783,
                    "position":4,
                    "permalink":"example-title-xcbj4",
                    "is_private":false,
                    "shared":true,
                    "token":"92fb8132c793fd33",
                    "user_id":688561,
                    "updated_by_id":688561,
                    "metadata":{},
                    "deleted":false
                }
            ]

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Note [/notes/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Page",
                    "created_at": 1403542310,
                    "updated_at": 1403542310,
                    "id": 1161132,
                    "name": "Example Note 1",
                    "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <em>sociosqu ad litora torquent</em> per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p><p><br>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p><p><br>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a <strong>tellus consequat</strong> imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p><p><br>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <u>Morbi lacinia molestie dui</u>. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. </p><p></p><hr><p>Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. <del>Vestibulum nisi lectus,</del> commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. </p><p><span data-id="3732670" data-filename="Screen Shot 2014-06-23 at 1.27.54 PM.png"></span></p>",
                    "project_id": 902783,
                    "position": 1,
                    "permalink": "example-note-1",
                    "is_private": false,
                    "shared": false,
                    "token": "44f6d5f932f502e9",
                    "user_id": 688561,
                    "updated_by_id": 688561,
                    "metadata":  {},
                    "deleted": false
                }
            ]

### Get Note [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the note that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Note][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Note [PUT]
Modifies an existing note, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the note that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (optional, integer, `121`) ... Id of the project to which the element will belong after modifying it.
    + name (optional, string, `Example title modified`) ... The name that the note will have.
    + body (optional, string, `Example content modified`) ... The content of the note.
    + is_private = `fasle` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the conversation will be public if there is no specification.
    + shared = `false` (optional, string, `true`) ... Notes can be publicly shared and accessible to externals.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title modified",
                "content":"Modified content",
                "project_id":"902783",
                "shared":"true"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type":"Page",
                    "created_at":1403543947,
                    "updated_at":1403545731,
                    "id":1161185,
                    "name":"Example title modified",
                    "content":"Modified content",
                    "project_id":902783,
                    "position":4,
                    "permalink":"example-title",
                    "is_private":false,
                    "shared":true,
                    "token":"f43c412bca1a9ddc",
                    "user_id":688561,
                    "updated_by_id":688561,
                    "metadata":{},
                    "deleted":false
                }
            ]

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No note found with the given id"
                    }
            }

### Delete a Note [DELETE]
This endpoint deletes a note and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the note that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Note not found"
            }
# Group Notifications
Redbooth's notifications are automatically generated when certain activities take place. Their goal is to inform each user of the changes going on in the projects or tasks in which he is involved.

## Notification List [/notifications]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

           [
                {
                    "type": "DenormalizedNotification",
                    "created_at": 1403793458,
                    "updated_at": 1403793458,
                    "id": 177943870,
                    "read": false,
                    "user_id": 688561,
                    "person_id": 1967294,
                    "sent": false,
                                    "watching": true,
                    "activity_id": 57278492,
                    "title": "Bulk import issues list",
                    "body": "please also take out @web.de and @gmx.de organization domains. they are the main German email hosts.",
                    "target_type": "Comment",
                    "target_id": 39660329,
                    "comment_target_type": "Task",
                    "comment_target_id": 12695686,
                    "assigned_id": null,
                    "previous_assigned_id": null,
                    "due_on": null,
                    "previous_due_on": null,
                    "urgent": false,
                    "previous_urgent": false,
                    "time_tracking_on": "2014-06-26"
                },
                {
                    "type": "DenormalizedNotification",
                    "created_at": 1404157425,
                    "updated_at": 1404157425,
                    "id": 179355519,
                    "read": false,
                    "user_id": 688561,
                    "person_id": 1908979,
                    "sent": false,
                    "watching": true,
                    "activity_id": 57627951,
                    "title": "Bulk import issues list",
                    "body": "please also take out @web.de and @gmx.de organization domains. they are the main German email hosts.",
                    "target_type": "Comment",
                    "target_id": 39922546,
                    "comment_target_type": "Task",
                    "comment_target_id": 13266627,
                    "assigned_id": null,
                    "previous_assigned_id": null,
                    "due_on": null,
                    "previous_due_on": null,
                    "urgent": false,
                    "previous_urgent": false,
                    "time_tracking_on": "2014-06-26"
                }
            ]

### Get Notifications [GET]
Returns a JSON list of notifications to be read by the user.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.

+ Response 200

    [Notification List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Notification [POST]
As said at the begining of this section, notifications are poted automatically and cannot be generated by a user or administrator.

## Notification [/notifications/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "DenormalizedNotification",
                "created_at": 1403793458,
                "updated_at": 1403793458,
                "id": 177943870,
                "read": false,
                "user_id": 688561,
                "person_id": 1967294,
                "sent": false,
                "watching": true,
                "activity_id": 57278492,
                "title": "Bulk import issues list",
                "body": "please also take out @web.de and @gmx.de organization domains. they are the main German email hosts.",
                "target_type": "Comment",
                "target_id": 39660329,
                "comment_target_type": "Task",
                "comment_target_id": 12695686,
                "assigned_id": null,
                "previous_assigned_id": null,
                "due_on": null,
                "previous_due_on": null,
                "urgent": false,
                "previous_urgent": false,
                "time_tracking_on": "2014-06-26"
            }

### Get Notification [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the note that we are looking for. It is mandatory and it has to be in the url.

+ Response 200

    [Notification][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Organization [PUT]
The only thing that can change in a notification is that it may have been read.
+ Parameters

    + id (required, integer, `121879`) ... Id of the notification that we are looking for. It is mandatory and it has to be in the url.
    + read (required, string, `true`) ... State of the notification, read or not.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "read":"true",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                masdjglk
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No organization found with the given id"
                    }
            }

### Delete a Notification [DELETE]
This endpoint deletes a notification and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the notification that we are looking for. It is mandatory and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Organization not found"
            }
# Group Organizations
Redbooth's organizations are workspaces where teams meet to collaborate and work in an efficient way, they are the top level hierarchy scope in the product. Under an Organization, you will be able to create projects and invite members (users) to collaborate on them.

## Organization List [/organizations]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Organization",
                    "created_at": 1379606967,
                    "updated_at": 1399803155,
                    "id": 364563,
                    "name": "SHAKYBUSH",
                    "permalink": "busshake-qjira",
                    "domain": "",
                    "shortcut_apps": null,
                    "settings":
                        {
                            "allow_comment_deletion": true,
                            "org_size": 50,
                            "org_field": "other",
                            "omit_email_processing": false
                        },
                    "omit_email_processing": false,
                    "product": "pro1y",
                    "product_name": "annual pro",
                    "feature_level": "freeu",
                    "subscription_id": 7151,
                    "seats": 15,
                    "remaining_users": 3,
                    "available_users": 15,
                    "used_users": 12,
                    "remaining_projects": 0,
                    "available_projects": 0,
                    "used_projects": 5,
                    "metadata":  {},
                    "square_logo_url": "/images/logos/square/missing.png",
                    "top_logo_url": "/images/logos/top/missing.png",
                    "has_logo": false,
                    "is_pro": true
                },
                {
                    "type": "Organization",
                    "created_at": 1386602202,
                    "updated_at": 1403431573,
                    "id": 404980,
                    "name": "AGENDA: E. R.",
                    "permalink": "agenda-e-r",
                    "domain": null,
                    "shortcut_apps": null,
                    "settings":
                        {
                            "allow_comment_deletion": true
                        },
                    "omit_email_processing": false,
                    "product": "pro1y",
                    "product_name": "annual pro",
                    "feature_level": "pro1y",
                    "subscription_id": 9572,
                    "seats": 5,
                    "remaining_users": 3,
                    "available_users": 5,
                    "used_users": 2,
                    "remaining_projects": 0,
                    "available_projects": 0,
                    "used_projects": 3,
                    "metadata":  {},
                    "square_logo_url": "/images/logos/square/missing.png",
                    "top_logo_url": "/images/logos/top/missing.png",
                    "has_logo": false,
                    "is_pro": true
                }
            ]

### Get Organizations [GET]
Returns a JSON list of organizaitons to which the user is related.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.

+ Response 200

    [Organization List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Organization [POST]
Posts a new organization with a new id.

+ Parameters

    + name (required, string, `My Organization`) ... The name that the organization will have.
    + permalink = `false` (optional, string, 'my_organization') ... Permalink the organization will have.
    + domain = `false` (optional, string, 'myorg.com') ... Domain the organization will have.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"My Organization",
                "permalink":"my_organization",
                "domain":"myorg.com"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Organization",
                "created_at": 1404171216,
                "updated_at": 1404171216,
                "id": 477515,
                "name": "My Organization",
                "permalink": "my_organization",
                "domain": "myorg.com",
                "shortcut_apps": null,
                "settings":  
                    {
                        "allow_comment_deletion": true
                    },
                "omit_email_processing": false,
                "product": null,
                "product_name": "free",
                "feature_level": "freeu",
                "subscription_id": null,
                "seats": 5,
                "remaining_users": 4,
                "available_users": 5,
                "used_users": 1,
                "remaining_projects": 5,
                "available_projects": 5,
                "used_projects": 0,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "description": null
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Organization [/organizations/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Organization",
                "created_at": 1379606967,
                "updated_at": 1399803155,
                "id": 364563,
                "name": "SHAKYBUSH",
                "permalink": "busshake-qjira",
                "domain": "",
                "shortcut_apps": null,
                "settings":
                    {
                        "allow_comment_deletion": true,
                        "org_size": 50,
                        "org_field": "other",
                        "omit_email_processing": false
                    },
                "omit_email_processing": false,
                "product": "pro1y",
                "product_name": "annual pro",
                "feature_level": "freeu",
                "subscription_id": 7151,
                "seats": 15,
                "remaining_users": 3,
                "available_users": 15,
                "used_users": 12,
                "remaining_projects": 0,
                "available_projects": 0,
                "used_projects": 5,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "is_pro": true
            }

### Get Organization [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the organization that we are looking for. It is mandatory and it has to be in the url.

+ Response 200

    [Organization][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Organization [PUT]
Modifies an existing organization, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the organization that we are looking for. It is MANDATORY and it has to be in the url.
    + name (required, string, `My Organization`) ... The name that the organization will have.
    + permalink = `false` (optional, string, 'my_organization') ... Permalink the organization will have.
    + domain = `false` (optional, string, 'myorg.com') ... Domain the organization will have.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "domain":"modified_domain.com",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                "type": "Organization",
                "created_at": 1404171216,
                "updated_at": 1404171556,
                "id": 477515,
                "name": "My Organization",
                "permalink": "modified_domaincom",
                "domain": "myorg.com",
                "shortcut_apps": null,
                "settings":  
                    {
                        "allow_comment_deletion": true
                    },
                "omit_email_processing": false,
                "product": null,
                "product_name": "free",
                "feature_level": "freeu",
                "subscription_id": null,
                "seats": 5,
                "remaining_users": 4,
                "available_users": 5,
                "used_users": 1,
                "remaining_projects": 5,
                "available_projects": 5,
                "used_projects": 0,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "description": null
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No organization found with the given id"
                    }
            }

### Delete a Organization [DELETE]
This endpoint deletes a organization and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the organization that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Organization not found"
            }
# Group People
People is a bridge endpoint that gathers users relating them with projects, their role in those, etc. One user can be different persons in different projects, those characters are gathered in the endpoint people as single individuals.

## People List [/people]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Person",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 2612487,
                    "user_id": 688561,
                    "project_id": 1224630,
                    "role": 3,
                    "source_user_id": null,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
                {
                    "type": "Person",
                    "created_at": 1402071446,
                    "updated_at": 1402071446,
                    "id": 2561652,
                    "user_id": 688561,
                    "project_id": 1203324,
                    "role": 2,
                    "source_user_id": 688561,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
                {
                    "type": "Person",
                    "created_at": 1401111756,
                    "updated_at": 1401111756,
                    "id": 2525598,
                    "user_id": 688561,
                    "project_id": 1187461,
                    "role": 2,
                    "source_user_id": 688561,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
            ]

### Get People [GET]
Returns a JSON list of people in the different projects to which the user has access. Notice that that list will have at least one person per user to which the requester is related + the different people that himself may represent in different projects.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, string, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, string, `3`) ... You choose the page that you want to get.
    + organization_id (optional, string, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, string, `121`) ... The project’s id to which the element belongs.
    + user_id (optional, string, `12341`) ... Id of the user who created the element.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Response 200

    [People List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Person [POST]
Creates a new person with a new id in the location (project_id) that you specify. Note that creating a person is creating a user-to-project relationship, it is inviting a user to a project and that is why his user_id will be essential.

+ Parameters

    + project_id (required, string, `121`) ... The project’s id to which the element will belong.
    + user_id (required, string, `12341`) ... Id of the user that will embody this person.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "user_id":"128384",
                "project_id":"902783",
                "role":"participant"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Person",
                "created_at": 1403611566,
                "updated_at": 1403611566,
                "id": 2612487,
                "user_id": 128384,
                "project_id": 902783,
                "role": participant,
                "source_user_id": null,
                "watch_new_task": false,
                "watch_new_conversation": false,
                "watch_new_page": false,
                "instant_notifications": true,
                "digest": 4
            }


+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Person [/people/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                    "type": "Person",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 2612487,
                    "user_id": 688561,
                    "project_id": 1224630,
                    "role": 3,
                    "source_user_id": null,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                }

### Get Person [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + project_id (optional, string, `121`) ... The project’s id to which the element belongs.

+ Response 200

    [Person][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Person [PUT]
Modifies an existing person, id is mandatory.

+ Parameters

    + project_id (required, string, `121`) ... The project’s id to which the element will belong.
    + user_id (required, string, `12341`) ... Id of the user that will embody this person.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "role":"admin"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Person",
                "created_at": 1403611566,
                "updated_at": 1403611566,
                "id": 2612487,
                "user_id": 128384,
                "project_id": 902783,
                "role": admin,
                "source_user_id": null,
                "watch_new_task": false,
                "watch_new_conversation": false,
                "watch_new_page": false,
                "instant_notifications": true,
                "digest": 4
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No person found with the given id"
                    }
            }

### Delete a person [DELETE]
This endpoint deletes a person and can be used just once.

+ Parameters

    + id (required, string, `1234`) ... Id of the person that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "No person found with the given id"
            }
# Group Projects
Redbooth’s projects are interactive spaces that host tasks, conversations, notes and files. The members of a project can have access or not to those elements depending on their rights & permissions. Those, determine to the power of users to do actions such as deleting tasks, modifying them fifteen minutes after they have been created, etc.

## Project List [/projects]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Project",
                    "created_at": 1403611776,
                    "updated_at": 1403611776,
                    "id": 1224634,
                    "permalink": "example-project-2-dj83v",
                    "organization_id": 364563,
                    "archived": false,
                    "name": "Example Project 2",
                    "tracks_time": false,
                    "public": null,
                    "publish_pages": false,
                    "settings":  {
                    "include_weekend_days": false
                    },
                    "deleted": false
                },
                {
                    "type": "Project",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 1224630,
                    "permalink": "example-project-1-s79iz",
                    "organization_id": 364563,
                    "archived": false,
                    "name": "Example Project 1",
                    "tracks_time": false,
                    "public": null,
                    "publish_pages": false,
                    "settings":  {
                    "include_weekend_days": false
                    },
                    "deleted": false
                }
            ]

### Get Projects [GET]
Returns a JSON list of projects to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + user_id (optional, integer, `12341`) ... Filters your projects taking the ones to which a user with a given user_id belongs.
    + archived(optional, string, `false`) Projects can be archived when an administrator decides that the project has finished. This parameter can be =true or =false.

+ Response 200

    [Project List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Project [POST]
Posts a new project with a new id in the location (project_id) that you specify.

+ Parameters

    + organizations_id (required, integer, `121`) ... Id of the organization to which the project will belong after posting it.
    + name (required, string, `Example name`) ... The name that the project will have.
    + archived `false` (optional, string, `true`) ... Projects can be archived when an administrator decides that the project has finished. This parameter can be =true or =false. It doesn’t make much sense to post an archived project but here’s the possibility to do it!
    + tracks_time = `false` (optional, string, `true`) ... This parameter can be true/false to enable/disable time tracking.
    + public = `true` (optional, string, `true`) ... This parameter is used to manage rights & permissions. It can be =true or =false and it determines if the project can be viewed by anyone in the organization or not.
    + publish_pages = `false` (optional, string, 'true') ... This parameter enables/disables the usage of public notes in a project.


+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title",
                "organization_id":"364563",
                "publish_pages":true,
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type":"Project",
                    "created_at":1403618899,
                    "updated_at":1403618899,
                    "id":1224804,
                    "permalink":"example-title",
                    "organization_id":364563,
                    "archived":false,
                    "name":"Example title",
                    "tracks_time":false,
                    "public":null,
                    "publish_pages":true,
                    "settings":{"include_weekend_days":false},
                    "deleted":false}
            ]

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Project [/projects/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Project",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 1224630,
                    "permalink": "example-project-1-s79iz",
                    "organization_id": 364563,
                    "archived": false,
                    "name": "Example Project 1",
                    "tracks_time": false,
                    "public": null,
                    "publish_pages": false,
                    "settings":  {
                    "include_weekend_days": false
                    },
                    "deleted": false
                }
            ]

### Get Project [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the project that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Project][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single Project [PUT]
Modifies an existing project, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the project that we are looking for. It is MANDATORY and it has to be in the url.
    + organizations_id (required, integer, `121`) ... Id of the organization to which the project will belong after modifying it.
    + name (required, string, `Example name`) ... The name that the project will have.
    + archived `false` (optional, string, `true`) ... Projects can be archived when an administrator decides that the project has finished. This parameter can be =true or =false. It doesn’t make much sense to post an archived project but here’s the possibility to do it!
    + tracks_time = `false` (optional, string, `true`) ... This parameter can be true/false to enable/disable time tracking.
    + public = `true` (optional, string, `true`) ... This parameter is used to manage rights & permissions. It can be =true or =false and it determines if the project can be viewed by anyone in the organization or not.
    + include_weekend_days = `false` (optional, string, 'true') ... As it name ponts, this parameter is used tu ser the week lenght, including or not weekend days in it.
    + publish_pages = `false` (optional, string, 'true') ... This parameter enables/disables the usage of public notes in a project.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title modified",
                "tracks_time":"true",
                "public":"true"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                "type":"Project",
                "created_at":1403618899,
                "updated_at":1403621134,
                "id":1224804,
                "permalink":"example-title",
                "organization_id":364563,
                "archived":false,
                "name":"Example title modified",
                "tracks_time":true,
                "public":true,
                "publish_pages":false,
                "settings":{"include_weekend_days":false
                },
                "deleted":false}
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No project found with the given id"
                    }
            }

### Delete a Project [DELETE]
This endpoint deletes a project and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the project that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Note not found"
            }
# Group Search
Search is a view only endpoint that will enable you to find anything you need from your Redbooth account. The variety of filters available and our optimized aplication empower this efficient and powerful search engine.

## Search [/search]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

              {
                 "type":"Task",
                 "created_at":1409438094,
                 "updated_at":1409438204,
                 "id":14357119,
                 "name":"You've found Wally",
                 "task_list_id":2398710,
                 "comments_count":1,
                 "assigned_id":null,
                 "is_private":false,
                 "project_id":902783,
                 "urgent":false,
                 "user_id":688561,
                 "position":0,
                 "last_activity_id":63465048,
                 "record_conversion_type":null,
                 "record_conversion_id":null,
                 "metadata":{

                 },
                 "subtasks_count":0,
                 "resolved_subtasks_count":0,
                 "watcher_ids":[688561],
                 "description":"You've found Wally",
                 "description_html":"<p>\nYou've found Wally</p>",
                 "description_updated_by_user_id":688561,
                 "updated_by_id":688561,
                 "deleted":false,
                 "status":"new",
                 "due_on":null
              }

### Get Search [GET]
Returns a JSON with the results of your search.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + project_id (optional, integer, `121`) ... Id of the project to which the element belongs.
    + type (optional, string, `task`) ... Type of element: conversations, tasks, pages (notes), files, unarchived_tasks, archived_tasks
    + query (optional, string, `Wally`) ... Text that describes what are we looking for.**Tiene que tener más de 3 letras

+ Response 200

    [Search][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }
# Group Subtasks
Subtasks enable users to build checklists inside tasks. They are small subsets of those and their architecture is very simple, since they are custom text spaces with an associated stage: to do or done.


## Subtasks List [/subtasks]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.205826

    + Body

            [
                {
                    "created_at": 1403625243,
                    "updated_at": 1403625243,
                    "type": "Subtask",
                    "id": 479537,
                    "name": "Review by Alexz",
                    "resolved": false,
                    "position": 3,
                    "task_id": 13019770
                },
                {
                    "created_at": 1403625230,
                    "updated_at": 1403625230,
                    "type": "Subtask",
                    "id": 479534,
                    "name": "Slide design",
                    "resolved": false,
                    "position": 2,
                    "task_id": 13019770
                },
                {
                    "created_at": 1403625230,
                    "updated_at": 1403625230,
                    "type": "Subtask",
                    "id": 479533,
                    "name": "Content",
                    "resolved": false,
                    "position": 2,
                    "task_id": 13019770
                },
                {
                    "created_at": 1403625190,
                    "updated_at": 1403625190,
                    "type": "Subtask",
                    "id": 479529,
                    "name": "Cover",
                    "resolved": false,
                    "position": 1,
                    "task_id": 13019770
                }
            ]

### Get Subtasks [GET]
Returns a JSON list of subtasks that belong to a subtask with certain id.

+ Parameters

    + task_id (required, integer, `35456`) ... Id of the task that hosts the subtasks.
    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.

+ Response 200

    [Subtasks List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Subtask [POST]
Posts a new subtask with a new id in the location (task_id) that you specify. When posting an element, we will be able to determine some of his characteristics via parameters and some parameters will be mandatory. On the other hand, all the order parameters doesn’t have much sense in here.

+ Parameters

    + task_id (required, integer, `35456`) ... Id of the task that will host the subtask.
    + name (required, string, `Example name`) ... The name that the subtask will have.
    + resolved = `false` (optional, string, `true`) ... This parameter determines if the subtask has been resoved or not.
    + position (optional, integer, `1`) ... Position of the subtask in the subtask list, inside the task.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "task_id":"12445",
                "name":"Example subtask 2",
                "position":"2"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "created_at":1403684562,
                "updated_at":1403684562,
                "type":"Subtask",
                "id":482621,
                "name":"Example subtask 2",
                "resolved":false,
                "position":2,
                "task_id":13074981
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Subtask [/subtasks/{id}]

### Update a single Subtask [PUT]
Modifies an existing subtask, purpose for which the id of the subtask that wants to be modified is strictly mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the subtask that we are looking for. It is MANDATORY and it has to be in the url.
    + task_id (required, integer, `35456`) ... Id of the task that will host the subtask.
    + name (required, string, `Example name`) ... The name that the subtask will have.
    + resolved = `false` (optional, string, `true`) ... This parameter determines if the subtask has been resoved or not.
    + position (optional, integer, `1`) ... Position of the subtask in the subtask list, inside the task.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "resolved":true,
                "task_id":13074981
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "created_at":1403684562,
                "updated_at":1403685527,
                "type":"Subtask",
                "id":482621,
                "name":"Example subtask 2",
                "resolved":true,
                "position":2,
                "task_id":13074981
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No subtask found with the given id"
                    }
            }

### Delete a Subtask [DELETE]
This endpoint deletes a subtask and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the subtask that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Conversation not found"
            }
# Group TaskLists
Redbooth’s TaskLists gather tasks inside projects making them accessible and enabling a better organization. Their start and end date is orientative and doesn’t affect the tasks contained. They can be archived and moved from one project to another.

## TaskList List [/task_lists]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "TaskList",
                    "created_at": 1387364520,
                    "updated_at": 1387364520,
                    "id": 1645155,
                    "name": "Inbox",
                    "project_id": 902783,
                    "user_id": 688561,
                    "start_on": null,
                    "finish_on": null,
                    "position": 0,
                    "archived": false,
                    "archived_tasks_count": 2,
                    "tasks_count": 10,
                    "last_comment_id": null,
                    "updated_by_id": null,
                    "metadata":  {},
                    "deleted": false,
                    "completed_at": null
                },
                {
                    "type": "TaskList",
                    "created_at": 1386849785,
                    "updated_at": 1386849785,
                    "id": 1624758,
                    "name": "STUDY",
                    "project_id": 902783,
                    "user_id": 688561,
                    "start_on": null,
                    "finish_on": null,
                    "position": 1,
                    "archived": false,
                    "archived_tasks_count": 2,
                    "tasks_count": 5,
                    "last_comment_id": null,
                    "updated_by_id": null,
                    "metadata":  {},
                    "deleted": false,
                    "completed_at": null
                },
                {
                    "type": "TaskList",
                    "created_at": 1402939977,
                    "updated_at": 1402939977,
                    "id": 2323528,
                    "name": "DELIVERIES",
                    "project_id": 902783,
                    "user_id": 688561,
                    "start_on": null,
                    "finish_on": null,
                    "position": 2,
                    "archived": false,
                    "archived_tasks_count": 4,
                    "tasks_count": 7,
                    "last_comment_id": null,
                    "updated_by_id": null,
                    "metadata":  {},
                    "deleted": false,
                    "completed_at": null
                }
            ]

### Get TaskList [GET]
Returns a JSON list of TaskLists to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `12231`) ... Id of the project to which the element belongs.
    + user_id (optional, integer, `12341`) ... The user's id to which the element belongs.
    + archived (optional, string, `true`) ... TaskLists can be archived or not, so this parameter can be =true or =false.

+ Response 200

    [TaskList List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }
            
### Create New TaskList [POST]
Posts a new TaskList with a new id in the location (project_id) that you specify.

+ Parameters

    + project_id (required, integer, `12891`) ... Id of the project to which the element will belong after posting it.
    + name (required, string, `Example name`) ... The name that the TaskList will have.
    + archived = `false` (optional, string, `false`) ... TaskLists can be archived, so this parameter can be =true or =false.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title",
                "project_id":"902783",
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type":"TaskList",
                "created_at":1403265140,
                "updated_at":1403265140,
                "id":2339135,
                "name":"Example title",
                "project_id":902783,
                "user_id":688561,"start_on":null,
                "finish_on":null,"position":5,
                "archived":false,
                "archived_tasks_count":0,
                "tasks_count":0,
                "last_comment_id":null,
                "updated_by_id":null,
                "metadata":{},
                "deleted":false,
                "completed_at":null
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## TaskList [/task_lists/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "TaskList",
                "created_at": 1402939977,
                "updated_at": 1402939977,
                "id": 2323528,
                "name": "DELIVERIES",
                "project_id": 902783,
                "user_id": 688561,
                "start_on": null,
                "finish_on": null,
                "position": 2,
                "archived": false,
                "archived_tasks_count": 4,
                "tasks_count": 7,
                "last_comment_id": null,
                "updated_by_id": null,
                "metadata":  {},
                "deleted": false,
                "completed_at": null
            }

### Get TaskList [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the TaskList that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [TaskList][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Update a single TaskList [PUT]
Modifies an existing TaskList, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the TaskList that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (optional, integer, `121`) ... Id of the project to which the element will belong after modifying it.
    + name (optional, string, `Example title modified`) ... The name that the TaskList will have.
    + archived = `false` (optional, string, `false`) ... TaskLists can be archived, so this parameter can be =true or =false.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title modified",
                "project_id":"902783"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type":"TaskList",
                "created_at":1403265140,
                "updated_at":1403266074,
                "id":2339135,
                "name":"Example title modified",
                "project_id":902783,"user_id":688561,
                "start_on":null,"finish_on":null,
                "position":5,"archived":false,
                "archived_tasks_count":0,
                "tasks_count":0,
                "last_comment_id":null,
                "updated_by_id":null,
                "metadata":{},
                "deleted":false,
                "completed_at":null
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No task list found with the given id"
                    }
            }

### Delete a TaskList [DELETE]
This endpoint deletes a TaskList and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the TaskList that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "TaskList not found"
            }
# Group Tasks
Tasks become the core feature of a lot organizations and they are also the most sophisticated elements in their different endpoints. Briefly described, tasks are complex elements composed by a name, a description and a body, that can be located in space and time by different parameters, and have capacity to host subtasks, files and unlimited interactive blocks of content.

## Task List [/tasks]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.205826

    + Body

            [
                {
                    "type": "Task",
                    "created_at": 1403078398,
                    "updated_at": 1403078399,
                    "id": 13019770,
                    "name": "Prepare slides",
                    "task_list_id": 2323528,
                    "comments_count": 0,
                    "assigned_id": null,
                    "status": 0,
                    "is_private": false,
                    "project_id": 902783,
                    "urgent": false,
                    "user_id": 688561,
                    "position": 0,
                    "last_activity_id": 56403892,
                    "record_conversion_type": null,
                    "record_conversion_id": null,
                    "metadata":  {},
                    "subtasks_count": 0,
                    "resolved_subtasks_count": 0,
                    "watcher_ids":  [
                        688561
                    ],
                    "description": null,
                    "description_html": "",
                    "description_updated_by_user_id": null,
                    "updated_by_id": null,
                    "deleted": false,
                    "due_on": null
            },
                {
                    "type": "Task",
                    "created_at": 1403078393,
                    "updated_at": 1403078394,
                    "id": 13019769,
                    "name": "Send proposal to the customer",
                    "task_list_id": 2323528,
                    "comments_count": 0,
                    "assigned_id": null,
                    "status": 0,
                    "is_private": false,
                    "project_id": 902783,
                    "urgent": false,
                    "user_id": 688561,
                    "position": 1,
                    "last_activity_id": 56403886,
                    "record_conversion_type": null,
                    "record_conversion_id": null,
                    "metadata":  {},
                    "subtasks_count": 0,
                    "resolved_subtasks_count": 0,
                    "watcher_ids":  [
                        688561
                    ],
                    "description": null,
                    "description_html": "",
                    "description_updated_by_user_id": null,
                    "updated_by_id": null,
                    "deleted": false,
                    "due_on": null
                }
            ]

### Get Tasks [GET]
Returns a JSON list of tasks to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1295`) ... Id of the organization to which the element belongs.
    + project_id (optional, integer, `18921`) ... Id of the project to which the element belongs.
    + task_list_id (optional, integer, `1121`) ... Id of the TaskList to which the task belongs.
    + user_id (optional, integer, `12231`) ... Id of the user that created the task.
    + assigned_user_id (optional, integer, `12231`) ... Id of the user to which the task is assigned.
    + assigned (optional, string, `true`) ... The task can be assigned or unassigned, =true or =false.
    + archived (optional, string, `true`) ... Tasks are archived once they have been completed and this parameter can be =true or =false.
    + status (optional, string, `resolved`) ... Tasks can have different status: new, open, hold, resolved or rejected.


+ Response 200

    [Task List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Task [POST]

Creates a new task related to the given project and task_list. Please take note of the following list of required and optional parameters.

Don't forget to "name" your task!

+ Parameters

    + project_id (required, integer, `121213`) ... Id of the project to which the element will belong after posting it.
    + task_list_id (required, integer, `1212441`) ... The TaskList id of the TaskList to which the new task will belong.
    + name (required, string, `Example name`) ... The name that the task will have.
    + description (optional, string, `Example description`) ... Description of the task that will stay on the top of it.
    + is_private = `false` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the task will be public if there is no specification.
    + status = `new` (optional, string, `open`) ... Tasks can have different status: new, open, hold, resolved or rejected.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "project_id":"902783",
                "task_list_id":"12445",
                "name":"Example title",
                "description":"Example description",
                "is_private":"false"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Task",
                    "created_at": 1403175082,
                    "updated_at": 1403175082,
                    "id": 13049587,
                    "name": "Example title",
                    "task_list_id": 2323528,
                    "comments_count": 0,
                    "assigned_id": null,
                    "status": "new",
                    "is_private": false,
                    "project_id": 902783,
                    "urgent": false,
                    "user_id": 688561,
                    "position": 6,
                    "last_activity_id": null,
                    "record_conversion_type": null,
                    "record_conversion_id": null,
                    "metadata":  {},
                    "subtasks_count": 0,
                    "resolved_subtasks_count": 0,
                    "watcher_ids":  [
                        688561
                    ],
                    "description": "Example description",
                    "description_html": "<p>\nExample description</p>",
                    "description_updated_by_user_id": 688561,
                    "updated_by_id": null,
                    "deleted": false,
                    "due_on": null
                }
            ]

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Task [/tasks/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Task",
                    "created_at": 1403078398,
                    "updated_at": 1403078399,
                    "id": 13019770,
                    "name": "Prepare slides",
                    "task_list_id": 2323528,
                    "comments_count": 0,
                    "assigned_id": null,
                    "status": 0,
                    "is_private": false,
                    "project_id": 902783,
                    "urgent": false,
                    "user_id": 688561,
                    "position": 0,
                    "last_activity_id": 56403892,
                    "record_conversion_type": null,
                    "record_conversion_id": null,
                    "metadata":  {},
                    "subtasks_count": 0,
                    "resolved_subtasks_count": 0,
                    "watcher_ids":  [
                        688561
                    ],
                    "description": null,
                    "description_html": "",
                    "description_updated_by_user_id": null,
                    "updated_by_id": null,
                    "deleted": false,
                    "due_on": null
                }
            ]

### Get Task [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the task that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Task][]

+ Response 404

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":  
                      {
                        "message": "Not Found"
                      }
            }

### Update a single Task [PUT]
Modifies an existing task, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the task that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (optional, integer, `121`) ... Id of the project to which the element will belong after modifying it. It has to be consistent with the task_list_id
    + task_list_id (optional, integer, `1231`) ... The id of the TaskList to which the element will belong after modifying it. It has to be consistent with the project_id.
    + assigned_user_id (optional, integer, `12231`) ... Id of the user to which the task will be assigned.
    + name (optional, string, `Example title modified`) ... The name that the task will have.
    + description (optional, string, `Example body modified`) ... The description of the task.
    + is_private = `false` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false.
    + status = `new` (optional, string, `open`) ... Tasks can have different status: new, open, hold, resolved or rejected.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "task_list_id":"1645155",
                "name":"Example title modified",
                "description":"Example description modified",
                "is_private":"false",
                "assigned_user_id":"688561"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type":"Task",
                    "created_at":1403175082,
                    "updated_at":1403195797,
                    "id":13049587,
                    "name":"Example title modified",
                    "task_list_id":1645155,
                    "comments_count":1,
                    "assigned_id":1925982,
                    "status":"open",
                    "is_private":false,
                    "project_id":902783,
                    "urgent":false,
                    "user_id":688561,
                    "position":4,
                    "last_activity_id":56593093,
                    "record_conversion_type":null,
                    "record_conversion_id":null,
                    "metadata":{},
                    "subtasks_count":0,
                    "resolved_subtasks_count":0,
                    "watcher_ids":[688561],
                    "description":"Example description modified",
                    "description_html":"<p>\nExample description modified</p>",description_updated_by_user_id":688561,
                    "updated_by_id":688561,
                    "deleted":false,
                    "due_on":null
                }
            ]

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No task found with the given id"
                    }
            }

### Delete a Task [DELETE]
This endpoint deletes a task and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the task that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Task not found"
            }
# Group Users
This endpoint will give you information about all the users of your organization. It is a vew-only endpoint, since even being an admin you will not be allowed to update or delete other user accounts through the API.  

## User List [/users]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
              {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Eduardo",
                "last_name":"Rodés Pons",
                "email":"api@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/12334/thumb.png?12452154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/124434/profile.png?23546543",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?234525",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f568db31b3b0eb46dd3ce31a0","calendar_token":"bb9fd6e48633271bd936e717a23fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              },
              {
                "type": "User",
                "created_at": 1274802891,
                "updated_at": 1412157528,
                "id": 105997,
                "first_name": "Jordi",
                "last_name": "Romero",
                "email": "api@redbooth.com",
                "needs_profile": false,
                "deleted": false,
                "bouncing_email": false,
                "confirmed_user": true,
                "username": "jordi",
                "avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/3154435/thumb.png?1345345",
                "profile_avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/345135/profile.png?3543453",
                "micro_avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/134531/micro.png?234151354"
              }
            ]

### Get User [GET]
Returns a JSON with the information of all the users of your organization.

+ Parameters

+ Response 200

    [User List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

## User [/users/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

              {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Eduardo",
                "last_name":"Rodés Pons",
                "email":"api@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/12334/thumb.png?12452154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/124434/profile.png?23546543",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?234525",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f568db31b3b0eb46dd3ce31a0","calendar_token":"bb9fd6e48633271bd936e717a23fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              }

### Get User [GET]
Returns a JSON with information about the specific user.

+ Parameters

+ Response 200

    [User][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }
