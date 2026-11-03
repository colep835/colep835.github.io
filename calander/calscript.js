// All seven days of the week
        const days = [
            "Sunday",    // 1
            "Monday",    // 2
            "Tuesday",   // 3
            "Wednesday", // 4
            "Thursday",  // 5
            "Friday",    // 6
            "Saturday"   // 7
        ];

        function createCalendar(year, month) {
            const calendar = document.getElementById("calendar");
            calendar.innerHTML = "";

            // Create the seven day headings
            for (let i = 0; i < days.length; i++) {
                const cell = document.createElement("div");
                cell.className = "day header";
                cell.textContent = (i + 1) + ". " + days[i];
                calendar.appendChild(cell);
            }

            // Find which day the month starts on
            const firstDay = new Date(year, month, 1).getDay();

            // Find the number of days in the month
            const daysInMonth =
                new Date(year, month + 1, 0).getDate();

            // Add empty cells before the first date
            for (let i = 0; i < firstDay; i++) {
                const emptyCell = document.createElement("div");
                emptyCell.className = "day";
                calendar.appendChild(emptyCell);
            }

            // Add each date to the grid
            for (let date = 1; date <= daysInMonth; date++) {
                const cell = document.createElement("div");
                cell.className = "day";
                cell.textContent = date;
                calendar.appendChild(cell);
            }
        }

        // JavaScript months start at 0:
        // 0 = January, 1 = February, ..., 11 = December
        createCalendar(2026, 9); // October 2026