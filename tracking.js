function submitForm() {
        // Get user inputs
        const date = document.getElementById('date').value;
        const mood = document.querySelector('input[name="mood"]:checked').value;
        const entry = document.getElementById('entry').value;

        saveData(date, mood, entry);

        // Display mood-based tips
        displayTips(mood);
    }

    function displayTips(mood) {
        const tipsElement = document.getElementById('moodTips');
        let tips = '';

        switch (mood) {
            case 'happy':
                tips = '<li>Do something that makes you smile!</li>';
                tips += '<li>Engage in activities you enjoy.</li>';
                tips += '<li>Spend time with your loved ones.</li>';
                tips += '<li>Express gratitude for positive moments in your life.</li>';
                break;
                case 'sad':
                    tips = '<li>Reach out to friends or family for support.</li>';
                    tips += '<li>Consider activities that bring comfort.</li>';
                    tips += '<li>Allow yourself to feel and express your emotions.</li>';
                    break;
                case 'calm':
                    tips = '<li>Enjoy a calming cup of tea!</li>';
                    tips += '<li>Listen to soothing music</li>';
                    tips += '<li>Practice mindfulness to stay present in the moment.</li>';
                    break;
                case 'neutral':
                    tips = '<li>Focus on maintaining balance.</li>';
                    tips += '<li>Consider activities that bring a sense of calm without extreme highs or lows.</li>';
                    tips += '<li>Engage in creative activities.</li>';
                    break;
                case 'anxious':
                    tips = '<li>Acknowledge your anxiety and take steps to calm your mind.</li>';
                    tips += '<li>Practice deep breathing exercises to reduce anxiety.</li>';
                    tips += '<li>Break tasks into smaller, manageable steps to ease overwhelm.</li>';
                    tips += '<li>Consider talking to someone you trust about your feelings.</li>';
                    break;
                    
                case 'energetic':
                    tips = '<li>Channel your energy into productive and positive activities.</li>';
                    tips += '<li>Plan tasks that align with your energetic state for increased productivity.</li>';
                    tips += '<li>Consider creative pursuits to express and utilize your energy.</li>';
                    break;
                    
                case 'stressed':
                    tips = '<li>Identify stressors and implement strategies to manage stress.</li>';
                    tips += '<li>Take short breaks to stretch and relax during stressful periods.</li>';
                    tips += '<li>Practice mindfulness or meditation to alleviate stress.</li>';
                    break;
                case 'confident':
                    tips = '<li>Embrace your confidence and use it to tackle challenges.</li>';
                    tips += '<li>Set ambitious yet achievable goals to maintain your confidence.</li>';
                    tips += '<li>Share your achievements with others to reinforce positive feelings.</li>';
                    break;

                case 'frustated':
                    tips = '<li>Take a break to cool down.</li>';
                    tips += '<li>Acknowledge frustration and find constructive ways to address it.</li>';
                    tips += '<li>Express your feelings through journaling or talking to someone.</li>';
                    break;
                case 'motivated':
                    tips = '<li>Harness your motivation to work towards your goals.</li>';
                    tips += '<li>Surround yourself with positive influences to sustain motivation.</li>';
                    tips += '<li>Celebrate small victories along the way to keep motivation high.</li>';
                    break;                                
                default:
                    tips = 'No specific tips for this mood.';
            }
        
            tipsElement.innerHTML = tips;
        }

        function showHistory() {
            // Retrieve data from local storage
            const historyData = JSON.parse(localStorage.getItem('journalHistory')) || [];
        
            // Display the history data (you can customize this part based on your needs)
            if (historyData.length > 0) {
                let historyText = 'History:\n\n';
                historyData.forEach(entry => {
                    historyText += `Date: ${entry.date}, Mood: ${entry.mood}, Entry: ${entry.entry}\n`;
                });
                alert(historyText);
            } else {
                alert('No history available.');
            }
        }
        function saveData(date, mood, entry) {
            const data = {
                date: date,
                mood: mood,
                entry: entry
            };
            const historyData = JSON.parse(localStorage.getItem('journalHistory')) || [];
            historyData.push(data);
            localStorage.setItem('JournalHistory', JSON.stringify(historyData));
            localStorage.setItem('journalData', JSON.stringify(data));
        }

        function loadData() {
            const storedData = localStorage.getItem('journalData');

            if (storedData) {
                const data = JSON.parse(storedData);
                document.getElementById('date').value = data.date;
                document.querySelector('input[name="mood"][value="${data.mood}"]').checked = true;
                document.getElementById('entry').value = data.entry;
            }
        }

        window.onload = function (){
            loadData();
            showHistory();
        };

        document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const trackingForm = document.getElementById("tracking-form");
    const journalingForm = document.getElementById("journaling-form");

    // ... (existing login form and journaling form logic)

    if (trackingForm) {
        trackingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve values from tracking form
        const trackingDate = document.getElementById("date").value;
        const trackingMood = document.getElementById("mood").value;

        // Save the entry to localStorage
        saveTrackingEntry(trackingDate, trackingMood);

        // Display saved tracking entries
        displaySavedTrackingEntries();

        // Update this part to store the data or display it as needed
        console.log("Tracking Date:", trackingDate);
        console.log("Tracking Mood:", trackingMood);
        });

        // Retrieve and display saved tracking entries
        displaySavedTrackingEntries();
    }

    // ... (existing journaling form logic)
    
    });
function saveTrackingEntry(date, mood) {
  // Get existing entries from localStorage
  const existingEntries = JSON.parse(localStorage.getItem("trackingEntries")) || [];

  // Add the new entry
  existingEntries.push({ date, mood });

  // Save the updated entries back to localStorage
  localStorage.setItem("trackingEntries", JSON.stringify(existingEntries));
}

function displaySavedTrackingEntries() {
  // Get existing entries from localStorage
  const existingEntries = JSON.parse(localStorage.getItem("trackingEntries")) || [];

  // Display the entries on the page (you might want to customize this part)
  const entriesContainer = document.getElementById("saved-tracking-entries");
  if (entriesContainer) {
    entriesContainer.innerHTML = "<h2>History</h2>";

    existingEntries.forEach((entry, index) => {
      entriesContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Mood: ${entry.mood}</p>`;
    });
  }
}
const trackingModule = (function () {
    const trackingEntries = [];
  
    function saveTrackingEntry(date, mood) {
      trackingEntries.push({ date, mood });
    }
  
    function getTrackingEntries() {
      return trackingEntries.slice(); // Return a copy to avoid direct manipulation
    }
  
    return {
      saveTrackingEntry,
      getTrackingEntries,
    };
  })();
  // Function to display saved data
  function displaySavedData() {
    const displayContainer = document.getElementById("display-container");

    // Get tracking entries from the tracking module
    const trackingEntries = trackingModule.getTrackingEntries();

    displayContainer.innerHTML = "<h2>Saved Tracking Entries</h2>";

    trackingEntries.forEach((entry, index) => {
      displayContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Mood: ${entry.mood}</p>`;
    });

    // Get journal entries from the journaling module
    const journalEntries = journalingModule.getJournalEntries();

    displayContainer.innerHTML += "<h2>Saved Journal Entries</h2>";

    journalEntries.forEach((entry, index) => {
      displayContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Entry: ${entry.entry}</p>`;
    });
  }