import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { AppContext } from "@/contexts/ AppContextProvider"
import Loader from "@/components/Spinner";

interface Application {
  id: number;
  jobTitle: string;
  status: string;
  createdAt: string;
}

const MyApplications: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const fetchApplications = async () => {
      if (user && user.email) {
        try {
          const response = await fetch(`http://localhost:8080/api/my-applications`, {
            credentials: 'include' // Ensure cookies are included in the request
          });
          const data: Application[] = await response.json();
          setApplications(data);
        } catch (error) {
          console.error('Error fetching applications:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false); // No user means we should stop loading
      }
    };

    fetchApplications();
  }, [user]);

  return (
    <>
      <Head>
        <title>My Applications</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-TelkomLight font-bold text-center mb-8">My Applications</h1>
            {applications.length > 0 ? (
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="p-4 bg-white rounded shadow-md">
                    <h2 className="font-TelkomLight text-xl font-semibold">{application.jobTitle}</h2>
                    <p className="font-TelkomLight text-gray-700">Status: {application.status}</p>
                    <p className="font-TelkomLight text-gray-700">Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center font-TelkomLight text-gray-700">You have not applied for any jobs yet.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MyApplications;
