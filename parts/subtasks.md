<!-- include(parts/common/meta-and-name.md) -->

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
