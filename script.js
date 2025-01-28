document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((msg) => msg.remove());
  
    // Validation helper function
    const validateField = (field, message) => {
      if (field.value.trim() === "") {
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.textContent = message;
        field.parentElement.appendChild(error);
        isValid = false;
      }
    };
  
    // Validate Name fields
    validateField(document.getElementById('first-name'), 'First name is required');
    validateField(document.getElementById('last-name'), 'Last name is required');
  
    // Validate Date of Birth fields
    validateField(document.getElementById('month'), 'Month is required');
    validateField(document.getElementById('day'), 'Day is required');
    validateField(document.getElementById('year'), 'Year is required');
  
    // Validate Gender
    validateField(document.getElementById('gender'), 'Gender is required');
  
    // Validate Email
    const email = document.getElementById('email');
    if (email.value.trim() === "") {
      validateField(email, 'Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      const error = document.createElement('div');
      error.classList.add('error-message');
      error.textContent = 'Invalid email format';
      email.parentElement.appendChild(error);
      isValid = false;
    }
  
    // Validate Mobile Number
const mobile = document.getElementById('mobile');
let mobileValue = mobile.value.trim();  // Remove leading/trailing spaces

// Remove non-digit characters like spaces, dashes, etc.
mobileValue = mobileValue.replace(/\D/g, '');  // Remove all non-digit characters

// Validate if the number starts with '03' and has exactly 11 digits
if (mobileValue === "") {
    validateField(mobile, 'Mobile number is required');
    isValid = false;
} else if (!/^03\d{9}$/.test(mobileValue)) {  // Check if it starts with "03" and has exactly 11 digits
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.textContent = 'Mobile number must start with "03" and have exactly 11 digits.';
    mobile.parentElement.appendChild(error);
    isValid = false;
}
  
    // If all validations pass, show the success modal with form data
    if (isValid) {
      const formData = {
        firstName: document.getElementById('first-name').value.trim(),
        lastName: document.getElementById('last-name').value.trim(),
        dob: `${document.getElementById('day').value.trim()}-${document.getElementById('month').value.trim()}-${document.getElementById('year').value.trim()}`,
        gender: document.getElementById('gender').value.trim(),
        email: email.value.trim(),
        mobile: mobileValue
      };
  
      openModal(`
        <h2>Submitted Data</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile:</strong> ${formData.mobile}</p>
      `);
  
      this.reset(); // Reset the form after successful submission
    }
  });
  
  // Open the modal with dynamic content
  function openModal(content) {
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerHTML = content; // Set the modal content dynamically
    document.getElementById('success-modal').style.display = 'flex';
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
  }
  