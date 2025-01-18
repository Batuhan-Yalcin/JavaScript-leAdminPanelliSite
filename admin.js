document.addEventListener("DOMContentLoaded", function () {
    const addCourseForm = document.getElementById("add-course-form");
    const courseList = document.getElementById("course-list");
    const submitButton = addCourseForm.querySelector("button[type='submit']"); // Formdaki submit düğmesi

    const loadCourses = () => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courseList.innerHTML = "";

        courses.forEach((course, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${course.title}</strong><br>
                ${course.description}<br>
                <img src="${course.image}" alt="${course.title}" style="width: 100px; height: auto; margin: 10px 0;">
                <button class="edit-btn" data-index="${index}">Düzenle</button>
                <button class="delete-btn" data-index="${index}">Sil</button>
            `;
            courseList.appendChild(li);
        });

        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const index = button.getAttribute("data-index");
                deleteCourse(index);
            });
        });

        const editButtons = document.querySelectorAll(".edit-btn");
        editButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const index = button.getAttribute("data-index");
                editCourse(index);
            });
        });
    };

    const addCourse = (newCourse) => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.push(newCourse);
        localStorage.setItem("courses", JSON.stringify(courses));
        loadCourses();
    };

    const deleteCourse = (index) => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.splice(index, 1);
        localStorage.setItem("courses", JSON.stringify(courses));
        loadCourses();
    };

    const editCourse = (index) => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        const course = courses[index];

        document.getElementById("course-title").value = course.title;
        document.getElementById("course-description").value = course.description;
        document.getElementById("course-image").value = course.image;

        addCourseForm.dataset.editIndex = index; // Düzenleme için işaret
        submitButton.textContent = "Güncelle"; // Düğme metnini değiştir
    };

    addCourseForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("course-title").value;
        const description = document.getElementById("course-description").value;
        const image = document.getElementById("course-image").value;

        if (!title || !description || !image) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        const newCourse = { title, description, image };

        if (addCourseForm.dataset.editIndex) {
            const index = addCourseForm.dataset.editIndex;
            const courses = JSON.parse(localStorage.getItem("courses")) || [];
            courses[index] = newCourse;
            localStorage.setItem("courses", JSON.stringify(courses));
            delete addCourseForm.dataset.editIndex;
            submitButton.textContent = "Ekle"; // Düzenleme tamamlandığında düğme metnini sıfırla
        } else {
            addCourse(newCourse);
        }

        addCourseForm.reset();
        loadCourses();
    });

    loadCourses();
});
