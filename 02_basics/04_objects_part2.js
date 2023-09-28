// De-Structuring
// IMP Concept + Widely used in React
const course = {
    courseName: "chai aur code",
    price: "free on youtube",
    teacher: "Hitesh",
    student: "Anil"
}

course.teacher

const { student } = course // Easy way to fetch any object value rather than using objname.key, again and again we cant use objname. functionality
console.log(student); // Anil:  Easy way to represent

// We can also rename our student key to something more readable for readers {objectKey: renamedValueByUser}
const { student: learner } = course;

console.log(learner); // Anil

/*
 * JSON FORMAT DATA Can be object or array type
// Array type:
[
    {}, //obj1
    {}, //obj2
    {}, //obj3
    {}  //obj4
]

//Object type:
{
    {
        "name": "Anil",
        "country": "India",
        "price": "Free"
    }, //obj1
    {}, //obj2
    {}, //obj3
    {}  //obj4
}
 */