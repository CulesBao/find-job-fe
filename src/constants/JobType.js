export const formatJobType = (jobType) => {
  return JobType[jobType]?.name || jobType;
};
const JobType = {
  SOFTWARE_ENGINEER: {
    name: "Software Engineer",
    upperCaseName: "SOFTWARE_ENGINEER",
  },
  FRONTEND_DEVELOPER: {
    name: "Frontend Developer",
    upperCaseName: "FRONTEND_DEVELOPER",
  },
  BACKEND_DEVELOPER: {
    name: "Backend Developer",
    upperCaseName: "BACKEND_DEVELOPER",
  },
  FULLSTACK_DEVELOPER: {
    name: "Fullstack Developer",
    upperCaseName: "FULLSTACK_DEVELOPER",
  },
  MOBILE_DEVELOPER: {
    name: "Mobile Developer",
    upperCaseName: "MOBILE_DEVELOPER",
  },
  DATA_SCIENTIST: {
    name: "Data Scientist",
    upperCaseName: "DATA_SCIENTIST",
  },
  MACHINE_LEARNING_ENGINEER: {
    name: "Machine Learning Engineer",
    upperCaseName: "MACHINE_LEARNING_ENGINEER",
  },
  DEVOPS_ENGINEER: {
    name: "DevOps Engineer",
    upperCaseName: "DEVOPS_ENGINEER",
  },
  QA_TESTER: {
    name: "QA Tester",
    upperCaseName: "QA_TESTER",
  },
  UI_UX_DESIGNER: {
    name: "UI/UX Designer",
    upperCaseName: "UI_UX_DESIGNER",
  },
  IT_SUPPORT: {
    name: "IT Support",
    upperCaseName: "IT_SUPPORT",
  },
  NETWORK_ENGINEER: {
    name: "Network Engineer",
    upperCaseName: "NETWORK_ENGINEER",
  },
  CYBER_SECURITY_SPECIALIST: {
    name: "Cyber Security Specialist",
    upperCaseName: "CYBER_SECURITY_SPECIALIST",
  },
  DOCTOR: {
    name: "Doctor",
    upperCaseName: "DOCTOR",
  },
  NURSE: {
    name: "Nurse",
    upperCaseName: "NURSE",
  },
  PHARMACIST: {
    name: "Pharmacist",
    upperCaseName: "PHARMACIST",
  },
  DENTIST: {
    name: "Dentist",
    upperCaseName: "DENTIST",
  },
  VETERINARIAN: {
    name: "Veterinarian",
    upperCaseName: "VETERINARIAN",
  },
  THERAPIST: {
    name: "Therapist",
    upperCaseName: "THERAPIST",
  },
  PSYCHOLOGIST: {
    name: "Psychologist",
    upperCaseName: "PSYCHOLOGIST",
  },
  NUTRITIONIST: {
    name: "Nutritionist",
    upperCaseName: "NUTRITIONIST",
  },
  TEACHER: {
    name: "Teacher",
    upperCaseName: "TEACHER",
  },
  LECTURER: {
    name: "Lecturer",
    upperCaseName: "LECTURER",
  },
  TUTOR: {
    name: "Tutor",
    upperCaseName: "TUTOR",
  },
  SCHOOL_COUNSELOR: {
    name: "School Counselor",
    upperCaseName: "SCHOOL_COUNSELOR",
  },
  EDUCATION_COORDINATOR: {
    name: "Education Coordinator",
    upperCaseName: "EDUCATION_COORDINATOR",
  },
  ACCOUNTANT: {
    name: "Accountant",
    upperCaseName: "ACCOUNTANT",
  },
  FINANCIAL_ANALYST: {
    name: "Financial Analyst",
    upperCaseName: "FINANCIAL_ANALYST",
  },
  BANK_TELLER: {
    name: "Bank Teller",
    upperCaseName: "BANK_TELLER",
  },
  INVESTMENT_BANKER: {
    name: "Investment Banker",
    upperCaseName: "INVESTMENT_BANKER",
  },
  FINANCIAL_ADVISOR: {
    name: "Financial Advisor",
    upperCaseName: "FINANCIAL_ADVISOR",
  },
  CREDIT_ANALYST: {
    name: "Credit Analyst",
    upperCaseName: "CREDIT_ANALYST",
  },
  TAX_SPECIALIST: {
    name: "Tax Specialist",
    upperCaseName: "TAX_SPECIALIST",
  },
  BUSINESS_ANALYST: {
    name: "Business Analyst",
    upperCaseName: "BUSINESS_ANALYST",
  },
  PROJECT_MANAGER: {
    name: "Project Manager",
    upperCaseName: "PROJECT_MANAGER",
  },
  PRODUCT_MANAGER: {
    name: "Product Manager",
    upperCaseName: "PRODUCT_MANAGER",
  },
  HR_MANAGER: {
    name: "HR Manager",
    upperCaseName: "HR_MANAGER",
  },
  RECRUITER: {
    name: "Recruiter",
    upperCaseName: "RECRUITER",
  },
  OPERATIONS_MANAGER: {
    name: "Operations Manager",
    upperCaseName: "OPERATIONS_MANAGER",
  },
  OFFICE_ADMINISTRATOR: {
    name: "Office Administrator",
    upperCaseName: "OFFICE_ADMINISTRATOR",
  },
  MARKETING_SPECIALIST: {
    name: "Marketing Specialist",
    upperCaseName: "MARKETING_SPECIALIST",
  },
  SOCIAL_MEDIA_MANAGER: {
    name: "Social Media Manager",
    upperCaseName: "SOCIAL_MEDIA_MANAGER",
  },
  SEO_SPECIALIST: {
    name: "SEO Specialist",
    upperCaseName: "SEO_SPECIALIST",
  },
  SALES_ASSOCIATE: {
    name: "Sales Associate",
    upperCaseName: "SALES_ASSOCIATE",
  },
  SALES_MANAGER: {
    name: "Sales Manager",
    upperCaseName: "SALES_MANAGER",
  },
  BRAND_MANAGER: {
    name: "Brand Manager",
    upperCaseName: "BRAND_MANAGER",
  },
  DIGITAL_MARKETING_EXECUTIVE: {
    name: "Digital Marketing Executive",
    upperCaseName: "DIGITAL_MARKETING_EXECUTIVE",
  },
  CUSTOMER_SERVICE_REPRESENTATIVE: {
    name: "Customer Service Representative",
    upperCaseName: "CUSTOMER_SERVICE_REPRESENTATIVE",
  },
  RECEPTIONIST: {
    name: "Receptionist",
    upperCaseName: "RECEPTIONIST",
  },
  CALL_CENTER_AGENT: {
    name: "Call Center Agent",
    upperCaseName: "CALL_CENTER_AGENT",
  },
  HOTEL_MANAGER: {
    name: "Hotel Manager",
    upperCaseName: "HOTEL_MANAGER",
  },
  RESTAURANT_MANAGER: {
    name: "Restaurant Manager",
    upperCaseName: "RESTAURANT_MANAGER",
  },
  CHEF: {
    name: "Chef",
    upperCaseName: "CHEF",
  },
  WAITER: {
    name: "Waiter",
    upperCaseName: "WAITER",
  },
  TOUR_GUIDE: {
    name: "Tour Guide",
    upperCaseName: "TOUR_GUIDE",
  },
  EVENT_PLANNER: {
    name: "Event Planner",
    upperCaseName: "EVENT_PLANNER",
  },
  CIVIL_ENGINEER: {
    name: "Civil Engineer",
    upperCaseName: "CIVIL_ENGINEER",
  },
  ELECTRICAL_ENGINEER: {
    name: "Electrical Engineer",
    upperCaseName: "ELECTRICAL_ENGINEER",
  },
  MECHANICAL_ENGINEER: {
    name: "Mechanical Engineer",
    upperCaseName: "MECHANICAL_ENGINEER",
  },
  ARCHITECT: {
    name: "Architect",
    upperCaseName: "ARCHITECT",
  },
  SURVEYOR: {
    name: "Surveyor",
    upperCaseName: "SURVEYOR",
  },
  CONSTRUCTION_MANAGER: {
    name: "Construction Manager",
    upperCaseName: "CONSTRUCTION_MANAGER",
  },
  LAWYER: {
    name: "Lawyer",
    upperCaseName: "LAWYER",
  },
  PARALEGAL: {
    name: "Paralegal",
    upperCaseName: "PARALEGAL",
  },
  LEGAL_ASSISTANT: {
    name: "Legal Assistant",
    upperCaseName: "LEGAL_ASSISTANT",
  },
  LEGAL_SECRETARY: {
    name: "Legal Secretary",
    upperCaseName: "LEGAL_SECRETARY",
  },
  GRAPHIC_DESIGNER: {
    name: "Graphic Designer",
    upperCaseName: "GRAPHIC_DESIGNER",
  },
  COPYWRITER: {
    name: "Copywriter",
    upperCaseName: "COPYWRITER",
  },
  VIDEO_EDITOR: {
    name: "Video Editor",
    upperCaseName: "VIDEO_EDITOR",
  },
  PHOTOGRAPHER: {
    name: "Photographer",
    upperCaseName: "PHOTOGRAPHER",
  },
  CONTENT_CREATOR: {
    name: "Content Creator",
    upperCaseName: "CONTENT_CREATOR",
  },
  DRIVER: {
    name: "Driver",
    upperCaseName: "DRIVER",
  },
  DELIVERY_PERSON: {
    name: "Delivery Person",
    upperCaseName: "DELIVERY_PERSON",
  },
  SUPPLY_CHAIN_MANAGER: {
    name: "Supply Chain Manager",
    upperCaseName: "SUPPLY_CHAIN_MANAGER",
  },
  WAREHOUSE_COORDINATOR: {
    name: "Warehouse Coordinator",
    upperCaseName: "WAREHOUSE_COORDINATOR",
  },
  POLICE_OFFICER: {
    name: "Police Officer",
    upperCaseName: "POLICE_OFFICER",
  },
  FIREFIGHTER: {
    name: "Firefighter",
    upperCaseName: "FIREFIGHTER",
  },
  SCIENTIST: {
    name: "Scientist",
    upperCaseName: "SCIENTIST",
  },
  LIBRARIAN: {
    name: "Librarian",
    upperCaseName: "LIBRARIAN",
  },
  OTHER: {
    name: "Other",
    upperCaseName: "OTHER",
  },
};

export default JobType;
