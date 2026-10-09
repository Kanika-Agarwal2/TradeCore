import React, { useEffect } from "react";
import { API_URL, DASHBOARD_URL } from "../../config";
const Dashboard = () => {
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(`${API_URL}/verify`, {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          // Already logged in
          window.location.replace(`${DASHBOARD_URL}/`);
        } else {
          // Not log in
          window.location.replace(`${DASHBOARD_URL}/`);
        }
      } catch (error) {
        console.log("Authentication check error:", error);

        window.location.replace(`${DASHBOARD_URL}/login`);
      }
    };

    checkAuthentication();
  }, []);

  return null;
};

export default Dashboard;
