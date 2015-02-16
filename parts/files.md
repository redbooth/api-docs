<!-- include(parts/common/meta-and-name.md) -->

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
