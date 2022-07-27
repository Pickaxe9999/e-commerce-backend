# E-commerce Back End Starter Code

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies


GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


Project Layout 

-create the db
-create the models to create 4 tables following these criteria

-Category
    id
        Integer
        Doesn't allow null values
        Set as primary key
        Uses auto increment
category_name
    String
        Doesn't allow null values

-Product
    id
        Integer
        Doesn't allow null values
        Set as primary key
        Uses auto increment
    product_name
        String
        Doesn't allow null values
    price
        Decimal
        Doesn't allow null values
        Validates that the value is a decimal
    stock
        Integer
        Doesn't allow null values
        Set a default value of 10
        Validates that the value is numeric
    category_id
        Integer
        References the category model's id
-Tag
    id
        Integer
        Doesn't allow null values
        Set as primary key
        Uses auto increment
    tag_name
        String

-ProductTag
    id
        Integer
        Doesn't allow null values
        Set as primary key
        Uses auto increment
    product_id
        Integer
        References the product model's id
    tag_id
        Integer
        References the tag model's id

Asscociations
-Product belongs to Category, as a category can have multiple products but a product can only belong to one category.


-Category has many Product models.

-Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

-Tag belongs to many Product models.




-Create CRUD methods to update each table via get,post,put,delete api calls
    Make sure to have 2 get routes. One for calling each individual item and one for retrieving all items in a table

Routes will be made in product-routes.js, tag-routes.js, and category-routes.js

branches
main
    develop
        |feature/connect-db
        |feature/models-category
        |feature/models-product
        |feature/models-tag
        feature/models-productTag
        feature/models-association
        feature/product-routes
        feature/tag-routes
        feature/catagory-routes


