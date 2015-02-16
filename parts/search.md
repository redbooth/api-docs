<!-- include(parts/common/meta-and-name.md) -->

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
