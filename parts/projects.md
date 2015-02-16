FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

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

    + organization_id (required, integer, `121`) ... Id of the organization to which the project will belong after posting it.
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
    + organization_id (required, integer, `121`) ... Id of the organization to which the project will belong after modifying it.
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
