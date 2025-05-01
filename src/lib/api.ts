// API utility functions to interact with the backend

export async function fetchWorkerProfile(id: number) {
  try {
    const response = await fetch(`/api/worker/${id}`)
    if (!response.ok) throw new Error("Failed to fetch worker profile")
    return await response.json()
  } catch (error) {
    console.error("Error fetching worker profile:", error)
    throw error
  }
}

export async function fetchWorkerAnnouncements(id: number) {
  try {
    const response = await fetch(`/api/worker/announcements/${id}`)
    if (!response.ok) throw new Error("Failed to fetch announcements")
    return await response.json()
  } catch (error) {
    console.error("Error fetching announcements:", error)
    throw error
  }
}

export async function fetchWorkerSalary(id: number) {
  try {
    const response = await fetch(`/api/worker/salary/${id}`)
    if (!response.ok) throw new Error("Failed to fetch salary information")
    return await response.json()
  } catch (error) {
    console.error("Error fetching salary information:", error)
    throw error
  }
}

export async function updateWorkerSalary(
  id: number,
  data: {
    bonus: number
    receive_status: boolean
    sent_status: boolean
  },
) {
  try {
    const response = await fetch(`/api/worker/salary/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update salary information")
    return await response.json()
  } catch (error) {
    console.error("Error updating salary information:", error)
    throw error
  }
}

export async function fetchWorkerAttendance(id: number) {
  try {
    const response = await fetch(`/api/worker/attendance/${id}`)
    if (!response.ok) throw new Error("Failed to fetch attendance records")
    return await response.json()
  } catch (error) {
    console.error("Error fetching attendance records:", error)
    throw error
  }
}

export async function deleteWorkerAccount(id: number) {
  try {
    const response = await fetch(`/api/worker/delete/${id}`, {
      method: "POST",
    })
    if (!response.ok) throw new Error("Failed to delete worker account")
    return await response.json()
  } catch (error) {
    console.error("Error deleting worker account:", error)
    throw error
  }
}
