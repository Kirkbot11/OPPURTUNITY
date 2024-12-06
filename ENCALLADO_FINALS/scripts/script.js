$(document).ready(function() {
  const locations = [
    "Manila City", 
    "Cavite City", 
    "Rizal City", 
    "Cebu City",
    "Quezon City",
    "Davao City",
    "Makati City",
    "Baguio City",
    "Taguig City",
    "Pasig City",
    "Las Piñas City",
    "Pasay City",
    "Parañaque City",
    "Marikina City",
    "Muntinlupa City",
    "San Juan City",
    "Valenzuela City",
    "Calamba City",
    "Antipolo City",
    "Santa Rosa City",
    "Biñan City",
    "Bacoor City",
    "Dasmariñas City",
    "Tarlac City"
  ];

  const bachelorDegrees = [
    "Bachelor's Degree", 
    "Masteral Degree", 
    "Doctoral Degree"
  ];

  const courses = [
    "Information Technology",
    "Computer Science",
    "Computer Engineering",
    "Electronics and Communications Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Accountancy",
    "Business Administration",
    "Nursing",
    "Education",
    "Psychology",
    "Architecture",
    "Hospitality Management",
    "Tourism Management",
    "Marketing",
    "Economics",
    "Environmental Science",
    "Journalism",
    "Political Science",
    "Law",
    "Fine Arts",
    "Philosophy",
    "Biology",
    "Physics",
    "Chemistry"
  ];


  const scholarshipStatus = ["Ongoing", "Pending", "TBA"];

  // Populate select dropdowns with options for college search
  function populateDropdown(selector, options) {
    let dropdown = $(selector);
    dropdown.empty();
    dropdown.append('<option value="">Select an option</option>');
    options.forEach(function(option) {
      dropdown.append('<option value="' + option + '">' + option + '</option>');
    });
  }

  // Populate dropdowns for college and scholarship sections
  populateDropdown('#college-location', locations);
  populateDropdown('#college-bachelor', bachelorDegrees);
  populateDropdown('#college-course', courses);
  populateDropdown('#scholarship-location', locations);
  populateDropdown('#scholarship-bachelor', bachelorDegrees);
  populateDropdown('#scholarship-course', scholarshipStatus);

  // Initialize Select2 on dropdowns
  $('#college-location, #college-bachelor, #college-course, #scholarship-location, #scholarship-bachelor, #scholarship-course').select2({
    placeholder: "Select an option",
    allowClear: true
  });

  // Handle the "Find" buttons click for College and Scholarships
  $('#findBtnCollege').click(function() {
    var location = $('#college-location').val();
    var degree = $('#college-bachelor').val();
    var course = $('#college-course').val();

    if (location && degree && course) {
      window.location.href = "college.html"; 
    } else {
      alert("Please select all filters.");
    }
  });

  $('#findBtnScholarships').click(function() {
    var location = $('#scholarship-location').val();
    var degree = $('#scholarship-bachelor').val();
    var course = $('#scholarship-course').val();

    if (location && degree && course) {
      window.location.href = "scholarships.html"; 
    } else {
      alert("Please select all filters.");
    }
  });


  // Smooth scroll for back to top button (if it exists in your HTML)

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault(); 
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
});






  function redirectToMain(event) {
    event.preventDefault(); 
    window.location.href = "main.html"; 
  }


  document.querySelectorAll('.view-ranking-btn').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'list.html';
    });
  });
  