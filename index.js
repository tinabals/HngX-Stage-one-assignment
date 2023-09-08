 // JavaScript code to update dynamic content
        
        // Function to get the current day of the week
        function getCurrentDay() {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const today = new Date();
            return days[today.getDay()];
        }

        // Function to get the current UTC time in milliseconds
        function getCurrentUTCTime() {
            return new Date().getTime();
        }

        // Update the current day of the week and UTC time
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${getCurrentDay()}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()} ms`;