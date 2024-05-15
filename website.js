let username = "coalition";
let password = "skills-test";
let auth = btoa(`${username}:${password}`);

// Authenticate (dummy API)
fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
  headers: {
    Authorization: `Basic ${auth}`,
  },
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  })
  .then(function (patients) {
    console.log(patients);
    let listEl = document.querySelector("#patient-output");
    let listPatient = document.querySelector("#patient-profile");
    let profImage = document.querySelector("#profile-image");
    let respRate = document.querySelector("#bpmlungs");
    let lungStatus = document.querySelector("#status-lungs");
    let degrees = document.querySelector("#degrees");
    let statusTemp = document.querySelector("#status-temp");
    let bpm = document.querySelector("#bpm-heart");
    let statusHeart = document.querySelector("#status-heart");
    let diagnosticList = document.querySelector("#diagnostic-list-json");
    let diastolic = document.querySelector("#diastolic");
    let diastolicLevels = document.querySelector("#diastolicLevels");
    let systolic = document.querySelector("#systolic");
    let systolicLevels = document.querySelector("#systolicLevels");
    let profileDetails = document.querySelector("#profile-details");
    let labResults = document.querySelector("#lab-results");

    let out = "";

    for (let patient of patients) {
      out += `
        <tr class="patient-row">
            <td> <img class="json-list-image" src='${patient.profile_picture}'></td>
            <td class="patient-name">${patient.name}</td>
            <td class="pg-pa">${patient.gender}, ${patient.age}</td>
            <td> <img class="ellipses" src="images/HealthCare Dashboard/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"></td>
        </tr>
        `;
    }

    listEl.innerHTML = out;

    listPatient.innerHTML = `${patients[3].name}`;

    profImage.innerHTML = `<img class="profile-image" src='${patients[3].profile_picture}'>`;

    respRate.innerHTML = `${patients[3].diagnosis_history[0].respiratory_rate.value}`;

    lungStatus.innerHTML = `${patients[3].diagnosis_history[0].respiratory_rate.levels}`;

    degrees.innerHTML = `${patients[3].diagnosis_history[0].temperature.value}`;

    statusTemp.innerHTML = `${patients[3].diagnosis_history[0].temperature.levels}`;

    bpm.innerHTML = `${patients[3].diagnosis_history[0].heart_rate.value}`;

    statusHeart.innerHTML = `<img class = "arrow" src="images/HealthCare Dashboard/ArrowDown.svg">${patients[3].diagnosis_history[0].heart_rate.levels}`;

    systolic.innerHTML = `${patients[3].diagnosis_history[0].blood_pressure.systolic.value}`;

    diastolic.innerHTML = `${patients[3].diagnosis_history[0].blood_pressure.diastolic.value}`;

    diastolicLevels.innerHTML = `<img class = "arrow" src="images/HealthCare Dashboard/ArrowDown.svg">${patients[3].diagnosis_history[0].blood_pressure.diastolic.levels}`;

    systolicLevels.innerHTML = `<img class = "arrow" src="images/HealthCare Dashboard/ArrowUp.svg">${patients[3].diagnosis_history[0].blood_pressure.systolic.levels}`;

    profileDetails.innerHTML = `

    <table>
    <tr>
    <img  class = "profile-section" src="images/HealthCare Dashboard/BirthIcon.svg"><p class="profile-header">Date of Birth</p><p class="profile-header-bottom">${patients[3].date_of_birth}</p><br>
    </tr>
    <tr>
    <img  class = "profile-section" src="images/HealthCare Dashboard/FemaleIcon.svg"><p class="profile-header">Gender</p><p class="profile-header-bottom">${patients[3].gender}</p><br>
    </tr>
    <tr>
    <img  class = "profile-section" src="images/HealthCare Dashboard/PhoneIcon.svg"><p class="profile-header">Contact Info.</p><p class="profile-header-bottom">${patients[3].phone_number}</p><br>
    </tr>
    <tr>
    <img  class = "profile-section" src="images/HealthCare Dashboard/PhoneIcon.svg"><p class="profile-header">Emergency Contacts</p><p class="profile-header-bottom">${patients[3].emergency_contact}</p><br>
    </tr>
    <tr>
    <img  class = "profile-section" src="images/HealthCare Dashboard/InsuranceIcon.svg"><p class="profile-header">Insurance Provider</p><p class="profile-header-bottom">${patients[3].insurance_type}</p>
    </tr>
    </table>

    `;

    diagnosticList.innerHTML = 
    `
    <tr>
    <td class="section">${patients[3].diagnostic_list[0].name}</td>
    <td class="section">${patients[3].diagnostic_list[0].description}</td>
    <td class="section">${patients[3].diagnostic_list[0].status}</td>
    </tr>
    <tr>
    <td class="section">${patients[0].diagnostic_list[0].name}</td>
    <td class="section">Insulin Resistance and Elevated Blood Sugar</td>
    <td class="section">${patients[0].diagnostic_list[0].status}</td>
    </tr>
    <tr>
    <td class="section">${patients[1].diagnostic_list[0].name}</td>
    <td class="section">${patients[1].diagnostic_list[0].description}</td>
    <td class="section">${patients[1].diagnostic_list[0].status}</td>
    </tr>
    <tr>
    <td class="section">${patients[2].diagnostic_list[0].name}</td>
    <td class="section">${patients[2].diagnostic_list[0].description}</td>
    <td class="section">${patients[2].diagnostic_list[0].status}</td>
    </tr>
    `;

    let outList = "";

    for (let patient of patients) {
      outList += `
        <tr>
        <td class="section">${patient.diagnostic_list[0].name}</td>
        <td class="section">${patient.diagnostic_list[0].description}</td>
        <td class="section">${patient.diagnostic_list[0].status}</td>
        </tr>
        <hr class="diagnostic-line">
        `;

        diagnosticList.innerHTML = outList;
    }

    let labList = "";

    for (let patient of patients) {
      labList += `
        <tr>
        <td class="list-results">${patient.lab_results[0]}<img class="lab-download" src="images/HealthCare Dashboard/download_FILL0_wght300_GRAD0_opsz24 (1).svg"></td>
        <br><br><br>
        </tr>
        `;

        labResults.innerHTML = labList;
    }

  })
  .catch(function (error) {
    console.warn(error);
  });
