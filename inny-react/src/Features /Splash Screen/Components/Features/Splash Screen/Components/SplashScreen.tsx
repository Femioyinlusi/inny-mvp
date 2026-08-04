/**
*
======================================================================
======
* SplashScreen Component
*
======================================================================
======
*
* Description:
* Displays the application's splash screen while the system initializes.
*
* Responsibilities:
* 1. Display product identity.
* 2. Display loading animation.
* 3. Execute startup checks.
* 4. Display application version.
* 5. Navigate to the next page when initialization completes.
*
* Inputs:
* None
*
* Outputs:
* Displays splash screen until startup completes.
*
* Assumptions:
* - Backend API is available.
* - Internet may or may not exist.
* - Authentication service exists.
*/
import { useEffect, useState } from "react";
import "./SplashScreen.css";
import { initializeApplication } from "../Services/StartupService";

export default function SplashScreen() {
// Current loading message
const [status, setStatus] = useState("Starting INNY...");
/**
* Executes once when component loads.
*/
useEffect(() => {
async function startApplication() {
const result = await initializeApplication(setStatus)
if (result.success) {
    if (result.authenticated) {
    window.location.href = "/dashboard";
    } else {
    window.location.href = "/login";
    }
    } else {
    alert(result.message);
    }
    }
    startApplication();
    }, []);
    return (
    <div className="splash">
    <h1>INNY</h1>
    <p className="purpose">
    Your Intuitive Thinking Tool
    </p>
    <div className="spinner"></div>
    <p>{status}</p>
    <footer>
    Version 0.1
    </footer>
    </div>
    );
}