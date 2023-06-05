function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const companyName = document.getElementById('companyName').value;
    const companyWebsite = document.getElementById('companyWebsite').value;
    const jobProfile = document.getElementById('jobProfile').value;
    const package = document.getElementById('package').value;
    const date = document.getElementById('date').value;
    const venue = document.getElementById('venue').value;
    const description = document.getElementById('description').value;
    const selectionProcess = document.getElementById('selectionProcess').value;
    const registrationLink = document.getElementById('registrationLink').value;
    const jobLocation = document.getElementById('jobLocation').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const lastDate = document.getElementById('lastDate').value;
  
    // Retrieve selected eligible courses
    const eligibleCourses = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      eligibleCourses.push(checkbox.value);
    });
  
    // Display job post data
    console.log('Company Name:', companyName);
    console.log('Company Website:', companyWebsite);
    console.log('Job Profile:', jobProfile);
    console.log('Package:', package);
    console.log('Eligible Courses:', eligibleCourses);
    console.log('Date:', date);
    console.log('Venue:', venue);
    console.log('Job Description:', description);
    console.log('Selection Process:', selectionProcess);
    console.log('Registration Link:', registrationLink);
    console.log('Job Location:', jobLocation);
    console.log('Contact Person Name:', contactPerson);
    console.log('Last Date of Apply:', lastDate);
  
    // Clear form fields
    document.getElementById('companyName').value = '';
    document.getElementById('companyWebsite').value = '';
    document.getElementById('jobProfile').value = '';
    document.getElementById('package').value = '';
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.getElementById('date').value = '';
    document.getElementById('venue').value = '';
    document.getElementById('description').value = '';
    document.getElementById('selectionProcess').value = '';
    document.getElementById('registrationLink').value = '';
    document.getElementById('jobLocation').value = '';
    document.getElementById('contactPerson').value = '';
    document.getElementById('lastDate').value = '';
  }
  
  