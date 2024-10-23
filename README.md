# The RoutineMate Website

## Project Description

The RoutineMate: Your Personal Productivity and Health Assistant.
The app is designed to help individuals build and maintain daily routines, specifically targeting users who struggle with time management or have conditions like ADHD.

The web app helps users become more productive by establishing structured routines, receiving reminders for tasks, and tracking their progress.
The app provides several key features:

1. Personalized Daily Routine Planning: Users can log in and set up a daily routine tailored to their specific needs. This could include work tasks, meetings, medication reminders, exercise times, or even setting the time they plan to sleep.
2. Reminders: Using Twilio, the app will send reminders via push notifications or SMS at the times users have scheduled activities. These reminders could include prompts for coding sessions, exercise, medication times, or even bedtime.
3. Routine Tracking: Users can check off completed tasks and activities to help them see their progress throughout the day. This feature will help users stay consistent with their routines and allow them to adjust as needed.
4. Sleep, Exercise, and Medication Support: The app will also serve as a tool for improving wellness habits, by setting reminders for users to exercise, take medications, and establish better sleep routines.
5. Productivity Assistance: For tasks like work or study, the app will help users break down their day into manageable chunks, keeping them focused and on track.
6. The MVP includes the essential features: routine scheduling, reminders, and basic tracking.
7. We aim to gather feedback and iterate from there to create a more robust product that meets our user’s needs.

<img width="1440" alt="" src="">
<img width="1440" alt="" src="">
<img width="1440" alt="" src="">
<img width="1440" alt="" src="">
<img width="1440" alt="" src="">

<img width="1440" alt="" src="">
<img width="1438" alt="" src="">
<img width="1440" alt="" src="">

## Technologies Used

- **Next.js**: For fast, responsive frontend.
- **TypeScript**: Ensures type safety and code reliability
- **Prisma**: For database management.
- **NextAuth**: For secure authentication.
- **shadcn/ui**: Designed component library for frontend.

## Challenges and Future Plans

## How to Install and Run the Project

1. Clone the repository.
2. Run `yarn install` to install dependencies.
3. Create `.env` file with your environment variables (e.g., PayPal API keys, database connection).
4. Run `yarn run dev` to start the development server.

## How to Use the Project

- For admins: Log in to manage campaigns, view donations, and generate reports. Requires authentication (admin login with multi-factor authentication).
- For donors: Browse campaigns, donate via PayPal.
