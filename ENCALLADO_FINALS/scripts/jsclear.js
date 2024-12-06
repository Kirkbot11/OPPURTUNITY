

$(document).ready(function () {

    $('#field-of-study, #location, #degree-level').select2();
 
    $('#field-of-study, #location, #degree-level').change(function () {
      applyFilters();
    });

    $('input[name="school-type"], input[name="exam-requirement"], input[name="online-applications"]').change(function () {
      applyFilters();
    });

    function applyFilters() {
      const filters = {
        fieldOfStudy: $('#field-of-study').val(),
        location: $('#location').val(),
        degreeLevel: $('#degree-level').val(),
        schoolType: $('input[name="school-type"]:checked').val(),
        examRequirement: $('input[name="exam-requirement"]:checked').val(),
        onlineApplications: $('input[name="online-applications"]:checked').val(),
      };
  
      console.log(filters); 

      updateContent(filters);
    }
  

    function updateContent(filters) {

      console.log('Updated content with filters:', filters);
  
    }
  
 
    $('.clear-filters').click(function (e) {
      e.preventDefault();
  

      $('#field-of-study').val('any').trigger('change');
      $('#location').val('any').trigger('change');
      $('#degree-level').val('any').trigger('change');
      $('input[name="school-type"]').prop('checked', false);
      $('input[name="exam-requirement"]').prop('checked', false);
      $('input[name="online-applications"]').prop('checked', false);
  
   
      applyFilters();
    });
  });
  


  $(document).ready(function() {
    const fieldsOfStudy = [
      "Engineering", "Law", "Nursing", "Information Technology", 
      "Computer Science", "Business Administration", "Psychology", 
      "Education", "Architecture", "Hospitality Management", "Fine Arts",
      "Political Science", "Biology", "Physics", "Chemistry",
      "Environmental Science", "Marketing", "Economics", "Journalism", 
      "Tourism Management"
    ];
  
    const locations = [
      "Manila", "Quezon City", "Makati", "Cebu City", 
      "Davao City", "Taguig", "Pasig", "Caloocan", 
      "Muntinlupa", "Parañaque", "Las Piñas", "Baguio City", 
      "Antipolo", "Santa Rosa", "Biñan", "Calamba", 
      "Bacoor", "Dasmariñas", "Valenzuela", "Tarlac"
    ];
  
    // Function to populate a dropdown
    function populateDropdown(selector, options) {
      let dropdown = $(selector);
      dropdown.empty(); // Clear existing options
      dropdown.append('<option value="">Select an option</option>');
      options.forEach(option => {
        dropdown.append(`<option value="${option}">${option}</option>`);
      });
    }
  
    // Populate the dropdowns
    populateDropdown('#field-of-study', fieldsOfStudy);
    populateDropdown('#location', locations);
  });
  