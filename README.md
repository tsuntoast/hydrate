# hydrate: Water Tracker App

CS 4540-03 Topics in Advanced Computer Science: Mobile Development\
Group 9: Erica Santos, Dean Baquir, Kevin Aguilera, Zudong Li

## Project Link
--publish

## Notes
The app has no database, meaning the logs cannot be stored and will be lost when refreshing the app. The app also has no notifications.

## Home Screen
The app loads into the Home Screen, which shows your water intake for the day. The user can input positive number values representing how many ounces/millimeters of water they drank. When the 'Submit' button is pressed, the count will update. The user can press on the arrow icon to show a list of their logs, showing how much they drank at what time. The most recent log will have a light blue background. To delete a log, the user can swipe right on a log and press 'Delete.'

## Activity Screen
Data for the day, week, and month will be shown on the Activity Screen. Due to a lack of a database, logs cannot be stored so the data shown is not responsive to input. Only Saturday will show dynamic data on the chart. If there was a database, this screen would also show averages and summaries for the past week and month, such as “This week your water intake was 58oz, which was 13% lower than last week’s average.”

## Settings Screen
On the Settings Screen, the user can either set their preferred unit of volume or enable and customize notifications. Switching to either unit of volume will reflect on both the Home and Activity Screen, converting the numbers respectively. The user can enable and set the interval and time window of notifications, though actual notifications are not programmed at the moment.
