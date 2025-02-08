
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock course data
const courses = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    professors: ["Dr. Jane Smith", "Dr. John Doe"],
    reviewCount: 24,
    teachingQuality: 4.5,
    difficulty: 3.8,
    requiresCoding: true,
    codingDifficulty: 3.2,
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    code: "CS201",
    professors: ["Dr. Robert Johnson"],
    reviewCount: 18,
    teachingQuality: 4.2,
    difficulty: 4.5,
    requiresCoding: true,
    codingDifficulty: 4.8,
  },
  {
    id: 3,
    name: "Introduction to Psychology",
    code: "PSY101",
    professors: ["Dr. Sarah Williams"],
    reviewCount: 32,
    teachingQuality: 4.8,
    difficulty: 2.5,
    requiresCoding: false,
  },
  {
    id: 4,
    name: "Web Development Fundamentals",
    code: "CS301",
    professors: ["Prof. Michael Chen"],
    reviewCount: 15,
    teachingQuality: 4.6,
    difficulty: 3.5,
    requiresCoding: true,
    codingDifficulty: 3.8,
  },
  {
    id: 5,
    name: "Linear Algebra",
    code: "MATH201",
    professors: ["Dr. Emily Brown"],
    reviewCount: 28,
    teachingQuality: 4.1,
    difficulty: 4.2,
    requiresCoding: false,
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    code: "CS401",
    professors: ["Dr. Alex Thompson"],
    reviewCount: 21,
    teachingQuality: 4.4,
    difficulty: 4.7,
    requiresCoding: true,
    codingDifficulty: 4.5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // For now, just navigate back to login
    navigate("/");
  };

  const handleAddReview = (courseId: number) => {
    // TODO: Implement review form navigation
    console.log(`Add review for course ${courseId}`);
  };

  const handleViewReviews = (courseId: number) => {
    // TODO: Implement review modal
    console.log(`View reviews for course ${courseId}`);
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
              placeholder="Search courses by name, code, or professor..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                {course.requiresCoding && (
                  <div className="absolute -right-12 top-6 rotate-45 transform">
                    <Badge 
                      variant="destructive" 
                      className="w-36 flex justify-center items-center py-1 bg-[#ea384c]"
                    >
                      Coding
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.code}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Professors:</p>
                    <p className="text-sm">{course.professors.join(", ")}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Teaching Quality:</p>
                      <StarRating rating={course.teachingQuality} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Difficulty:</p>
                      <StarRating rating={course.difficulty} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <button
                    onClick={() => handleAddReview(course.id)}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Add Review
                  </button>
                  <button
                    onClick={() => handleViewReviews(course.id)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {course.reviewCount} Reviews
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
