// Visual feedback of course being added to schedule
function confirmRegistration() {
    alert('Course successfully added to your schedule!');
}

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

function changeDescription(id) {
    document.getElementById("course_name").textContent = courses_list[id].name;
    document.getElementById("course_instructor").textContent = courses_list[id].instructor;
    document.getElementById("course_days").textContent = courses_list[id].days;
    document.getElementById("course_time").textContent = courses_list[id].time;
    document.getElementById("course_description").textContent = courses_list[id].description;
}