# The RoutineMate: Your Personal Productivity and Health Assistant.

<img width="1440" alt="Health Assisant" src="/public/assets/1.png">

<img width="1440" alt="Health Assisant" src="/public/assets/project.png">

## Project Description

### Problem: 
Many individuals, particularly those with ADHD or time management challenges, struggle to maintain productive daily routines.

***Disorganization leads to:***
- Missed deadlines 
- Forgotten tasks
- Decreased productivity 
- Poor health habits 

***Users lack tools that provide:***
 - Structure 
 - Reminders 
 - Tracking in one unified app 

### Solution: 
Personal productivity and health assistant web app designed to help individuals build and maintain daily routines, specifically targeting users who struggle with time management or have conditions like ADHD.

The web app helps users become more productive by establishing structured routines, receiving reminders for tasks, and tracking their progress.

The app provides several key features:

1. Personalized Daily Routine Planning: Users can log in and set up a daily routine tailored to their specific needs. This could include work tasks, meetings, medication reminders, exercise times, or even setting the time they plan to sleep.
2. Reminders: Using Twilio, the app will send reminders via push notifications or SMS at the times users have scheduled activities. These reminders could include prompts for coding sessions, exercise, medication times, or even bedtime.
3. Routine Tracking: Users can check off completed tasks and activities to help them see their progress throughout the day. This feature will help users stay consistent with their routines and allow them to adjust as needed.
4. Sleep, Exercise, and Medication Support: The app will also serve as a tool for improving wellness habits, by setting reminders for users to exercise, take medications, and establish better sleep routines.
5. Productivity Assistance: For tasks like work or study, the app will help users break down their day into manageable chunks, keeping them focused and on track.
6. The MVP includes the essential features: routine scheduling, reminders, and basic tracking.

## Technologies Used

- **Next.js**: For fast, responsive frontend.
- **TypeScript**: Ensures type safety and code reliability
- **Prisma**: For database management.
- **Twilio SMS API**: For SMS reminders
- **NextAuth**: For secure authentication.
- **shadcn/ui**: Designed component library for frontend.

## Challenges and Future Plans

## How to Install and Run the Project

1. Clone the repository.
2. Run `yarn install` to install dependencies.
3. Create `.env` file with your environment variables (e.g., Twilio API keys, database connection).
4. Run `yarn run dev` to start the development server.

## User workflow

1. User logs in: The dashboard displays the user's pre-configured daily routine.
2. The User inputs their mobile number and submits it.
3. Adds a new routine: The user enters the routine details and sets a reminder. 
4. Adjusts the schedule: The user sets the time. 
5. Receives reminders: The app sends timely SMS for routine, events, or medication. 
6. Tracks time: The user starts and stops the routine (active/not active) to track the routine.



***Built by*** 
- [Olena](https://github.com/OlenaReukova) 
- [Farzaneh](https://github.com/farzaneh-haghani) 

[Presentaion](https://docs.google.com/presentation/d/10c3bL-FdKEdrmS7AWcjj6go80NuPdyCD-OUfyPm7qEc/edit?usp=sharing)
