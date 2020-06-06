# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: the name of the foriegn key will be  the animal_id. The foeign key belongs to the  Sightings model.

  Researched answer:By convention the foreign key should always be the modelname_id and the data type should be integer. The has_many model is singular, the belongs_to model is plural. A Person (singular) has_many emails (plural).



2. Which routes must always be passed params and why?


  Your answer: The routs that should always be passed params are the show, update and delete routes. This is because you are showing, updating, or deleting specific information with the model.

  Researched answer:



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: 

  get '/game/:id' => 'main#guess'



4. Name three rails generator commands. What is created by each?

  Your answer: 
  
  rails generate model model_name  key:data_type      
   - this creates the model and all the attributes you want to add to start with. this command creates the schema

  rails generate controller
  - this command creates the controller file and also creates a views file . the controller is created to handle the information in the model and also communicate with the view file to be able to display html on a web page.

  rails generate migration whatever_you_want_your_migration_to_be_called
  -this alllows you to update your model. you can add in new attributes and delete attributes.


  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"
- this route displays the users page

/users/1      method="GET"
-this route shows a  partictular user from the users page 

/users/new    method="GET"
this route returns an html form for ceating a new user

/users/       method="POST"
this route creates a new user

/users/1      method="PUT"
this route allows you to update a specific user

/users/1      method="DELETE"
this route allows you to delete a specific user
