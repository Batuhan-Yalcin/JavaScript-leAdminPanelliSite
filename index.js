document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseTitle = button.getAttribute('data-course-title');
            const courseDescription = button.getAttribute('data-course-description');
            const courseImage = button.getAttribute('data-course-image');
            const course = { title: courseTitle, description: courseDescription, image: courseImage };

            let courses = JSON.parse(localStorage.getItem('courses')) || [];
            courses.push(course);
            localStorage.setItem('courses', JSON.stringify(courses));

            alert('Eğitim sepete eklendi');
        });
    });

    const courseList = document.getElementById("course-list");

    // Sepetteki eğitimleri görüntüleme
    const loadCourses = () => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courseList.innerHTML = "";

        courses.forEach((course, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${course.title}</strong><br>
                ${course.description}<br>
                <img src="${course.image}" alt="${course.title}" style="width: 100px; height: auto; margin: 10px 0;">
            `;
            courseList.appendChild(li);
        });
    };

    loadCourses();
});
