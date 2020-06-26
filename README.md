# Med Cab Back End Documentation----------------------------------

Topics:

* Server depoyment and calls
* User endpoints
* Recommendation endpoints
* Strain endpoints
* Update logs

**⚠️ This is documentation for explaining steps and processes for using this database, as well as structure and practices. Please let me know if any information is missing or needed for this documentation. Editing is ongoing (see log at bottom)**


# Server deployment and calls ------------------------------------

## Deployed server address: 
https://med-cab-db.herokuapp.com/

# Variations:
- /api/users
- /api/users/:id
- /api/users/:id/recommendations
- /api/strain_recommendations
- /api/strain_recommendations/:id
- /api/auth/register
- /api/auth/login


## Structure for requests are as follows:


# User Endpoints ---------------------------------------------------

**All requests follow a /api/users/ pattern**


*User router endpoints*

#### GET request for all users
`/api/users`
returns all `users` in the database.

#### GET request for user by id
`/api/users/:id`
returns `user` with specific `id` from the database.

#### PUT request for user by id
`/api/users/:id`
returns `user` with specific `id` with updated information.

#### DELETE request for user by id
`/api/users`
returns `user` being successfully deleted from the database.


# Strain Endpoints ---------------------------------------------------

**All requests follow a /api/strain_recommendations/ pattern**


*Strain endpoints*

#### GET request for all strains
`/api/strain_recommendations`
returns all `strains` in the database.

#### GET request for strain by id
`/api/strain_recommendations/:id`
returns `strain` with specific `id` from the database.

#### POST request for user by id
`/api/strain_recommendations`
returns `strain` with specific `id` successfully added to the database.

`Required data format:`
{ 'strain': 'Purple Haze'};

#### DELETE request for user by id
`/api/strain_recommendations/:id`
returns `strain` by `id` being successfully deleted from the database.


# Auth Endpoints --------------------------------------------------

**All requests follow a /api/auth/ pattern**


*Auth router endpoints*

#### POST request for new user
`/api/auth/register`
returns a new `user` to the database.

`Required data format:`
{ first_name: 'Bob', last_name: 'Marks', email: 'bobm@gmail.com', password: 'goodpassword1' };
(currently no hard password requirements for BE, just all strings)

#### POST request for a user login
`/api/auth/login`
returns a `user` with proper credentials from the database.

`Required data format:`
{ email: 'bobm@gmail.com', password: 'goodpassword1' };


# Recommendation Endpoints ------------------------------------

**Dev Note** This section is still being developed, and has not been deployed or tested at this time.



## -- Update Log --

*Date_time_logId# & description of fix format*
*ex: 02/18/20_9:30a_1*

**06/21/20_7:40p_1**
- Modified the auth language to be more clear.

**06/21/20_9:20p_2**
- Deleted extra icon, edited dash lengths, updated DB layout tree

**06/23/20_6:50p_3**
- Added language for GET request params and data formats

**06/25/20_9:35p_4**
- Added strain route language and endpoints

**06/26/20_3:40p_5**
- Deleted table and updated endpoint language

