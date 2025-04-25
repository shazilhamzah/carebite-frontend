// Static data for the attendance page

// Current user (supervisor)
export const currentUser = {
  id: 5,
  hospital_id: 1,
  name: "David Martinez",
  role: "supervisor",
};

// Workers at the hospital
export const workers = [
  {
    id: 6,
    hospital_id: 1,
    name: "Sarah Johnson",
    role: "cook",
    worker_id: 6,
  },
  {
    id: 7,
    hospital_id: 1,
    name: "James Wilson",
    role: "cook",
    worker_id: 7,
  },
  {
    id: 8,
    hospital_id: 1,
    name: "Maria Garcia",
    role: "server",
    worker_id: 8,
  },
  {
    id: 9,
    hospital_id: 1,
    name: "John Smith",
    role: "cleaner",
    worker_id: 9,
  },
  {
    id: 10,
    hospital_id: 1,
    name: "Lisa Brown",
    role: "assistant",
    worker_id: 10,
  },
  {
    id: 11,
    hospital_id: 1,
    name: "Robert Chen",
    role: "cook",
    worker_id: 11,
  },
  {
    id: 12,
    hospital_id: 1,
    name: "Emily Davis",
    role: "server",
    worker_id: 12,
  },
  {
    id: 13,
    hospital_id: 1,
    name: "Michael Rodriguez",
    role: "cleaner",
    worker_id: 13,
  },
];

// Function to generate attendance records for a specific date
export const generateAttendanceRecords = (date: string) => {
  // Sample attendance records for the given date
  return [
    {
      attendance_id: 6,
      hospital_id: 1,
      curr_date: date,
      status: "present",
    },
    {
      attendance_id: 7,
      hospital_id: 1,
      curr_date: date,
      status: "present",
    },
    {
      attendance_id: 8,
      hospital_id: 1,
      curr_date: date,
      status: "absent",
    },
    {
      attendance_id: 10,
      hospital_id: 1,
      curr_date: date,
      status: "present",
    },
    {
      attendance_id: 12,
      hospital_id: 1,
      curr_date: date,
      status: "present",
    },
  ];
};

// Sample attendance records for multiple dates
export const attendanceRecords = [
  // Today's records
  ...generateAttendanceRecords(new Date().toISOString().split("T")[0]),

  // Yesterday's records
  ...generateAttendanceRecords(
    new Date(Date.now() - 86400000).toISOString().split("T")[0]
  ),

  // Records from 2 days ago
  ...generateAttendanceRecords(
    new Date(Date.now() - 2 * 86400000).toISOString().split("T")[0]
  ),

  // Records from 3 days ago
  ...generateAttendanceRecords(
    new Date(Date.now() - 3 * 86400000).toISOString().split("T")[0]
  ),

  // Records from 4 days ago
  ...generateAttendanceRecords(
    new Date(Date.now() - 4 * 86400000).toISOString().split("T")[0]
  ),

  // Records from 5 days ago
  ...generateAttendanceRecords(
    new Date(Date.now() - 5 * 86400000).toISOString().split("T")[0]
  ),

  // Records from 6 days ago
  ...generateAttendanceRecords(
    new Date(Date.now() - 6 * 86400000).toISOString().split("T")[0]
  ),
];

// Function to get attendance records for a specific date
export const getAttendanceByDate = (date: string) => {
  return attendanceRecords.filter((record) => record.curr_date === date);
};

// Function to calculate attendance statistics for a specific date
export const getAttendanceStats = (date: string) => {
  const records = getAttendanceByDate(date);
  const totalWorkers = workers.length;
  const present = records.filter(
    (record) => record.status === "present"
  ).length;
  const absent = totalWorkers - present;
  const percentage =
    totalWorkers > 0 ? Math.round((present / totalWorkers) * 100) : 0;

  return {
    total: totalWorkers,
    present,
    absent,
    percentage,
  };
};

// Export all data as a single object
export const attendanceData = {
  currentUser,
  workers,
  attendanceRecords,
  getAttendanceByDate,
  getAttendanceStats,
};

export default attendanceData;
