window.onload=function(){
      axios.get('http://localhost/Hospital-BackEnd/get_hospitals.php')
        .then(response => {
          const hospitals = response.data;
          const hospitalDropdown = document.getElementById('hospital');
          hospitals.forEach(hospital => {
            const option = document.createElement('option');
            option.value = hospital.id;
            option.textContent = hospital.name;
            hospitalDropdown.appendChild(option);
          });
        })
        .catch(error => {
          console.error(error);
        });

      axios.get('http://localhost/Hospital-BackEnd/get_patients.php')
        .then(response => {
          const patients = response.data;

          const userDropdown = document.getElementById('user');
          patients.forEach(patient => {
            const option = document.createElement('option');
            option.value = patient.id;
            option.textContent = patient.name;
            userDropdown.appendChild(option);
          });
        })
        .catch(error => {
          console.error(error);
        });


        const assignForm = document.getElementById("assign-form");
        assignForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const patientId = document.getElementById("user").value;
        const hospitalId = document.getElementById("hospital").value;
        console.log(patientId,hospitalId)
        let data = new FormData();
        data.append('patientId', patientId);
        data.append('hospitalId', hospitalId);
        axios.post("http://localhost/Hospital-BackEnd/assign_patients_to_hospitals.php",data)
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });

        
        })





}