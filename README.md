# Project Three: One Day In #

Teams of Three  
Time Frame: 9 days  
Visit the site: https://bit.ly/jronedayin  

Login Credentials:  
Username: James  
Password: Jamespass  


## Overview: ##

For my third project as part of General Assembly’s Software Engineering course, we were assigned into teams and told to make a full MERN stack application in just over a week. In our first meeting together, my team decided to create a travel website, but to make it differ slightly from the Trip Advisor’s of the world, ours would be specific for if you had 24 hours in a specific city.

![Screenshot of final product](./client/src/assets/readme_images/onedayin.png)

## The Brief: ##

* **Build a full-stack application** by making your own back-end and your own front-end.
* **Use an Express API** to serve your data from a Mongo database.
* **Consume your API with a separate front-end** built with React.
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut.
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
* **Be deployed online** so it's publicly accessible.


## Technologies Used: ##

* Node.js
* MongoDB
* Express
* Bcrypt
* Mongoose
* JSON Web Token
* React
* Axios
* SASS
* React Bootstrap
* Insomnia
* Git
* GitHub
* Trello Board (planning and timeline)

## Code Installation: ##

* Clone or download the repo, then in your terminal run the following commands:
* Start the database by running: `mongod --dbpath ~/data/db`
* In the OneDayIn folder, run: `yarn`
* Start the back-end server first running: `yarn serve`
* Start the front-end by first running: `cd client` followed by: `yarn start`

## Day 1 - Planning:  ##

Once we had decided the theme for the app the next thing we did was create a Trello board to help us keep on top of our planning. Here we created sections for our wireframes, endpoints, and models that we would need to have done in order to get sign-off. We ended up using this Trello board across the entire project.

![Screenshot of Trello Board](./client/src/assets/readme_images/trello.png)

With that made we got to work on the planning. The first thing we decided upon was the amount of models we would need and what the schema for each would end up looking like. We settled on two models, the user and the cities, however we had a wide range of relationships established for both. The city schema would also have embedded relationships with hotspots and recommendations, which then in turn had an embedded relationship with ratings.

![Screenshot of Schemas](./client/src/assets/readme_images/schemas.png)

After we had established the model and the information we would be storing for each city, we moved on to our wireframe for our individual cities. We knew the main list of cities would be a list with images and so felt this was the more important feature to focus on. We decided at this point that we wanted this site to be controlled by the admins, and so they would decide what cities are available. The page would then list the admin suggestions for each category we created, but also have an option to view user recommendations as well. As a stretch goal we wanted to add a feature that showed the highest rated user recommendation on the main page.

![Screenshot of Wireframe](./client/src/assets/readme_images/wireframe.png)

Once we had designed the wireframe and had the models sorted, we moved on to the end points and the pages we wanted to make. This would give us a clear indication of what functionality we would need to design in the back-end, as well as make it easier to divide the workload on the front-end. On this we also added in some more stretch goals we wanted to potentially achieve if we had time.

![Screenshot of endpoints](./client/src/assets/readme_images/endpoints1.png)
![Screenshot of endpoints](./client/src/assets/readme_images/endpoints2.png)

With all of this prep work done, we were able to get signed off. Overnight we split a task between the three of us to create some cities to add into our database, so when we created the back-end we could instantly seed it with information to display.

## Days 2 & 3 - Creating the Back-End: ##

We all worked together to create the back-end, with one team member sharing his screen while I talked through the processes and functionality we needed to add. We didn’t create all the functionality here, instead working on completing our MVP. This meant we didn’t create the functionality for the ratings, although we did create the model so it would be easier to add this feature in at a later time. Instead we focused on having CRUD functionality for cities and recommendations. After we created each function, we tested it on Insomnia to ensure the back-end was receiving the correct authorizations. We then seeded the database with the cities we had created the night before and were ready to move to the front-end.



## Days 4, 5, 6, & 7 - Creating the Front-End: ##

It was at this part of the project that we created three separate branches and each worked on our own machines, splitting the workload of the front-end. Simon got to work using React Bootstrap to add a hamburger to our site, as well as made changes to the models in the back-end that were needed. He also created two images for each city, a banner and a thumbnail image, and edited them all to be the correct size before hosting them online and adding the urls into the seed database. Kesh started off working on the login and sign up page, whereas I took on the rest of the front-end.

The first thing I needed to build was the page that listed all of the cities, as from this I would then be able to reach the single city pages. This was done fairly simply, by making an API request to get all the cities and then mapping through them, creating a component for each city.

```
const AllCitiesList = () => {
  const [cities, setCities] = useState([])


  useEffect(() => {
    const getCityData = async () => {
      const allCities = await getCities()
      allCities.sort((a,b) => (a.name > b.name ? 1 : -1))
      setCities(allCities)
    } 
    getCityData()
  }, [])

  return (
    <section className='city-list'>
      <ul>
        {cities.map((city) => (
          <li key={city._id}>
            <CityCard {...city} />
          </li>
        ))}
      </ul>
    </section>
  )
}
```

Once this was done I was able to create the single city pages, which is where most of the front-end work went into. I started by making a plain page with all of the information on it that I wanted. Then, I did some styling, as I was going to be spending a lot of time on this page and wanted to get a feel for how it might look. This wasn’t the final design, but still made it easier to work with visually.

![Screenshot of early layout](./client/src/assets/readme_images/earlylayout.jpg)

Once all of the information was present, I got to work making the links at the bottom of the page link to the user suggestion pages for each city. From here I was able to add in the CRUD functionality for user suggestions, which required some slight tweaking of the back-end to get it working the way I needed. The main change I added to the back-end was to the user model, creating a field to store all the recommendations they had made. This meant I could add in functionality later to display the user’s recommendations on their user profile. This also meant I had to add some extra lines into the create recommendation function in the back-end, so it would not only add the recommendation to the city, but the user as well. The same went for editing and deleting recommendations.

We kept in touch as a team throughout the day and shared the progress of what we were working on. It was unfortunately at this time it became apparent that one of the members of the team wasn’t putting in the required work, and so I took on their workload as well as I continued to build the front-end, putting in long hours each day to ensure we would not fall behind. This meant picking up sections I had not originally planned to, such as the user profile section.

There were two different aspects I made for this, the first being a page to display user information, such as their username, a bio, their favourite city (and added in a function to this where if their favourite city was on our database, it would link to that page), as well as all the recommendations created by that user.

![Screenshot of user profile design](./client/src/assets/readme_images/userprofiledesign.png)

The second was a page to allow the user to edit the information on their own profile. Sadly, due to time constraints, I didn’t manage to populate the form with the data already held here, but I did display that data so the user could still see what they had already.


![Screenshot of edit user profile design](./client/src/assets/readme_images/editprofile.png)

Once I managed this I decided to add in the rating function on the user recommendations. To do this I needed to do a bit of work in the back-end to add the functionality, although because we had already made the model this saved some time. Once the functionality was up and running, I implemented the system seen below, which would either encourage the user to make a rating, or if they had already rated, allow them to change their rating.

![Screenshot of recommendation](./client/src/assets/readme_images/recdesign.png)
![Screenshot of recommendation](./client/src/assets/readme_images/recdesign2.png)

This stopped a single user from being able to spam a recommendation with lots of high ratings, limiting them to one per recommendation. To do this I simply had to check each card and filter through the ratings, only returning results where the rating owner id matched the user id. If this list had any length, then I set a variable called userHasRated to true and populated information with their current rating information.

```
const checkUserRating = ratings.filter(rating => rating.owner === userId)
  if (checkUserRating.length){
    setUserHasRated(true
    setUserRating(checkUserRating[0].rating)
    setUserRatingId(checkUserRating[0]._id)
}

```
To display this information I needed to use multiple ternary operators, first to determine if the user was logged in, followed by if they had rated the recommendation already.

```
{isLoggedIn ?
   !userHasRated ?
     <form className='rec-rating' onSubmit={handleSubmit}>
       <h6>Rate this recommendation:</h6>
       <div className='form-field'><input className='rating' name='rating' type='number' min='1' max='5' onChange={handleNumberChange} /></div>
       <div className='form-field'><input type='submit' className='submit' value='Submit' /></div>
     </form>
     :
     <form className='rec-rating' onSubmit={handleEdit}>
       <h6>Your current rating: {userRating}</h6>
       <div className='form-field'><input className='rating' name='rating' type='number' min='1' max='5' onChange={handleNumberChange} /></div>
       <div className='form-field'><input type='submit' className='submit' value='Change' /></div>
     </form>
   :
   <div><h6>Please log in to rate this recommendation</h6></div>
}
```

Once I had finished with this functionality, I added links to all of the components I had made, so clicking on a username at the bottom of a recommendation took you to their user page, clicking on the city they had left a recommendation for took you to that city page, and clicking their recommendation title took you to those user recommendations for that specific city. To do this I had to make some more changes to the back-end, most notably adding the city to the recommendation schema, so I could access the information I needed for the links.

## Days 8 & 9 - Stretch Goals and Styling: ##

After we had worked apart for the last few days we got together and merged our projects, choosing to finish the work on one machine. I took the reins this time and shared my screen with the rest of the team, as I had built most of the front-end and so for styling purposes I knew the layout more. Before we got to work on the styling however, there was one more function we wanted to add, which was an interactive world map which would allow users to filter cities through their continent.

![Screenshot of Map](./client/src/assets/readme_images/map.png)

We found a plugin online and brought it into the app with relative ease, although we struggled to use this to filter our searches, as although we could style the map to change colour over each continent as you hovered over it, we could only apply a link to the entire image. This meant when it linked through to the cities page, there was no value it could use to filter the search. I came up with a plan to store the continent selected in the user’s local storage, which we then grabbed again when the cities page was loaded and we filtered the results accordingly.

![Screenshot of local storage](./client/src/assets/readme_images/localstorage.png)

This meant we did need to go back and add the continent to the city schema, but it was a quick change, and with that our interactive map was working. The one issue this created was that if the user then selected to go to the cities page via the hamburger, the filter would still apply. To get around this we made two versions of the cities page, one that was linked to via the map and was filtered, and another unfiltered version through the hamburger.

Another stretch goal we added was including the highest-rated user recommendation on the main city information page. If the website was in full use and had an active community, we would have liked to do this for each of the criterias we had set, but for the purposes of our presentation we just took the overall best-rated recommendation. To display this was fairly simple. I just took all of the recommendations and sorted them into a new array, based on their average rating scores:

`const sortedRecommendations = recommendations.sort((a, b) => (a.averageRating > b.averageRating ? -1 : 1))`

Then when calling the information, I only used whatever data was stored in sortedRecommendations[0] - knowing that this would contain the highest rated recommendation. We added in a ternary that determined if the sortedRecommendations array had any length, and if it didn't, then it displayed some text instead that informed the user that the city hadn't received any rated recommendations yet.


Finally we got to work on our styling, going for a color scheme of white and blue. Using SASS I was able to store the values for our colours as variables so we could call on them throughout to maintain consistency. We took screenshots of each page as we finished it which made it easier to ensure we had a consistent look across all the pages.

```
$uranian-blue: #bbdefb;
$light-sky-blue: #90caf9;
$blue-jeans: #64b5f6;
$blue-jeans-2: #42a5f5;
$tufts-blue: #2196f3;
$bleu-de-france: #1e88e5;
$bright-navy-blue: #1976d2;
$denim: #1565c0;
$cobalt-blue: #0d47a1;
$alice-blue: #e3f2fd;

```

Once this was done we filled the database with comments and ratings so we could fully demonstrate the functionality of the site. As a little extra, I asked Simon (who designed the logo) to break it into two separate parts, one with just the compass needle and one with the rest of the logo. Once he did I added in an extra CSS animation that made the needle spin, adding a quirky little styling feature.

## Final Product: ##

#### Home Page: ####

![Screenshot of home page](./client/src/assets/readme_images/home.png)


#### About Page: ####

![Screenshot of about page](./client/src/assets/readme_images/about.png)


#### Cities Page: ####

![Screenshot of cities page](./client/src/assets/readme_images/cities.png)


#### Single City Page: ####

![Screenshot of city page](./client/src/assets/readme_images/singlecity.png)


#### User Suggestions Page: ####

![Screenshot of user suggestions page](./client/src/assets/readme_images/cityrecs.png)


#### Profile Page: ####

![Screenshot of profile page](./client/src/assets/readme_images/userprofile.png)


#### Edit Profile Page: ####

![Screenshot of edit profile page](./client/src/assets/readme_images/editprofile.png)


#### Add Recommendation Page: ####

![Screenshot of add recommendation page](./client/src/assets/readme_images/addrec.png)

## Wins & Blockers: ##

I was really happy with the final product we created. I think the main win for me personally was that we managed to pack in a ton of functionality and the site ran very smoothly, which made for a slick presentation. I was also happy with the amount of work I managed to do with both the front and back ends, allowing me to utilise all the skills I had learned so far on the course, as opposed to just focusing on one area.

As for blockers, as mentioned above there was unfortunately one member of the team who didn’t contribute to the project. As such it meant I had to spend a lot of time making up the workload, which ultimately meant we didn’t have time at the end to implement our other stretch goals.

Another blocker would be that there were several occasions where we came across something that meant we needed to go and change our models, which in turn meant adding this information to our seed database and then reseeding the whole thing. This took quite a lot of time and I think really showed how much we could have benefitted from being even more thorough in the planning stages to clarify what we needed to be in each model.

## Bugs: ##

* Technically the code does allow for one user to make multiple ratings on a single recommendation, we just used a front-end workaround to prevent that from happening.
* The ratings wouldn’t come through for the user profile page, so we removed these from those recommendation cards.


## Key Learnings: ##

* Working in a group - merging git branches, communication, sharing workloads.
* Linking a front and back-end in VS Code - using proxies.


## Future Content: ##
* Having user profile pictures on their accounts.
* Implementing different levels of user depending on how active they are.
* Fixing it so the ratings come through on the user profile page.
