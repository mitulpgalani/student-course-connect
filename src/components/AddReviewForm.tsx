
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";

interface AddReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    name: string;
    code: string;
    professors: string[];
  };
}

export function AddReviewForm({ isOpen, onClose, course }: AddReviewFormProps) {
  const [semesterTerm, setSemesterTerm] = useState<string>("");
  const [academicYear, setAcademicYear] = useState<string>("");
  const [selectedProfessor, setSelectedProfessor] = useState<string>("");
  const [otherProfessor, setOtherProfessor] = useState<string>("");
  const [courseType, setCourseType] = useState<string>("");
  const [deliveryMode, setDeliveryMode] = useState<string>("");
  
  // Add missing state variables
  const [teachingQuality, setTeachingQuality] = useState<number>(0);
  const [courseValue, setCourseValue] = useState<number>(0);
  const [evaluationMethods, setEvaluationMethods] = useState<string[]>([]);
  const [otherEvaluationMethod, setOtherEvaluationMethod] = useState<string>("");
  const [examFormat, setExamFormat] = useState<string[]>([]);
  const [otherExamFormat, setOtherExamFormat] = useState<string>("");
  const [gradingLeniency, setGradingLeniency] = useState<number>(0);

  const years = Array.from({ length: 6 }, (_, i) => 2025 - i);

  const evaluationOptions = [
    "Assignments",
    "Quizzes",
    "Midterm Exam",
    "Final Exam",
    "Project",
    "Participation",
    "Other",
  ];

  const examFormatOptions = [
    "Subjective (Essay/Long-form)",
    "Multiple Choice (MCQ)",
    "Open Book",
    "Problem-Solving",
    "Other",
  ];

  const StarRating = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 ${
                rating <= value
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-none text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Add Course Review</DialogTitle>
          <DialogDescription>
            Share your experience with {course.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Course Information</h3>

            <div className="space-y-2">
              <Label>Course Name</Label>
              <input
                type="text"
                value={course.name}
                readOnly
                className="w-full px-3 py-2 bg-gray-100 border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label>Course Code</Label>
              <input
                type="text"
                value={course.code}
                readOnly
                className="w-full px-3 py-2 bg-gray-100 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Semester Term</Label>
                <Select value={semesterTerm} onValueChange={setSemesterTerm}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Spring">Spring</SelectItem>
                    <SelectItem value="Summer">Summer</SelectItem>
                    <SelectItem value="Fall">Fall</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Academic Year</Label>
                <Select value={academicYear} onValueChange={setAcademicYear}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Professor Name(s)</Label>
              <Select value={selectedProfessor} onValueChange={setSelectedProfessor}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select professor" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {course.professors.map((professor) => (
                    <SelectItem key={professor} value={professor}>
                      {professor}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {selectedProfessor === "other" && (
                <input
                  type="text"
                  value={otherProfessor}
                  onChange={(e) => setOtherProfessor(e.target.value)}
                  placeholder="Enter professor's name"
                  className="mt-2 w-full px-3 py-2 border rounded-md bg-white"
                />
              )}
            </div>

            <div className="space-y-2">
              <Label>Course Requirement</Label>
              <RadioGroup
                value={courseType}
                onValueChange={setCourseType}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="core" id="core" />
                  <Label htmlFor="core">Core Requirement</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="elective" id="elective" />
                  <Label htmlFor="elective">Elective</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Was this course conducted online or in person?</Label>
              <RadioGroup
                value={deliveryMode}
                onValueChange={setDeliveryMode}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">Online</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="in-person" id="in-person" />
                  <Label htmlFor="in-person">In-Person</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="hybrid" />
                  <Label htmlFor="hybrid">Hybrid</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold pt-6">Course Evaluation</h3>

            <div className="space-y-2">
              <Label>How well did the professor teach this course?</Label>
              <StarRating value={teachingQuality} onChange={setTeachingQuality} />
              <div className="text-sm text-gray-500 mt-1">
                1 = Poor, 5 = Excellent
              </div>
            </div>

            <div className="space-y-2">
              <Label>
                How much did this course add value to your academic or career goals?
              </Label>
              <StarRating value={courseValue} onChange={setCourseValue} />
              <div className="text-sm text-gray-500 mt-1">
                1 = Not valuable, 5 = Extremely valuable
              </div>
            </div>

            <div className="space-y-2">
              <Label>What evaluation methods were used in this course?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {evaluationOptions.map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      id={`method-${method}`}
                      checked={evaluationMethods.includes(method)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setEvaluationMethods([...evaluationMethods, method]);
                        } else {
                          setEvaluationMethods(
                            evaluationMethods.filter((m) => m !== method)
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`method-${method}`}>{method}</Label>
                  </div>
                ))}
              </div>
              {evaluationMethods.includes("Other") && (
                <input
                  type="text"
                  value={otherEvaluationMethod}
                  onChange={(e) => setOtherEvaluationMethod(e.target.value)}
                  placeholder="Please specify other evaluation method"
                  className="mt-2 w-full px-3 py-2 border rounded-md bg-white"
                />
              )}
            </div>

            {(evaluationMethods.includes("Midterm Exam") ||
              evaluationMethods.includes("Final Exam")) && (
              <div className="space-y-2">
                <Label>What was the format of the exams in this course?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {examFormatOptions.map((format) => (
                    <div key={format} className="flex items-center space-x-2">
                      <Checkbox
                        id={`format-${format}`}
                        checked={examFormat.includes(format)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setExamFormat([...examFormat, format]);
                          } else {
                            setExamFormat(examFormat.filter((f) => f !== format));
                          }
                        }}
                      />
                      <Label htmlFor={`format-${format}`}>{format}</Label>
                    </div>
                  ))}
                </div>
                {examFormat.includes("Other") && (
                  <input
                    type="text"
                    value={otherExamFormat}
                    onChange={(e) => setOtherExamFormat(e.target.value)}
                    placeholder="Please specify other exam format"
                    className="mt-2 w-full px-3 py-2 border rounded-md bg-white"
                  />
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label>How lenient or strict was the professor in grading?</Label>
              <StarRating value={gradingLeniency} onChange={setGradingLeniency} />
              <div className="text-sm text-gray-500 mt-1">
                1 = Very Strict, 5 = Very Lenient
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

