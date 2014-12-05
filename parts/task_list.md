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
