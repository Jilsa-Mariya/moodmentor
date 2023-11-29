document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const trackingForm = document.getElementById("tracking-form");
  const  notesContainer = document.getElementById("notes-container");
  const tipsContainer = document.getElementById("tips-container");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your actual login logic here
    // For now, let's simulate a successful login
    const isValidLogin = username === "moodmentor" && password === "moodmentor";

    if (isValidLogin) {
      // Redirect to the dashboard after a successful login
      window.location.href = "menu.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });


  if (trackingForm && notesContainer && tipsContainer) {
    trackingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve values from form elements (date, mood, etc.)
      const date = document.getElementById("date").value;
      const mood = document.getElementById("mood").value;

      // Display tips based on the selected mood
      displayNotesandTips(mood);
      // Update this part to store the data or display it as needed
      console.log("Date:", date);
      console.log("Mood:", mood);

      // Add logic to display tips based on the selected mood
      // You can update the 'tips' textarea accordingly
    });
  }
  function displayNotesandTips(selectedMood) {
    // Define tips for different moods
    const moodNotes = "Your custom notes for this mood..."
    const moodTips = {
      happy: "Tips for a happy mood...",
      sad: "Tips for a sad mood...",
      relaxed: "Tips for a relaxed mood...",
      // Add more moods and corresponding tips
      // ...
    };
    notesContainer.textContent = "Notes: " + moodNotes;
    // Display the tips in the tipsContainer
    tipsContainer.textContent = "Tips: " + (moodTips[selectedMood] || "No tips available for this mood.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const trackingForm = document.getElementById("tracking-form");
  const journalingForm = document.getElementById("journaling-form");

  // ... (existing login form and tracking form logic)

  if (journalingForm) {
    journalingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve values from journaling form
      const journalDate = document.getElementById("journal-date").value;
      const journalEntry = document.getElementById("journal-entry").value;

      // Update this part to store the data or display it as needed
      console.log("Journal Date:", journalDate);
      console.log("Journal Entry:", journalEntry);
    });
  }
});
if (journalingForm) {
  journalingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve values from journaling form
    const journalDate = document.getElementById("journal-date").value;
    const journalEntry = document.getElementById("journal-entry").value;

    // Save the entry to localStorage
    saveJournalEntry(journalDate, journalEntry);

    // Update this part to store the data or display it as needed
    console.log("Journal Date:", journalDate);
    console.log("Journal Entry:", journalEntry);
  });

  // Retrieve and display saved journal entries
  displaySavedEntries();
}

function saveJournalEntry(date, entry) {
// Get existing entries from localStorage
const existingEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

// Add the new entry
existingEntries.push({ date, entry });

// Save the updated entries back to localStorage
localStorage.setItem("journalEntries", JSON.stringify(existingEntries));
}

function displaySavedEntries() {
// Get existing entries from localStorage
const existingEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

// Display the entries on the page (you might want to customize this part)
const entriesContainer = document.getElementById("saved-entries");
if (entriesContainer) {
  entriesContainer.innerHTML = "<h2>Saved Journal Entries</h2>";

  existingEntries.forEach((entry, index) => {
    entriesContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Entry: ${entry.entry}</p>`;
  });
}
}
const journalingModule = (function () {
  const journalEntries = [];

  function saveJournalEntry(date, entry) {
    journalEntries.push({ date, entry });
  }

  function getJournalEntries() {
    return journalEntries.slice(); // Return a copy to avoid direct manipulation
  }

  return {
    saveJournalEntry,
    getJournalEntries,
  };
})();

