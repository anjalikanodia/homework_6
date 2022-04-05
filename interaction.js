// JS Functionality #1: Dynamically change content on course description page based on specific course selected in browsing page
// Intializing properties of object (course) 
function Course(name, instructor, days, time, description) {
    this.name = name;
    this.instructor = instructor;
    this.days = days;
    this.time = time;
    this.description = description;
}

// Creating new instances of Course (naming convention courserow_column)
var course1_1 = new Course ("48-100 Studio: Foundation I", "Instructor: Arscott, Mary-Lou", "Days: Monday, Wednesday", "Time: 13:00 - 14:00", "As the first architectural design studio course, the Foundation 1 studio establishes a fundamental understanding of representation and abstraction to which more of your own thoughts and ideas about spatial thinking can be added. This will involve, by means of the architectural studio, a reiterative investigation into the relationship of technique, form, and meaning through study, invention, testing, and evaluation.");
var course1_2 = new Course ("48-250 Urbanism", "Instructor: Gruber, Stefan", "Days: Tuesday, Thursday", "Time: 10:00 - 11:00", "Formerly titled Case Studies in Architecture and Cities (CSE STD ARC CIT).");
var course1_3 = new Course ("48-315 Environment I: Climate", "Instructor: Loftness, Vivian", "Days: Tuesday, Thursday", "Time: 15:00 - 16:00", "This course introduces architectural design responses for energy conservation, human comfort, and the site-specific dynamics of climate. Students will be expected to combine an understanding of the basic laws of comfort and heat flow with the variables of local climate to create energy design guidelines for their own work.");
var course2_2 = new Course ("60-100 Electronic Media", "Instructor: Doe, John", "Days: Friday", "Time: 19:00 - 20:00","This course is an introduction to the computer as a dynamic tool for time-based media production. In this course students develop skills in digital video and audio production through the exploration of narrative, experimental, performance, documentary and animation themes and forms.");
var courses_list = [course1_1, course1_2, course1_3, course2_2]

// Changing content on description page based on which course is clicked on Schedule of Classes (i.e. browsing) page
function changeDescription(id) {
    document.getElementById("course_name").textContent = courses_list[id].name;
    document.getElementById("course_instructor").textContent = courses_list[id].instructor;
    document.getElementById("course_days").textContent = courses_list[id].days;
    document.getElementById("course_time").textContent = courses_list[id].time;
    document.getElementById("course_description").textContent = courses_list[id].description;
}

// JS Functionality #2: Registering for a course updates My Schedule 
// When user registers for a course: 
// 1 > provide visual feedback of course being added to schedule
// 2 > Show course in My Schedule page as a course card (similar to an event in Google Calendar)
// Reference for part 2: https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

var registered_courses = []

function confirmRegistration(id) {
    // 1 > On confirming registration, provide visual feeedback
    alert('Course successfully added to your schedule!');
    // 2 > Check if registered_courses list exists in local storage: if yes, get the last value of it
    // This prevents function from starting with an empty list each time and ending up with only 1 course in the list
    if(localStorage.registered_courses)
    {
        registered_courses = JSON.parse(localStorage.getItem("registered_courses"));
    }
    // 3 > Append course to list of registered courses
    registered_courses.push(id);
    // console.log(registered_courses);
    // 4 > Store appended list in local storage
    localStorage.setItem("registered_courses", JSON.stringify(registered_courses));
}

function showInSchedule() { 
    registered_courses = JSON.parse(localStorage.getItem("registered_courses"));
    console.log("Registered list looks like this:", registered_courses);
    for (course_id in registered_courses) {
        console.log("Registered list still looks like this:", registered_courses);
        console.log("Current course ID is:", course_id);
        console.log("Now getting every occurence of this course during the week");
        var list_of_courses_to_be_added = document.getElementsByName("registered_course_"+course_id);
        console.log("Course", course_id, "occurs these many times during a week:", list_of_courses_to_be_added.length);
        console.log(list_of_courses_to_be_added);
        for (course_instance in list_of_courses_to_be_added) {
            console.log("We are currently working on course instance", course_instance);
            console.log("This is what the HTML element looks lik:", list_of_courses_to_be_added[course_instance]);
            console.log("Removing the class that hides the course from schedule");
            list_of_courses_to_be_added[course_instance].classList.remove("hide_course");
            console.log("Class successfully removed. Time to repeat!");
        }
    }

    // try booked_0
    // loop through registered_courses
    // for each value (Google for in ) []
        // remove class "hide_course" to "booked_"+value
        // Google "find class by name" (might get a list)
        // remove a class 
    
}


// function removeCourse(id)
// {
//     registered_courses = JSON.parse(localStorage.getItem("registered_courses"));
//     // remove an item from an array (registered_courses)
//     localStorage.setItem("registered_courses", JSON.stringify(registered_courses));
//     showInSchedule()
// }



// function hideInSchedule() {

// }