import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, BookOpenCheck, Clock } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/firebase"; // adjust path as needed

const auth = getAuth(app);
const db = getFirestore(app);

const DashboardPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(true);
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setEnrolledCourses(data.enrolledCourses || []);
        } else {
          setEnrolledCourses([]);
        }
        setLoading(false);
      } else {
        setEnrolledCourses([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p>Loading your courses...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-semibold mb-4">You are not logged in</h2>
        <p>Please log in to view your enrolled courses.</p>
        {/* Optionally add a button/link to login page */}
      </div>
    );
  }

  return (
    <div className="-mt-10 w-full min-h-screen bg-background text-foreground p-6 md:p-10">
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Student Dashboard</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Log in to view your enrolled courses, track progress, download
          resources, and access exclusive sessions.
        </p>
      </header>

      {/* Course Cards */}
      {enrolledCourses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl shadow-md bg-card p-6 border border-border transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1 text-muted-foreground">
                  <span>Progress</span>
                  <span>{course.progress || 0}%</span>
                </div>
                <Progress value={course.progress || 0} />
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <a href={course.materialLink} download>
                    <Download className="w-4 h-4" />
                    Download Materials
                  </a>
                </Button>

                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Next Session: {course.nextSession || "TBA"}
                </Button>

                <Button
                  variant="default"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <BookOpenCheck className="w-4 h-4" />
                  Continue Course
                </Button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default DashboardPage;
