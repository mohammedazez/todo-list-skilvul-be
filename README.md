### Pokemon-API Docs

- `POST /api/v1/todo	`

  REST API to show list of todo


  > Create Todo List

  _Response (201)_

  ```json
  {
    "activity": "create app",
    "status": true
  }
  ```

  _Path Example_

  ```
  POST https://todo-skilvul.herokuapp.com/api/v1/todo
  ```

  _Response (201)_

  ```json
  {
    "status": true,
    "code": 201,
    "message": "success create todo",
    "todo": {
      "id": 5,
      "activity": "create app",
      "status": false,
      "updatedAt": "2023-08-26T06:42:53.544Z",
      "createdAt": "2023-08-26T06:42:53.544Z"
    }
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "internal server error"
  }
  ```

---

- `GET /api/v1/todo	`

  REST API to show list of todo

  > Get All Todo

  _Path Example_

  ```
  GET https://todo-skilvul.herokuapp.com/api/v1/todo
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "success get todo",
    "response": [
      {
        "id": 1,
        "activity": "Belajar Golang",
        "status": true,
        "createdAt": "2023-08-27T11:02:03.000Z",
        "updatedAt": "2023-08-27T11:13:40.000Z"
      },
      {
        "id": 2,
        "activity": "Belajar Javascript",
        "status": false,
        "createdAt": "2023-08-27T11:02:11.000Z",
        "updatedAt": "2023-08-27T11:13:38.000Z"
      },
      {
        "id": 3,
        "activity": "Belajar React JS",
        "status": false,
        "createdAt": "2023-08-27T11:02:24.000Z",
        "updatedAt": "2023-08-27T11:13:53.000Z"
      },
      {
        "id": 4,
        "activity": "Belajar Bahasa Inggris",
        "status": true,
        "createdAt": "2023-08-27T11:14:08.000Z",
        "updatedAt": "2023-08-27T11:14:08.000Z"
      }
    ]
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "internal server error"
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 404,
    "message": "data not found"
  }
  ```


  ```jso
  GET https://todo-skilvul.herokuapp.com/api/v1/todo?status=1
  ```

  | Parameter | Data Type |     Location |
  | :-------- | :-------: | -----------: |
  | status    |     1     | query header |

  Note :
  1 = True (active)

  0 = False (completed)

---

- `PUT /api/v1/todo/:id`

  REST API to show list of todo


  > Update Todo

  _Path Example_

  ```
  PUT http://localhost:8080/api/v1/todo/32
  ```

  _Request Body_

  ```json
  {
    "activity": "create app done",
    "status": true
  }
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "success update todo"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "internal server error"
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 404,
    "message": "data not found"
  }
  ```

  ***

- `DELETE /api/v1/todo/:id`

  REST API to show list of todo

  > Delete Todo

  _Path Example_

  ```
  PUT http://localhost:8080/api/v1/todo/32
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "success delete todo"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "internal server error"
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 404,
    "message": "data not found"
  }
  ```

  ***
