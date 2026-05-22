const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatFeed = document.getElementById("chatFeed");
const voiceButton = document.getElementById("voiceButton");
const chatToggle = document.getElementById("chatToggle");
const closeChat = document.getElementById("closeChat");
const chatWidget = document.getElementById("chatWidget");
const chatPopup = document.getElementById("chatPopup");
const openChatbotHero = document.getElementById("openChatbotHero");
const openChatbotAnnouncements = document.getElementById("openChatbotAnnouncements");
const langEnglish = document.getElementById("langEnglish");
const langTamil = document.getElementById("langTamil");

const translations = {
  en: {
    pageTitle: "UniMitra AI | University Student Support Chatbot",
    langEnglish: "English",
    langTamil: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
    newsTitle: "Latest Updates",
    newsAdmission: "Admissions Open 2026",
    newsExam: "Exam Cell Notifications",
    newsReminder: "Assignment Reminder Support",
    newsLink: "View Announcements",
    identityTitle: "UniMitra AI",
    identitySubtitle: "School of Arts and Science, Paiyanoor",
    topPrograms: "Programs",
    topAnnouncements: "Announcements",
    topCampus: "Campus",
    topChatbot: "Student Chatbot",
    navAbout: "About",
    navServices: "Student Services",
    navAdmissions: "Admissions",
    navExams: "Examinations",
    navContact: "Contact",
    heroLabel: "WELCOME TO AI-ENABLED STUDENT SUPPORT",
    heroTitle: "University information, exam updates and student help in one smart portal",
    heroText: "VMRF-inspired institutional website feel-oda, students-ku courses, exams, fees, timetable, reminders, Tamil/Tanglish support and voice access kudukkura modern AI assistant.",
    openChatbotHero: "Open Chatbot",
    exploreServices: "Explore Services",
    panelTitle: "Student Helpdesk Highlights",
    stat1Title: "24/7",
    stat1Text: "Autonomous support without human wait time",
    stat2Title: "Tamil + Tanglish",
    stat2Text: "Students natural-a kekka easy language support",
    stat3Title: "Voice Access",
    stat3Text: "Speak questions and get instant academic answers",
    intro1Title: "46+ Years Inspired Academic Trust",
    intro1Text: "Traditional university website tone-um modern AI assistant convenience-um combine panniyirukkom.",
    intro2Title: "Admissions to Examinations",
    intro2Text: "Programs, fee structure, exam updates, timetable and reminders orae interface-la manage pannalaam.",
    intro3Title: "Student-first Experience",
    intro3Text: "Website browse panninaalum, chatbot open panninaalum same support ecosystem continue aagum.",
    servicesLabel: "Student Services",
    servicesTitle: "Instant support for everyday campus questions",
    service1Title: "Courses and Curriculum",
    service1Text: "Department-wise subjects, credits, syllabus summary and program guidance instant-a share pannum.",
    service2Title: "Exam Information",
    service2Text: "Internal exam dates, semester schedules, hall timings and assessment notices fast-a kidaikkum.",
    service3Title: "Fees and Payments",
    service3Text: "Fee due dates, payment status, scholarship updates and pending balance details clear-a theriyum.",
    service4Title: "Timetable Support",
    service4Text: "Class routine, faculty slot, lab hours and daily schedule chatbot moolama check panna mudiyum.",
    service5Title: "Automated Reminders",
    service5Text: "Assignments, exams, fee deadline alerts automatic-a student-ku notify pannum.",
    service6Title: "Always Available",
    service6Text: "Office hours-ku veliya irundhaalum university support portal 24/7 active-a irukkum.",
    programsLabel: "Admissions and Academics",
    programsTitle: "Structured sections like a university portal, powered by an AI helpdesk",
    programsText: "Prospectus, programs offered, fee structure, scholarship, examination details and student welfare information ellaam clean academic layout-la present pannirukkom.",
    programsList1: "Programs offered and fees overview",
    programsList2: "Exam cell and timetable assistance",
    programsList3: "Student welfare and announcements block",
    panelRow1Title: "Programs Offered",
    panelRow1Text: "Arts, Science, Technology and interdisciplinary support information",
    panelRow2Title: "Academic Calendar",
    panelRow2Text: "Semester plans, events, exams and important dates",
    panelRow3Title: "Admission Enquiries",
    panelRow3Text: "Registration, fee flow and counselling help through chatbot",
    announcementsLabel: "Announcements",
    announcementsTitle: "Latest notices and student alerts",
    openChatbotAnnouncements: "Ask the chatbot instead",
    announcementTag: "Featured",
    announcement1Title: "Exam Cell Notification",
    announcement1Text: "Semester examination updates, hall ticket reminders and schedule changes chatbot-la instantly explain pannum.",
    announcement2Title: "Admission Update",
    announcement2Text: "2026 admissions open. Programs, eligibility and fee details-ku AI assistant immediate support kudukkum.",
    announcement3Title: "Assignment Reminder Flow",
    announcement3Text: "Department students-ku submission alert and due-date notification automated-a anuppalaam.",
    announcement4Title: "Student Welfare Notice",
    announcement4Text: "Events, mentoring, support cells and campus information institution-style notice format-la show aagum.",
    campusLabel: "Our Campus",
    campusTitle: "Explore services across the student journey",
    campus1Title: "Colleges",
    campus1Text: "Department and program discovery support.",
    campus2Title: "Infrastructure",
    campus2Text: "Facility and admin information guidance.",
    campus3Title: "Labs",
    campus3Text: "Lab timetable and session support updates.",
    campus4Title: "Student Life",
    campus4Text: "Events, clubs, reminders and welfare access.",
    footerLabel: "Deploy for Your Campus",
    footerTitle: "University website look with AI chatbot convenience",
    footerButton: "Contact Team",
    chatTitle: "UniMitra Assistant",
    chatStatus: "Online now - Student support active",
    voiceButton: "Start Voice",
    messagePlaceholder: "Ask in Tamil / Tanglish / English...",
    sendButton: "Send",
    chatFabText: "Support",
    voiceUnavailable: "Voice Unavailable",
    voiceUnsupported: "Browser does not support speech recognition",
    voiceListening: "Listening...",
    voiceCaptured: "Voice captured",
    voiceIdle: "Idle - click Start Voice",
    voiceError: "Voice error",
    chatSamples: [
      { type: "bot", text: "Vanakkam! Courses, exams, fees, timetable, reminders pathi inga kekkalaam." },
      { type: "user", text: "Fees balance and tomorrow timetable sollunga." },
      { type: "bot", text: "Sure! Fees status, due date and class timetable details instant-a fetch panna mudiyum." }
    ],
    replies: {
      course: "Course details ready. Department-wise subjects, credits, syllabus summary and faculty info chatbot share pannum.",
      exam: "Exam details inga available. Upcoming exam dates, hall timings, internal schedule and preparation reminders anuppa mudiyum.",
      fees: "Fees section-la tuition amount, due date, scholarship adjustment, pending balance ellam instant-a check panna mudiyum.",
      timetable: "Timetable support active. Daily class slots, lab timing, room info and faculty schedule bot provide pannum.",
      reminder: "Assignment and exam reminder feature enabled. Students-ku automatic notification flow setup panna mudiyum.",
      language: "Tamil, Tanglish, voice access supported. Student natural-a pesinaalum bot understand panni answer kudukkum.",
      fallback: "UniMitra AI unga question-ai receive panniduchu. Courses, exams, fees, timetable, reminders pathi instant support kudukka ready."
    }
  },
  ta: {
    pageTitle: "UniMitra AI | \u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b89\u0ba4\u0bb5\u0bbf \u0b9a\u0bbe\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bcd",
    langEnglish: "English",
    langTamil: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
    newsTitle: "\u0b9a\u0bae\u0bc0\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0baf \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd",
    newsAdmission: "2026 \u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0ba4\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1",
    newsExam: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1 \u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd",
    newsReminder: "\u0b92\u0baa\u0bcd\u0baa\u0b9f\u0bc8\u0baa\u0bcd\u0baa\u0bc1 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    newsLink: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8 \u0baa\u0bbe\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    identityTitle: "UniMitra AI",
    identitySubtitle: "\u0b86\u0bb0\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd \u0b85\u0ba3\u0bcd\u0b9f\u0bcd \u0b9a\u0baf\u0bbf\u0ba9\u0bcd\u0bb8\u0bcd \u0baa\u0bb3\u0bcd\u0bb3\u0bbf, \u0baa\u0bc8\u0baf\u0ba9\u0bc2\u0bb0\u0bcd",
    topPrograms: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    topAnnouncements: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd",
    topCampus: "\u0bb5\u0bb3\u0bbe\u0b95\u0bae\u0bcd",
    topChatbot: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b9a\u0bbe\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bcd",
    navAbout: "\u0b8e\u0ae9\u0bcd\u0b95\u0bb3\u0bc8 \u0baa\u0bb1\u0bcd\u0bb1\u0bbf",
    navServices: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b9a\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bcd",
    navAdmissions: "\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8",
    navExams: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b95\u0bb3\u0bcd",
    navContact: "\u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1",
    heroLabel: "AI \u0b89\u0ba4\u0bb5\u0bbf \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b9a\u0bc7\u0bb5\u0bc8",
    heroTitle: "\u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd, \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd, \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b89\u0ba4\u0bb5\u0bbf \u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1\u0bae\u0bcd \u0b92\u0bb0\u0bc7 \u0b9a\u0bcd\u0bae\u0bbe\u0bb0\u0bcd\u0b9f\u0bcd \u0baa\u0bcb\u0bb0\u0bcd\u0b9f\u0bcd\u0b9f\u0bb2\u0bbf\u0bb2\u0bcd",
    heroText: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b95\u0bb3\u0bcd, \u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd, \u0ba8\u0bc7\u0bb0 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8, \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd \u0b8e\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0ba4\u0bae\u0bbf\u0bb4\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1\u0b9f\u0ba9\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0bb5\u0bb2\u0bc8\u0ba4\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b89\u0b9f\u0ba9\u0bc7 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    openChatbotHero: "\u0b9a\u0bbe\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b90 \u0ba4\u0bbf\u0bb1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
    exploreServices: "\u0b9a\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bc8 \u0baa\u0bbe\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    panelTitle: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b89\u0ba4\u0bb5\u0bbf\u0bae\u0bc8\u0baf \u0b9a\u0bbf\u0bb1\u0baa\u0bcd\u0baa\u0bae\u0bcd\u0b9a\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    stat1Title: "24/7",
    stat1Text: "\u0b8e\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    stat2Title: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd + \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0bae\u0bcd",
    stat2Text: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0bb3\u0bbf\u0ba4\u0bbe\u0b95 \u0b95\u0bc7\u0b9f\u0bcd\u0b95 \u0bae\u0bca\u0bb4\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    stat3Title: "\u0b95\u0bc1\u0bb0\u0bb2\u0bcd \u0b85\u0ba3\u0bc1\u0b95\u0bb2\u0bcd",
    stat3Text: "\u0baa\u0bc7\u0b9a\u0bbf\u0ba9\u0bbe\u0bb2\u0bcd \u0b89\u0b9f\u0ba9\u0bc7 \u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd",
    intro1Title: "\u0ba8\u0bae\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bc8\u0baf\u0bbe\u0ba9 \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba4\u0bcb\u0bb1\u0bcd\u0bb1\u0bae\u0bcd",
    intro1Text: "\u0baa\u0bbe\u0bb0\u0bae\u0bcd\u0baa\u0bb0\u0bbf\u0baf \u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 \u0bb5\u0bb2\u0bc8\u0ba4\u0bb3 \u0ba4\u0bcb\u0ba9\u0bbf\u0baf\u0bc8\u0ba4\u0bcd AI \u0b89\u0ba4\u0bb5\u0bbf \u0bb5\u0b9a\u0ba4\u0bbf\u0baf\u0bc1\u0b9f\u0ba9\u0bcd \u0b87\u0ba3\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0b9f\u0bbf\u0bb5\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1.",
    intro2Title: "\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0bb5\u0bb0\u0bc8",
    intro2Text: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd, \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd, \u0ba8\u0bc7\u0bb0 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8, \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd \u0b8e\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0b92\u0bb0\u0bc7 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb0\u0bcd\u0bb5\u0b95\u0bbf\u0b95\u0bcd\u0b95 \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
    intro3Title: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0ba9\u0bbf\u0bb2\u0bc8 \u0b85\u0ba9\u0bc1\u0baa\u0bb5\u0bae\u0bcd",
    intro3Text: "\u0bb5\u0bb2\u0bc8\u0ba4\u0bb3\u0ba4\u0bcd\u0ba4\u0bc8 \u0baa\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bc1\u0bae\u0bcd, \u0b9a\u0bbe\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b90 \u0ba4\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bc1\u0bae\u0bcd \u0b92\u0bb0\u0bc7 \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    servicesLabel: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b9a\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bcd",
    servicesTitle: "\u0ba4\u0bbf\u0ba9\u0b9a\u0bb0\u0bbf \u0bb5\u0bb3\u0bbe\u0b95 \u0b95\u0bc7\u0bb3\u0bcd\u0bb5\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b89\u0b9f\u0ba9\u0b9f\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    service1Title: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
    service1Text: "\u0ba4\u0bc1\u0bb1\u0bc8 \u0bb5\u0bbe\u0bb0\u0bbf\u0baf\u0bbe\u0b95 subjects, credits, syllabus summary \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd program guidance \u0b89\u0b9f\u0ba9\u0bc7 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    service2Title: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0b95\u0bb5\u0bb2\u0bcd",
    service2Text: "Internal exam dates, semester schedules, hall timings \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd notices \u0bb5\u0bc7\u0b95\u0bae\u0bbe\u0b95 \u0ba4\u0bc6\u0bb0\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
    service3Title: "\u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b9a\u0bc6\u0bb2\u0bc1\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    service3Text: "Fee due dates, payment status, scholarship updates \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd pending balance \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0ba4\u0bc6\u0bb0\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
    service4Title: "\u0ba8\u0bc7\u0bb0 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8 \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    service4Text: "Class routine, faculty slot, lab hours \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd daily schedule chatbot \u0bae\u0bc2\u0bb2\u0bae\u0bbe\u0b95 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    service5Title: "\u0ba4\u0bbe\u0ba9\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bbf \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd\u0b95\u0bb3\u0bcd",
    service5Text: "Assignments, exams, fee deadline alerts \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0b33\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
    service6Title: "\u0b8e\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",
    service6Text: "\u0b85\u0bb2\u0bc1\u0bb5\u0bb2\u0b95 \u0ba8\u0bc7\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0b9f\u0bbf\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bc1\u0bae\u0bcd portal 24/7 \u0bb5\u0bc7\u0bb2\u0bc8 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bc1\u0bae\u0bcd.",
    programsLabel: "\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf",
    programsTitle: "\u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 portal \u0baa\u0bcb\u0bb2 \u0b92\u0bb4\u0bc1\u0b99\u0bcd\u0b95\u0bbe\u0b95 \u0b85\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0b95\u0bc1\u0ba4\u0bbf\u0b95\u0bb3\u0bcd, AI helpdesk-\u0b93\u0b9f\u0ba9\u0bcd",
    programsText: "Prospectus, programs offered, fee structure, scholarship, examination details \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd student welfare \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd \u0b92\u0bb4\u0bc1\u0b99\u0bcd\u0b95\u0bbe\u0b95 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.",
    programsList1: "\u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b9a\u0bc1\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bae\u0bcd",
    programsList2: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd timetable \u0b86\u0ba4\u0bb0\u0bb5\u0bc1",
    programsList3: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0ba8\u0bb2\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0baa\u0b95\u0bc1\u0ba4\u0bbf",
    panelRow1Title: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    panelRow1Text: "Arts, Science, Technology \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b87\u0ba3\u0bc8\u0ba8\u0bcd\u0ba4 \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd",
    panelRow2Title: "\u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b95\u0bbe\u0bb2 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8",
    panelRow2Text: "Semester plans, events, exams \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0ba4\u0bc7\u0ba4\u0bbf\u0b95\u0bb3\u0bcd",
    panelRow3Title: "\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0bb5\u0bbf\u0b9a\u0bbe\u0bb0\u0ba3\u0bc8\u0b95\u0bb3\u0bcd",
    panelRow3Text: "Registration, fee flow \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd counselling help chatbot \u0bae\u0bc2\u0bb2\u0bae\u0bbe\u0b95",
    announcementsLabel: "\u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd",
    announcementsTitle: "\u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b8e\u0b9a\u0bcd\u0b9a\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc8\u0b95\u0bb3\u0bcd",
    openChatbotAnnouncements: "\u0b85\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0baa\u0ba4\u0bbf\u0bb2\u0bbe\u0b95 \u0b9a\u0bbe\u0b9f\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0b9f\u0bae\u0bcd \u0b95\u0bc7\u0bb3\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    announcementTag: "\u0bae\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0baf\u0bae\u0bcd",
    announcement1Title: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1 \u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1",
    announcement1Text: "Semester exam updates, hall ticket reminders \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd schedule changes-\u0b90 chatbot \u0b89\u0b9f\u0ba9\u0bc7 \u0bb5\u0bbf\u0bb3\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    announcement2Title: "\u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0baa\u0bcd\u0baa\u0bc1",
    announcement2Text: "2026 \u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc8 \u0ba4\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1. Programs, eligibility, fee details-\u0b95\u0bcd\u0b95\u0bc1 AI assistant \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
    announcement3Title: "\u0b92\u0baa\u0bcd\u0baa\u0b9f\u0bc8\u0baa\u0bcd\u0baa\u0bc1 \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd \u0b92\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
    announcement3Text: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 submission alert \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd due-date notification \u0ba4\u0bbe\u0ba9\u0bbe\u0b95 \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0bb2\u0bbe\u0bae\u0bcd.",
    announcement4Title: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0ba8\u0bb2\u0ba9\u0bcd \u0b85\u0bb1\u0bbf\u0bb5\u0bbf\u0baa\u0bcd\u0baa\u0bc1",
    announcement4Text: "Events, mentoring, support cells \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd campus info institution style-\u0bb2\u0bcd \u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.",
    campusLabel: "\u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bb3\u0bbe\u0b95\u0bae\u0bcd",
    campusTitle: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0baa\u0baf\u0ba3\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bc1\u0bb4\u0bc1\u0ba4\u0bc1\u0bae\u0bcd \u0b9a\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bc8 \u0baa\u0bbe\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    campus1Title: "\u0b95\u0bb2\u0bcd\u0bb2\u0bc2\u0bb0\u0bbf\u0b95\u0bb3\u0bcd",
    campus1Text: "\u0ba4\u0bc1\u0bb1\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd program discovery \u0b86\u0ba4\u0bb0\u0bb5\u0bc1.",
    campus2Title: "\u0b85\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1",
    campus2Text: "Facility \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd admin information guidance.",
    campus3Title: "\u0b86\u0baf\u0bcd\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    campus3Text: "Lab timetable \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd session support updates.",
    campus4Title: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0bb5\u0bbe\u0bb4\u0bcd\u0b95\u0bcd\u0b95\u0bc8",
    campus4Text: "Events, clubs, reminders \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd welfare access.",
    footerLabel: "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bb3\u0bbe\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0bbf\u0bb1\u0bc1\u0bb5\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    footerTitle: "\u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 \u0bb5\u0bb2\u0bc8\u0ba4\u0bb3 \u0ba4\u0bcb\u0bb1\u0bcd\u0bb1\u0bae\u0bcd, AI chatbot \u0bb5\u0b9a\u0ba4\u0bbf\u0baf\u0bc1\u0b9f\u0ba9\u0bcd",
    footerButton: "\u0b85\u0ba3\u0bbf\u0baf\u0bc8 \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1 \u0b95\u0bca\u0bb3\u0bcd\u0bb3\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    chatTitle: "UniMitra \u0b89\u0ba4\u0bb5\u0bbf\u0baf\u0bbe\u0bb3\u0bb0\u0bcd",
    chatStatus: "\u0b87\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0b86\u0ba9\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd - \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",
    voiceButton: "\u0b95\u0bc1\u0bb0\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1",
    messagePlaceholder: "\u0ba4\u0bae\u0bbf\u0bb4\u0bbf\u0bb2\u0bcd / \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bc7\u0bb3\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd...",
    sendButton: "\u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0bc1",
    chatFabText: "\u0b89\u0ba4\u0bb5\u0bbf",
    voiceUnavailable: "\u0b95\u0bc1\u0bb0\u0bb2\u0bcd \u0bb5\u0b9a\u0ba4\u0bbf \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8",
    voiceUnsupported: "\u0b87\u0ba8\u0bcd\u0ba4 browser speech recognition-\u0b90 support \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8",
    voiceListening: "Listening...",
    voiceCaptured: "Voice captured",
    voiceIdle: "\u0b9a\u0bc6\u0baf\u0bb2\u0bb1\u0bcd\u0bb1 \u0ba8\u0bbf\u0bb2\u0bc8 - \u0b95\u0bc1\u0bb0\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1 \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    voiceError: "\u0b95\u0bc1\u0bb0\u0bb2\u0bcd \u0baa\u0bbf\u0bb4\u0bc8",
    chatSamples: [
      { type: "bot", text: "\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd! \u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b95\u0bb3\u0bcd, \u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd, \u0ba8\u0bc7\u0bb0 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8, \u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2\u0bcd \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0b87\u0b99\u0bcd\u0b95\u0bc7 \u0b95\u0bc7\u0bb3\u0bb2\u0bbe\u0bae\u0bcd." },
      { type: "user", text: "\u0ba8\u0bbe\u0bb3\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0ba8\u0bc7\u0bb0 \u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0ba8\u0bbf\u0bb2\u0bc1\u0bb5\u0bc8 \u0b9a\u0bca\u0bb2\u0bcd\u0bb2\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd." },
      { type: "bot", text: "\u0ba8\u0bbf\u0b9a\u0bcd\u0b9a\u0baf\u0bae\u0bbe\u0b95! \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0ba8\u0bbf\u0bb2\u0bc8, due date \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd class timetable details \u0b89\u0b9f\u0ba9\u0bc7 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd." }
    ],
    replies: {
      course: "\u0baa\u0bbe\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bcd\u0b9f \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0baf\u0bbe\u0bb0\u0bbe\u0b95 \u0b89\u0bb3\u0bcd\u0bb3\u0ba9. Department-wise subjects, credits, syllabus summary \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd faculty info chatbot \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
      exam: "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0ba4\u0b95\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bcd \u0b87\u0b99\u0bcd\u0b95\u0bc7 \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd. Upcoming exam dates, hall timings, internal schedule \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd reminders \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
      fees: "Fees section-\u0bb2\u0bcd tuition amount, due date, scholarship adjustment \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd pending balance \u0b89\u0b9f\u0ba9\u0bc7 \u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95 \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
      timetable: "Timetable support \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1. Daily class slots, lab timing, room info \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd faculty schedule bot \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
      reminder: "Assignment \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd exam reminder feature enabled. Students-\u0b95\u0bcd\u0b95\u0bc1 notification flow setup \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd.",
      language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd, \u0b86\u0b99\u0bcd\u0b95\u0bbf\u0bb2\u0bae\u0bcd, voice access \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1. \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b87\u0baf\u0bb2\u0bcd\u0baa\u0bbe\u0b95 \u0b95\u0bc7\u0b9f\u0bcd\u0b9f\u0bbe\u0bb2\u0bc1\u0bae\u0bcd bot \u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
      fallback: "UniMitra AI \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc7\u0bb3\u0bcd\u0bb5\u0bbf\u0baf\u0bc8 \u0baa\u0bc6\u0bb1\u0bcd\u0bb1\u0bc1\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1. Courses, exams, fees, timetable, reminders \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0bb5\u0bb4\u0b99\u0bcd\u0b95 \u0ba4\u0baf\u0bbe\u0bb0\u0bbe\u0b95 \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1."
    }
  }
};

let currentLanguage = "en";

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function addBubble(text, type) {
  const bubble = document.createElement("article");
  bubble.className = `bubble bubble-${type}`;
  bubble.textContent = text;
  chatFeed.appendChild(bubble);
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

function renderSampleChat(language) {
  chatFeed.innerHTML = "";
  translations[language].chatSamples.forEach((item) => addBubble(item.text, item.type));
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];

  document.documentElement.lang = language;
  document.title = copy.pageTitle;

  Object.entries(copy).forEach(([key, value]) => {
    if (typeof value === "string") {
      setText(key, value);
    }
  });

  messageInput.placeholder = copy.messagePlaceholder;
  messageInput.setAttribute("aria-label", copy.messagePlaceholder);
  closeChat.setAttribute("aria-label", language === "ta" ? "Close chatbot" : "Close chatbot");
  chatToggle.setAttribute("aria-label", language === "ta" ? "Open chatbot" : "Open chatbot");

  langEnglish.classList.toggle("active", language === "en");
  langTamil.classList.toggle("active", language === "ta");

  renderSampleChat(language);
}

window.setSiteLanguage = applyLanguage;

function getReply(message) {
  const lower = message.toLowerCase();
  const replies = translations[currentLanguage].replies;

  if (["course", "courses", "syllabus", "subject", "\u0baa\u0bbe\u0b9f"].some((keyword) => lower.includes(keyword))) {
    return replies.course;
  }
  if (["exam", "internal", "semester", "\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5"].some((keyword) => lower.includes(keyword))) {
    return replies.exam;
  }
  if (["fees", "fee", "payment", "due", "\u0b95\u0b9f\u0bcd\u0b9f\u0ba3"].some((keyword) => lower.includes(keyword))) {
    return replies.fees;
  }
  if (["time", "timetable", "schedule", "class", "\u0b85\u0b9f\u0bcd\u0b9f\u0bb5\u0ba3\u0bc8"].some((keyword) => lower.includes(keyword))) {
    return replies.timetable;
  }
  if (["reminder", "assignment", "alert", "\u0ba8\u0bbf\u0ba9\u0bc8\u0bb5\u0bc2\u0b9f\u0bcd\u0b9f\u0bb2"].some((keyword) => lower.includes(keyword))) {
    return replies.reminder;
  }
  if (["tamil", "english", "voice", "language", "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"].some((keyword) => lower.includes(keyword))) {
    return replies.language;
  }
  return replies.fallback;
}

function setChatOpen(isOpen) {
  chatWidget.classList.toggle("open", isOpen);
  chatPopup.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) {
    messageInput.focus();
  }
}

chatToggle.addEventListener("click", () => {
  setChatOpen(!chatWidget.classList.contains("open"));
});

closeChat.addEventListener("click", () => {
  setChatOpen(false);
});

[openChatbotHero, openChatbotAnnouncements].forEach((button) => {
  button.addEventListener("click", () => {
    setChatOpen(true);
    chatWidget.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

langEnglish.addEventListener("click", () => applyLanguage("en"));
langTamil.addEventListener("click", () => applyLanguage("ta"));

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (!message) {
    return;
  }
  setChatOpen(true);
  addBubble(message, "user");
  messageInput.value = "";
  window.setTimeout(() => {
    addBubble(getReply(message), "bot");
  }, 500);
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  voiceButton.disabled = true;
} else {
  const recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  voiceButton.addEventListener("click", () => {
    setChatOpen(true);
    recognition.lang = currentLanguage === "ta" ? "ta-IN" : "en-IN";
    recognition.start();
    setText("chatStatus", translations[currentLanguage].voiceListening);
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    setText("chatStatus", translations[currentLanguage].voiceCaptured);
    addBubble(transcript, "user");
    window.setTimeout(() => {
      addBubble(getReply(transcript), "bot");
    }, 500);
  });

  recognition.addEventListener("end", () => {
    if (document.getElementById("chatStatus").textContent === translations[currentLanguage].voiceListening) {
      setText("chatStatus", translations[currentLanguage].voiceIdle);
    }
  });

  recognition.addEventListener("error", () => {
    setText("chatStatus", translations[currentLanguage].voiceError);
  });
}

applyLanguage("en");

if (!SpeechRecognition) {
  setText("chatStatus", translations[currentLanguage].voiceUnsupported);
  voiceButton.textContent = translations[currentLanguage].voiceUnavailable;
}
