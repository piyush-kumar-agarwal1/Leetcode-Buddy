import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import logo from '../assets/icon128.png';

interface DownloadFormProps {
  onSubmit: (userData: UserData) => Promise<void>;
  onClose: () => void;
}

export interface UserData {
  name: string;
  email: string;
  college: string;
  experience: string;
}

export default function DownloadForm({ onSubmit, onClose }: DownloadFormProps) {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    college: '',
    experience: '',
  });

  const [errors, setErrors] = useState<Partial<UserData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof UserData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<UserData> = {};

    if (!userData.name.trim()) newErrors.name = 'Name is required';
    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!userData.college.trim()) newErrors.college = 'College/Company name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submission

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Remove this direct call to submitUserData
        // const success = await submitUserData(userData);
        
        // Just call onSubmit and let the parent handle the submission
        await onSubmit(userData);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error if needed
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-leetblue-900/80 backdrop-blur-md z-50">
      <div className="glass-card p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10  rounded-md flex items-center justify-center">
              <img src={logo} alt="LeetCode Buddy" className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold">Almost there!</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 mb-6">
          Please share some information about yourself to download LeetCode Buddy.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name <span className="text-leetamber-500">*</span>
            </label>
            <Input
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-leetamber-500">*</span>
            </label>
            <Input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              College/Company <span className="text-leetamber-500">*</span>
            </label>
            <Input
              name="college"
              value={userData.college}
              onChange={handleChange}
              placeholder="Enter your college or company name"
              className={errors.college ? "border-red-500" : ""}
            />
            {errors.college && <p className="mt-1 text-xs text-red-500">{errors.college}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Programming Experience
            </label>
            <Textarea
              name="experience"
              value={userData.experience}
              onChange={handleChange}
              placeholder="Briefly describe your programming experience and why you're interested in LeetCode Buddy"
              rows={3}
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`amber-button px-5 py-2 rounded-md flex items-center gap-2 ${isSubmitting ? 'opacity-50' : ''}`}
            >
              <span>{isSubmitting ? 'Processing...' : 'Download Extension'}</span>
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
