
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // For now, just navigate back to login
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">Course Connect</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          Sign out
        </button>
      </header>

      <main>
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder cards - to be replaced with actual course data */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Course {i}</CardTitle>
                  <CardDescription>CS101-0{i}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
