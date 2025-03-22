import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { UserData } from "../components/DownloadForm";

/**
 * Submits user data to Firestore and returns success status.
 * Always returns true so download can continue regardless of Firebase status.
 */
export async function submitUserData(userData: UserData): Promise<boolean> {
  if (!db) {
    console.warn("Firebase/Firestore not available, skipping remote data save");
    saveUserDataLocally(userData); // Save to localStorage as fallback
    return true; // Return true to allow download
  }

  console.log("Submitting user data:", userData); // Debugging log

  try {
    // Save the data to localStorage as a backup
    saveUserDataLocally(userData);

    // Use AbortController to cancel Firestore request if it takes too long
    const controller = new AbortController();
    let timeoutReached = false;

    const timeoutId = setTimeout(() => {
      timeoutReached = true;
      console.warn("Firebase operation timed out");
      controller.abort(); // Cancel Firestore request
    }, 5000); // 5-second timeout

    try {
      await addDoc(collection(db, "users"), {
        name: userData.name.trim(),
        email: userData.email.trim().toLowerCase(),
        college: userData.college.trim(),
        experience: userData.experience.trim(),
        created_at: serverTimestamp(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || "direct",
        platform: navigator.platform,
        timestamp_client: new Date().toISOString(),
      });

      if (!timeoutReached) {
        clearTimeout(timeoutId); // Clear timeout if Firestore succeeds
        console.log("User data successfully saved to Firestore");
      }
      return true;
    } catch (firestoreError) {
      if (timeoutReached) {
        console.warn("Firestore request was aborted due to timeout.");
      } else {
        console.error("Error saving user data to Firebase:", firestoreError);
      }
      return true;
    }
  } catch (error) {
    console.error("Unexpected error in submitUserData:", error);
    return true; // Return true to allow download anyway
  }
}

/**
 * Save user data to localStorage as a fallback.
 */
function saveUserDataLocally(userData: UserData): void {
  try {
    localStorage.setItem(
      "user-data",
      JSON.stringify({
        ...userData,
        timestamp: new Date().toISOString(),
      })
    );
    console.log("User data saved to localStorage");
  } catch (e) {
    console.warn("Failed to save data to localStorage");
  }
}

/**
 * Trigger the download of the extension zip file.
 */
export function downloadExtension(): void {
  try {
    // Your GitHub Release URL
    const zipPath = "https://github.com/piyush-kumar-agarwal1/Leetcode-Buddy/releases/download/v2.0.0/Leetcode-Buddy.zip";

    // Create a direct download link
    const link = document.createElement("a");
    link.href = zipPath;
    link.download = "Leetcode-Buddy.zip";
    link.rel = "noopener noreferrer"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download error:", error);
    // Fallback - open in new tab if download fails
    window.open("https://github.com/piyush-kumar-agarwal1/Leetcode-Buddy/releases/download/v2.0.0/Leetcode-Buddy.zip", "_blank");
  }
}
