window.onload=function(){

    // Add event listener to first dropdown
    document.getElementById('user').addEventListener('change', function(event) {
      const userId = event.target.value;
      populateServicesDropdown(userId);
    });
  
    document.getElementById('agree').addEventListener('click', function(event) {
      event.preventDefault();
      assignService('agreed');
    });
  
    document.getElementById('decline').addEventListener('click', function(event) {
      event.preventDefault();
      assignService('declined');
    });
  
    function assignService(status) {
      const patientId = document.getElementById('user').value;
      const serviceId = document.getElementById('service').value;
      const data = {patient_id: patientId, service_id: serviceId, status: status};
  
      axios.post('http://localhost/Hospital-BackEnd/assign_services_to_users.php', data)
        .then(response => {
        console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    function populateServicesDropdown(user_id) {
        console.log(user_id);
        let data = new FormData();
        data.append('user_id', user_id);
      axios.post('http://localhost/Hospital-BackEnd/get_services_by_user.php',data)
        .then(response => {
          const services = response.data;
  
          const serviceDropdown = document.getElementById('service');
          serviceDropdown.innerHTML = '';
          services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.service_id;
            option.textContent = service.service_name;
            serviceDropdown.appendChild(option);
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    axios.get('http://localhost/Hospital-BackEnd/get_patients.php')
      .then(response => {
        const services = response.data;
  
        const userDropdown = document.getElementById('user');
        services.forEach(service => {
          const option = document.createElement('option');
          option.value = service.userId;
          option.textContent = service.name;
          userDropdown.appendChild(option);
        });
  
        // Populate services dropdown with first user's services by default
        populateServicesDropdown(services[0].userId);
      })
      .catch(error => {
        console.error(error);
      });
  }
  