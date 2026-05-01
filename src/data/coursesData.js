import blogperson1 from './../assets/images/blogperson1.jpg'
import blogperson2 from './../assets/images/blogperson2.jpg'
import blogperson3 from './../assets/images/blogperson3.jpg'
import course1 from './../assets/images/Courses1.jpg'
import course2 from './../assets/images/Courses2.jpg'
import course3 from './../assets/images/Courses3.jpg'
import course4 from './../assets/images/Courses4.jpg'
import course5 from './../assets/images/Courses5.jpg'
import course6 from './../assets/images/Courses6.jpg'

const courses = [
  {
    id: 1,
    title: "Python",
    slug: "python",
    author: "Alex Morgan",
    price: "Free",
    duration: "8 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,
  },
  {
    id: 2,
    title: "Node.js",
    slug: "node-js",
    author: "Sarah Taylor",
    price: "$49",
    duration: "7 Weeks",
    available: true,
    image: course2,
    avatar: blogperson2,
  },
  {
    id: 3,
    title: "Java",
    slug: "java",
    author: "David Warner",
    price: "$69",
    duration: "2 Weeks",
    available: false,
    image: course3,
    avatar: blogperson3,
  },
  {
    id: 4,
    title: "React",
    slug: "react",
    author: "Alex Morgan",
    price: "$99",
    duration: "8 Weeks",
    available: true,
    image: course4,
    avatar: blogperson1,
  },
  {
    id: 5,
    title: "Angular",
    slug: "angular",
    author: "Sarah Taylor",
    price: "$49",
    duration: "7 Weeks",
    available: true,
    image: course5,
    avatar: blogperson2,
  },
  {
    id: 6,
    title: "Machine Learning",
    slug: "machine-learning",
    author: "David Warner",
    price: "$69",
    duration: "2 Weeks",
    available: false,
    image: course6,
    avatar: blogperson3,
  },
  {
    id: 7,
    title: "Flutter",
    slug: "flutter",
    author: "John Doe",
    price: "$39",
    duration: "5 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,
  },
  {
    id: 8,
    title: "MongoDB",
    slug: "mongodb",
    author: "Jane Smith",
    price: "$59",
    duration: "6 Weeks",
    available: true,
    image: course2,
    avatar: blogperson2,
  },
];

export default courses;