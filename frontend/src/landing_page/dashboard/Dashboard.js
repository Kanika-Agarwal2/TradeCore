import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("http://localhost:3002/verify", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          // Already logged in
          window.location.replace("http://localhost:3001/");
        } else {
          // Not log in
          window.location.replace("http://localhost:3001/login");
        }
      } catch (error) {
        console.log("Authentication check error:", error);

        window.location.replace("http://localhost:3001/login");
      }
    };

    checkAuthentication();
  }, []);

  return null;
};

export default Dashboard;
