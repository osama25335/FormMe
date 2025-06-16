import React, { useRef } from "react";
import {
  FileText,
  ClipboardList,
  ScrollText,
  BookOpenCheck,
  Briefcase,
  FormInput,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const formCategories = [
  { label: "Accounting Forms", icon: FileText },
  { label: "Affidavit Forms", icon: ScrollText },
  { label: "Application Forms", icon: FormInput },
  { label: "Appraisal Forms", icon: ClipboardList },
  { label: "Assessment Forms", icon: BookOpenCheck },
  { label: "Authorization Forms", icon: ClipboardList },
  { label: "Bankruptcy Forms", icon: FileText },
  { label: "Bill of Sales Forms", icon: FormInput },
  { label: "Business Forms", icon: Briefcase },
  { label: "Complaint Forms", icon: ScrollText },
  { label: "Consent Forms", icon: ClipboardList },
  { label: "Contractor Forms", icon: Briefcase },
  { label: "Disability Forms", icon: FormInput },
  { label: "Divorce Forms", icon: ScrollText },
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const step = 180;
    if (container) {
      container.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
    }
  };

  return (
    <section id="categories">
        <div className=" bg-background-color">
            <div className="container text-center mx-auto px-7 py-10">
                      {/* Arrows */}
                <div className="relative w-full">
                    <button
                    onClick={() => scroll("left")}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 "
                    >
                    <ChevronLeft className="text-gray-600" size={28} />
                    </button>
                    <button
                    onClick={() => scroll("right")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                    >
                    <ChevronRight className="text-gray-600" size={28} />
                    </button>

                    {/* Categories */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto p-12 no-scrollbar scroll-smooth"
                    >
                        {formCategories.map(({ icon: Icon, label }, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center min-w-[120px] h-[120px] rounded-full bg-white hover:shadow-primary-color shadow-[0_0_10px_#10B98140] p-4 duration-300"
                        >
                            <Icon size={30} className="text-primary-color mb-2" />
                            <span className="text-sm text-secondary-light text-center font-medium leading-tight">
                            {label}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
                <p className="text-secondary-light max-w-2xl leading-6 mb-3">
                    Whether you're managing finances, submitting applications, or handling personal matters like divorce or disability claims, we create your forms for help you to streamline your workflow.
                </p>
            </div>
        </div>
    </section>
  );
};


export default Categories;