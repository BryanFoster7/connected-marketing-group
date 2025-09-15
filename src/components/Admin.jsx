import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/submissions');
      if (!response.ok) throw new Error('Failed to fetch submissions');
      const data = await response.json();
      setSubmissions(data);
      setLoading(false);
    } catch (err) {
      setError('Error loading submissions. Make sure the backend server is running.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-light text-xl">Loading submissions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold heading-gradient">Form Submissions</h1>
          <button
            onClick={fetchSubmissions}
            className="btn-primary px-4 py-2 rounded-md"
          >
            Refresh Data
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center text-light/80 py-8">
            No submissions yet. Form submissions will appear here.
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div key={submission._id} className="bg-dark-lighter p-6 rounded-lg shadow-glow border border-dark-lightest">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-light font-semibold">Name:</h3>
                    <p className="text-light/80">{submission.name}</p>
                  </div>
                  <div>
                    <h3 className="text-light font-semibold">Business:</h3>
                    <p className="text-light/80">{submission.businessName}</p>
                  </div>
                  <div>
                    <h3 className="text-light font-semibold">Email:</h3>
                    <p className="text-light/80">{submission.email}</p>
                  </div>
                  <div>
                    <h3 className="text-light font-semibold">Phone:</h3>
                    <p className="text-light/80">{submission.phoneNumber || 'Not provided'}</p>
                  </div>
                  {submission.message && (
                    <div className="col-span-2">
                      <h3 className="text-light font-semibold">Message:</h3>
                      <p className="text-light/80">{submission.message}</p>
                    </div>
                  )}
                  <div className="col-span-2 text-light/50 text-sm">
                    Submitted: {new Date(submission.submittedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
