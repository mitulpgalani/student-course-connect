
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

  const years = Array.from({ length: 6 }, (_, i) => 2025 - i);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Course Review</DialogTitle>
          <DialogDescription>
            Share your experience with {course.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Course Information (Read-only) */}
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

          {/* Semester Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Semester Term</Label>
              <Select value={semesterTerm} onValueChange={setSemesterTerm}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Spring">Spring</SelectItem>
                  <SelectItem value="Summer">Summer</SelectItem>
                  <SelectItem value="Fall">Fall</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Select value={academicYear} onValueChange={setAcademicYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Professor Selection */}
          <div className="space-y-2">
            <Label>Professor Name(s)</Label>
            <Select value={selectedProfessor} onValueChange={setSelectedProfessor}>
              <SelectTrigger>
                <SelectValue placeholder="Select professor" />
              </SelectTrigger>
              <SelectContent>
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
                className="mt-2 w-full px-3 py-2 border rounded-md"
              />
            )}
          </div>

          {/* Course Type */}
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

          {/* Delivery Mode */}
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
      </DialogContent>
    </Dialog>
  );
}
