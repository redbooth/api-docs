FORMAT: 1A
HOST: https://redbooth.com/api
META_DESCRIPTION: This endpoint only offers an index. It enables us to get a list of activities filtered by different parameters
META_KEYWORDS: API, Activities, Redbooth, version 3, endpoint
NAME: Redbooth API: Activities Documentation

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

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: `id`, `created_at` and `updated_at`.
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
