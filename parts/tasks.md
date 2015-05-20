FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

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
                      688561, 786268, 796268
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
    + archived_project (optional, string, `false`) ... Whether the request should include tasks that belong to archived projects or not. They are included by default.


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
    + watcher_ids (optional, array, [786268]) The ids of the users that will follow the task. Note the creator user will be added as follower automatically

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "project_id":"902783",
                "task_list_id":"12445",
                "name":"Example title",
                "description":"Example description",
                "is_private":"false",
                "watcher_ids": [786268]
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
                      688561, 786268
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
                      688561, 786268
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
    + watcher_ids (optional, array, [688561, 786268, 796268]) The ids of the users that follow the task. Note that all follower users whose id is not included in the array, except the task creator, will be removed from the task's followers.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "task_list_id":"1645155",
                "name":"Example title modified",
                "description":"Example description modified",
                "is_private":"false",
                "assigned_user_id":"688561",
                "watcher_ids": [
                  688561, 786268, 796268
                ]
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
                    "watcher_ids": [
                      688561, 786268, 796268
                    ]
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
