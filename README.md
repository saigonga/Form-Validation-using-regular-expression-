# React Registration Form with Validation

This project is a modern registration form built with React. It features real-time validation, error messages, show/hide password functionality, and a clean, responsive UI. No third-party form libraries are used—validation is handled with React state and logic.

## Features

- **All fields required**: First Name, Last Name, Username, Email, Password, Confirm Password, Phone Number (with country code), Country, City, PAN No, and Aadhar No.
- **Real-time validation**: Error messages appear instantly as you type invalid input.
- **Show/Hide Password**: Toggle password visibility using SVG icons.
- **Success Notification**: Displays a success message below the submit button when the form is valid and submitted.
- **Form Reset**: The form resets after successful submission.
- **Responsive Design**: Looks great on desktop and mobile.

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
public/
  show.svg         # SVG icon for 'show password'
  hidden.svg       # SVG icon for 'hide password'
src/
  App.jsx          # Main form component with validation logic
  App.css          # Styling for the form
  main.jsx         # Entry point
```

## How Validation Works
- **Names**: Only letters, at least 2 characters.
- **Username**: Letters, numbers, underscores, at least 3 characters.
- **Email**: Standard email format.
- **Password**: At least 6 characters.
- **Confirm Password**: Must match password.
- **Phone Number**: 10 digits.
- **PAN No**: Follows Indian PAN format (e.g., ABCDE1234F).
- **Aadhar No**: 12 digits.
- **Country/City**: Must be selected.

## Customization
- To add more countries/cities, edit the `<select>` options in `App.jsx`.
- To change validation rules, update the logic in the `validateForm` and `handleChange` functions.
- To use different icons, replace `show.svg` and `hidden.svg` in the `public` folder.

## License
This project is open source and free to use for learning and personal projects.

---

**Made with ❤️ using React.**
