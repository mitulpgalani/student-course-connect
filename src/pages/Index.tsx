
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mb-8 text-center">
        <div className="inline-block p-2 bg-primary/5 rounded-xl mb-4">
          <span className="text-primary text-sm font-medium">Student Portal</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
          Course Connect
        </h1>
        <p className="text-gray-600">
          Make informed decisions about your academic journey
        </p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-100">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
