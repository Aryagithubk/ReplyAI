document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup loaded, attempting to retrieve stored data...");

  chrome.storage.local.get(["linkedinName", "linkedinGender"], (data) => {
    console.log("Retrieved data from storage:", data);

    if (data.linkedinName) {
      document.getElementById("linkedinName").value = data.linkedinName;
      console.log("Loaded Name:", data.linkedinName);
    } else {
      console.log("No Name found in storage.");
    }

    if (data.linkedinGender) {
      document.getElementById("linkedinGender").value = data.linkedinGender;
      console.log("Loaded Gender:", data.linkedinGender);
    } else {
      console.log("No Gender found in storage.");
    }
  });

  document.getElementById("saveButton").addEventListener("click", () => {
    const name = document.getElementById("linkedinName").value.trim();
    const gender = document.getElementById("linkedinGender").value;

    if (name) {
      console.log("Saving data:", {
        linkedinName: name,
        linkedinGender: gender,
      });

      chrome.storage.local.set(
        { linkedinName: name, linkedinGender: gender },
        () => {
          console.log("Data successfully saved in local storage.");
          chrome.storage.local.get(
            ["linkedinName", "linkedinGender"],
            (updatedData) => {
              console.log("Confirmed saved data:", updatedData);
            }
          );
          alert(`Settings Saved: ${name} (${gender})`);
        }
      );
    } else {
      console.log("Save failed: Name field is empty.");
      alert("Please enter your name.");
    }
  });
});
