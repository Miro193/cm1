import { useState } from "react";
import "./SignupPage.css"; 

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("fi");

  const isValidEmail = email.includes("@");
  const isStrongPassword = password.length >= 6;

  const getGreeting = (lang) => {
    switch (lang) {
      case "fi":
        return "Moi";
      case "en":
        return "Hello";
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "Hello";
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={isValidEmail ? "valid" : "invalid"}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={isStrongPassword ? "valid" : "invalid"}
        />

        <label>Nationality:</label>
        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </form>

      <p>{getGreeting(nationality)}</p>
      <p>Your email is {email || "john@doe.com"}</p>
    </div>
  );
};

export default SignupPage;
