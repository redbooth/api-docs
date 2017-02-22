FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API: Comments Documentation

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
                    "status":"new","previous_status":"new",
                    "file_ids": [123]
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
                    "previous_status":"new",
                    "file_ids": []
                }
            ]

### Get Comments [GET]
Returns a JSON list of comments to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: `id`, `created_at` and `updated_at`.
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
                "previous_status": "new",
                "file_ids": [451, 22]
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Comment [/comments/{id}]

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
                "previous_status":"new",
                "file_ids": []
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
                "previous_status": "new",
                "file_ids": []
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
