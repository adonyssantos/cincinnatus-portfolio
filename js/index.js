import mock from './mock.js';
import courseTemplate from './course-template.js';

const { courses } = mock;
const coursesList = document.getElementById('courses-list');

courses.map(course => {
  coursesList.innerHTML += courseTemplate(course);
});
