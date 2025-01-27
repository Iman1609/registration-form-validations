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
  const mobileValue = mobile.value.trim();
  if (mobileValue === "") {
      validateField(mobile, 'Mobile number is required');
  } else if (!/^\d{4}-\d{7}$/.test(mobileValue) && !/^\d{4}-\d{5}$/.test(mobileValue)) {
      const error = document.createElement('div');
      error.classList.add('error-message');
      error.textContent = 'Mobile number must be in format 0000-0000000 or 0300-00000';
      mobile.parentElement.appendChild(error);
      isValid = false;
  }

  // If all validations pass, show the success modal
  if (isValid) {
      openModal('Form submitted successfully!');
      this.reset(); // Reset the form after successful submission
  }
});

// Open the success modal
function openModal(message) {
  document.getElementById('modal-message').textContent = message;
  document.getElementById('success-modal').style.display = 'flex';
}

// Close the success modal
function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}