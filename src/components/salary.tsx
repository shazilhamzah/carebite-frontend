// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   DollarSignIcon,
//   PiggyBankIcon,
//   TrendingUpIcon,
//   WalletIcon,
//   CheckCircle,
//   XCircle,
//   Save,
// } from "lucide-react";

// // Sample salary data - in a real app, this would come from an API or database
// const currentMonth = "April 2023";
// const salaryData = {
//   monthlySalary: 5800,
//   totalSalaryReceived: 24440,
//   totalBonusReceived: 3500,
//   paymentDate: "April 30, 2023",
// };

// export default function Salary() {
//   const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);

//   const handleConfirm = (received: boolean) => {
//     setIsConfirmed(received);
//   };

//   const save = ()=>{
//     //
//   }

//   return (
//     <div className="flex flex-1 flex-col">
//       <div className="@container/main flex flex-1 flex-col gap-2">
//         <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//           <div className="px-4 lg:px-6">
//             <Card className="overflow-hidden">
//               <CardHeader className="bg-primary/5 pb-6 pt-6">
//                 <div className="flex flex-col space-y-4">
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="  flex items-center gap-2">
//                       <WalletIcon className="h-5 w-5 text-primary" />
//                       Salary Information
//                     </CardTitle>
//                     <Badge
//                       variant="outline"
//                       className="text-primary px-2.5 py-1"
//                     >
//                       {currentMonth}
//                     </Badge>
//                   </div>

//                   {/* Salary Sent Notification */}
//                   <div className="p-4 bg-green-50 rounded-lg border border-green-100">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                       <div>
//                         <h3 className="font-bold text-lg text-green-800">
//                           Your salary for {currentMonth} has been sent
//                         </h3>
//                         <p className="text-sm text-green-600">
//                           Payment date: {salaryData.paymentDate}
//                         </p>
//                       </div>
//                       <div className="flex gap-3">
//                         <Button
//                           variant={isConfirmed === true ? "default" : "outline"}
//                           className={
//                             isConfirmed === true
//                               ? "bg-green-600 hover:bg-green-700"
//                               : ""
//                           }
//                           onClick={() => handleConfirm(true)}
//                         >
//                           <CheckCircle className="mr-2 h-4 w-4" />
//                           Received
//                         </Button>
//                         <Button
//                           variant={
//                             isConfirmed === false ? "default" : "outline"
//                           }
//                           className={
//                             isConfirmed === false
//                               ? "bg-red-600 hover:bg-red-700"
//                               : ""
//                           }
//                           onClick={() => handleConfirm(false)}
//                         >
//                           <XCircle className="mr-2 h-4 w-4" />
//                           Not Received
//                         </Button>
//                         <Button
//                           variant={
//                             "default"
//                           }
//                           // className={
//                           //   isConfirmed === false
//                           //     ? "bg-red-600 hover:bg-red-700"
//                           //     : ""
//                           // }
//                           onClick={() => save}
//                         >
//                           {/* <XCircle className="mr-2 h-4 w-4" /> */}
//                           <Save/>
//                           Save
//                         </Button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <SalaryCard
//                       title="Monthly Salary"
//                       amount={salaryData.monthlySalary}
//                       icon={
//                         <DollarSignIcon className="h-5 w-5 text-green-500" />
//                       }
//                       bgColor="bg-green-50"
//                       textColor="text-green-700"
//                     />
//                     <SalaryCard
//                       title="Total Salary Received"
//                       amount={salaryData.totalSalaryReceived}
//                       icon={
//                         <PiggyBankIcon className="h-5 w-5 text-purple-500" />
//                       }
//                       bgColor="bg-purple-50"
//                       textColor="text-purple-700"
//                     />
//                     <SalaryCard
//                       title="Total Bonus Received"
//                       amount={salaryData.totalBonusReceived}
//                       icon={
//                         <TrendingUpIcon className="h-5 w-5 text-blue-500" />
//                       }
//                       bgColor="bg-blue-50"
//                       textColor="text-blue-700"
//                     />
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface SalaryCardProps {
//   title: string;
//   amount: number;
//   icon: React.ReactNode;
//   bgColor: string;
//   textColor: string;
// }

// function SalaryCard({
//   title,
//   amount,
//   icon,
//   bgColor,
//   textColor,
// }: SalaryCardProps) {
//   return (
//     <div className={`rounded-lg border p-4 ${bgColor}`}>
//       <div className="flex justify-between items-start">
//         <div className={`rounded-full p-2 ${bgColor}`}>{icon}</div>
//       </div>
//       <div className="mt-2">
//         <p className="text-sm font-medium text-muted-foreground">{title}</p>
//         <p className={`text-2xl font-bold mt-1 ${textColor}`}>
//           ${amount.toLocaleString()}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSignIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  WalletIcon,
  CheckCircle,
  XCircle,
  Save,
} from "lucide-react";

// 👇 Replace this with the actual supervisor ID (you might fetch it from context/auth)
// const SUPERVISOR_ID = 1;

const currentMonth = "April 2023";

const salaryData = {
  monthlySalary: 5800,
  totalSalaryReceived: 24440,
  totalBonusReceived: 3500,
  paymentDate: "April 30, 2023",
};

export default function Salary() {
  const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [currentUser, setUser] = useState<any | null>(null);
  const [userType, setUserType] = useState<any | null>(null);
  const [isSalaryHere, setIsSalaryHere] = useState<boolean | null>(null);
  const [bonus, setBonus] = useState<boolean | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);

      if (parsedUser.role === "Supervisor") {
        setUserType("sup");
      } else if (parsedUser.role === "Worker") {
        setUserType("worker");
      } else if (parsedUser.role === "General Manager Hospital") {
        setUserType("gmh");
      } else if (parsedUser.role === "General Manager Coordinator") {
        setUserType("gmc");
      }

      console.log(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      getSalary();
    }
  }, [currentUser, userType]);

  const handleConfirm = (received: boolean) => {
    setIsConfirmed(received);
  };
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  const getSalary = async () => {
    try {
      const res = await fetch(
        `${BACKEND_HOST}/api/${userType}/salary/${currentUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("I am here");
      const result = await res.json();
      console.log(result);
      if (result.sent_status == "Yes" && result.receive_status == "No") {
        console.log("Salary toogled to true!");
        setIsSalaryHere(true);
      } else {
        setIsSalaryHere(false);
        console.log("Salary toogled to false!");
      }
      if (result.bonus == "No") {
        setBonus(false);
      } else {
        setBonus(true);
      }
    } catch (error) {
      setIsSalaryHere(false);
      console.error(error);
    }
  };

  const save = async () => {
    if (isConfirmed === null) {
      alert("Please confirm if you received the salary.");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch(
        `${BACKEND_HOST}/api/${userType}/salary/${currentUser.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receive_status: isConfirmed ? "Yes" : "No",
            sent_status: "Yes",
          }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Salary status updated successfully.");
      } else {
        console.error(result);
        alert("Error updating salary status.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to the server.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-6 pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5 text-primary" />
                      Salary Information
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-primary px-2.5 py-1"
                    >
                      {currentMonth}
                    </Badge>
                  </div>
                  {/* IF SALARY IS HERE AND WE NEED TO CONFIRM */}
                  {
                    isSalaryHere ? (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-green-800">
                              Your salary for {currentMonth} has been sent
                            </h3>
                            <p className="text-sm text-green-600">
                              Payment date: {salaryData.paymentDate}
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <Button
                              variant={
                                isConfirmed === true ? "default" : "outline"
                              }
                              className={
                                isConfirmed === true
                                  ? "bg-green-600 hover:bg-green-700"
                                  : ""
                              }
                              onClick={() => handleConfirm(true)}
                            >
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Received
                            </Button>
                            <Button
                              variant={
                                isConfirmed === false ? "default" : "outline"
                              }
                              className={
                                isConfirmed === false
                                  ? "bg-red-600 hover:bg-red-700"
                                  : ""
                              }
                              onClick={() => handleConfirm(false)}
                            >
                              <XCircle className="mr-2 h-4 w-4" />
                              Not Received
                            </Button>
                            <Button
                              variant="default"
                              onClick={save}
                              disabled={isSaving}
                            >
                              <Save className="mr-2 h-4 w-4" />
                              {isSaving ? "Saving..." : "Save"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>No salary info for available!</div>
                    )
                    // IF SALARY IS NOT HERE
                    // <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    //   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    //     <div>
                    //       <h3 className="font-bold text-lg text-green-800">
                    //         Your salary for {currentMonth} has been sent
                    //       </h3>
                    //       <p className="text-sm text-green-600">
                    //         Payment date: {salaryData.paymentDate}
                    //       </p>
                    //     </div>
                    //   </div>
                    // </div>
                  }

                  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SalaryCard
                      title="Monthly Salary"
                      amount={salaryData.monthlySalary}
                      icon={
                        <DollarSignIcon className="h-5 w-5 text-green-500" />
                      }
                      bgColor="bg-green-50"
                      textColor="text-green-700"
                    />
                    <SalaryCard
                      title="Total Salary Received"
                      amount={salaryData.totalSalaryReceived}
                      icon={
                        <PiggyBankIcon className="h-5 w-5 text-purple-500" />
                      }
                      bgColor="bg-purple-50"
                      textColor="text-purple-700"
                    />
                    <SalaryCard
                      title="Total Bonus Received"
                      amount={salaryData.totalBonusReceived}
                      icon={
                        <TrendingUpIcon className="h-5 w-5 text-blue-500" />
                      }
                      bgColor="bg-blue-50"
                      textColor="text-blue-700"
                    />
                  </div> */}
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SalaryCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

function SalaryCard({
  title,
  amount,
  icon,
  bgColor,
  textColor,
}: SalaryCardProps) {
  return (
    <div className={`rounded-lg border p-4 ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div className={`rounded-full p-2 ${bgColor}`}>{icon}</div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${textColor}`}>
          ${amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
