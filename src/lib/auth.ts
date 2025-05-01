// utils/auth.ts (you can adjust the location)
export function getUserFromLocalStorage() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) return null;

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}

export function removeUserFromLocalStorage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }
}
