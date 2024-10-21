window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("hedaer").className = "test";
  } else {
     {
    document.getElementById("hedaer").className = "";
  }
}
}

// Function to check if elements are in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'show' class to cards when they are scrolled into view
    function revealCardsOnScroll() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('show');
            }
        });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', revealCardsOnScroll);

    // Trigger the function to check card visibility on load
    document.addEventListener('DOMContentLoaded', revealCardsOnScroll);
         function toggleMenu() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('active');
            }
        // Database of existing questions, answers, and new real-time functionalities
        const qaDatabase = [
            // Greetings
            { question: "hi", answer: "Hello! How can I help you today?" },
            { question: "hello", answer: "Hi there! How are you doing?" },
            { question: "time", answer: getTime },
            { question: "date", answer: getDate },
            { question: "weather", answer: "Go to google .com for the latest weather updates" },


            // Your previously existing questions and answers (sample below)
            { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language, used to structure web pages." },
            { question: "What is CSS?", answer: "CSS stands for Cascading Style Sheets and is used for styling web pages." },
            { question: "What is JavaScript?", answer: "JavaScript is a programming language used to add interactivity to web pages." },
            // Add more existing questions and answers here...

            // More conversational greetings and phrases
            { question: "how are you", answer: "I'm just a chatbot, but thanks for asking! How can I help you?" },
            { question: "what's up", answer: "Not much, just here to answer your questions. What's up with you?" },
            { question: "howdy", answer: "Howdy! How can I assist you today?" },
            { question: "hi", answer: "Hello! How can I help you today?" },
            { question: "hello", answer: "Hi there! How are you doing?" },
            { question: "hey", answer: "Hey! What can I assist you with today?" },
            { question: "good morning", answer: "Good morning! What can I do for you?" },
            { question: "good afternoon", answer: "Good afternoon! How can I help you today?" },
            { question: "good evening", answer: "Good evening! Do you have any questions for me?" },
            { question: "how are you", answer: "I'm just a chatbot, but thanks for asking! How can I help you?" },
            { question: "what's up", answer: "Not much, just here to answer your questions. What's up with you?" },
            { question: "howdy", answer: "Howdy! How can I assist you today?" },

            // Productivity & Social
            // Productivity & Social
            { question: "How can I improve my communication skills?", answer: "Practice active listening, be clear and concise, and pay attention to non-verbal cues." },
            { question: "What are some effective networking strategies?", answer: "Attend industry events, join professional organizations, and utilize social media platforms like LinkedIn." },
            { question: "How can I overcome procrastination?", answer: "Break tasks into smaller, manageable steps, set deadlines, and eliminate distractions." },
            { question: "What are some tips for public speaking?", answer: "Practice your speech, know your audience, use visual aids, and control your breathing to stay calm." },
            { question: "How can I improve my problem-solving skills?", answer: "Define the problem clearly, brainstorm multiple solutions, evaluate options, and learn from the outcomes." },

            // Personal Development
            // Personal Development (continued)
            { question: "How can I develop a growth mindset?", answer: "Embrace challenges, learn from criticism, and view failures as opportunities for growth." },
            { question: "What are some effective ways to manage stress?", answer: "Practice mindfulness, exercise regularly, and maintain a healthy work-life balance." },
            { question: "How can I improve my critical thinking skills?", answer: "Question assumptions, analyze information from multiple perspectives, and practice logical reasoning." },
            { question: "What are some tips for effective goal setting?", answer: "Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound), break them into smaller tasks, and track your progress." },
            { question: "How can I become more resilient?", answer: "Build strong relationships, maintain a positive outlook, and learn from past experiences." },

            // Career Development
            { question: "How can I advance in my career?", answer: "Continuously learn and update your skills, network with professionals in your field, and seek mentorship opportunities." },
            { question: "What are some effective leadership skills?", answer: "Develop strong communication, practice active listening, lead by example, and empower your team members." },
            { question: "How can I improve my negotiation skills?", answer: "Prepare thoroughly, listen actively, focus on mutual benefits, and practice win-win thinking." },
            { question: "What are some tips for giving effective presentations?", answer: "Know your audience, use visual aids, practice your delivery, and engage your listeners with questions or stories." },
            { question: "How can I build a strong professional network?", answer: "Attend industry events, join professional associations, engage on LinkedIn, and follow up with new connections." },

            // Health and Wellness (continued)
            { question: "What are some ways to boost my immune system?", answer: "Eat a balanced diet, get enough sleep, exercise regularly, and manage stress levels." },
            { question: "How can I improve my posture?", answer: "Be mindful of your sitting and standing positions, strengthen your core muscles, and take regular breaks to stretch." },
            { question: "What are some effective stress-relief techniques?", answer: "Try deep breathing exercises, meditation, yoga, or engaging in hobbies you enjoy." },
            { question: "How can I maintain a healthy work-life balance?", answer: "Set clear boundaries between work and personal time, prioritize self-care, and learn to say no to unnecessary commitments." },
            { question: "What are some tips for staying motivated to exercise?", answer: "Set realistic goals, find activities you enjoy, workout with a friend, and track your progress." },

            // Relationships
            { question: "How can I improve my communication in relationships?", answer: "Practice active listening, express yourself clearly, be empathetic, and avoid assumptions." },
            { question: "What are some signs of a healthy relationship?", answer: "Mutual respect, trust, open communication, support for each other's goals, and the ability to resolve conflicts constructively." },
            { question: "How can I build trust in a relationship?", answer: "Be reliable, honest, and transparent. Follow through on your commitments and respect boundaries." },
            { question: "What are some ways to show appreciation in a relationship?", answer: "Express gratitude regularly, perform acts of kindness, give compliments, and spend quality time together." },
            { question: "How can I improve my conflict resolution skills?", answer: "Stay calm, listen to understand, focus on the issue rather than blame, and work together to find solutions." },

            // Financial Management (continued)
            { question: "How can I start investing with little money?", answer: "Consider micro-investing apps, low-cost index funds, or setting up a high-yield savings account." },
            { question: "What are some ways to reduce monthly expenses?", answer: "Review and cancel unnecessary subscriptions, negotiate bills, cook at home more often, and use energy-efficient appliances." },
            { question: "How can I improve my credit score?", answer: "Pay bills on time, keep credit utilization low, avoid opening too many new accounts, and regularly check your credit report for errors." },
            { question: "What's the best way to save for retirement?", answer: "Start early, contribute to a 401(k) if available, consider opening an IRA, and diversify your investments." },
            { question: "How can I create a financial emergency fund?", answer: "Set a savings goal, automate your savings, cut unnecessary expenses, and consider a high-yield savings account." },

            // Time Management
            { question: "How can I stop procrastinating?", answer: "Break tasks into smaller, manageable steps, use the Pomodoro Technique, and eliminate distractions." },
            { question: "What are some effective time management techniques?", answer: "Use the Eisenhower Matrix to prioritize tasks, practice time blocking, and learn to delegate when possible." },
            { question: "How can I increase my productivity at work?", answer: "Set clear goals, minimize distractions, take regular breaks, and focus on high-priority tasks during your peak energy hours." },
            { question: "What are some ways to manage email overload?", answer: "Set specific times to check email, use folders and filters, unsubscribe from unnecessary newsletters, and keep responses brief." },
            { question: "How can I create a productive morning routine?", answer: "Wake up early, hydrate, exercise, plan your day, and tackle important tasks before checking emails or social media." },

            // Technology and Digital Skills
            { question: "How can I improve my digital literacy?", answer: "Take online courses, read tech blogs, practice using different software and apps, and stay updated on digital trends." },
            { question: "What are some essential cybersecurity practices?", answer: "Use strong, unique passwords, enable two-factor authentication, keep software updated, and be cautious of phishing attempts." },
            { question: "How can I learn to code?", answer: "Start with online resources like Codecademy or freeCodeCamp, choose a programming language to focus on, and practice regularly with small projects." },
            { question: "What are some tips for creating engaging social media content?", answer: "Know your audience, use high-quality visuals, tell stories, encourage interaction, and post consistently." },
            { question: "How can I protect my privacy online?", answer: "Use a VPN, be cautious about sharing personal information, adjust privacy settings on social media, and use secure browsing modes." },

            // Continued Learning and Education
            { question: "How can I develop a lifelong learning habit?", answer: "Set learning goals, read regularly, take online courses, attend workshops or seminars, and seek out new experiences." },
            { question: "What are some effective study techniques?", answer: "Use active recall, spaced repetition, teach the material to others, and create mind maps or summaries." },
            { question: "How can I improve my memory?", answer: "Get enough sleep, exercise regularly, practice mindfulness, and use mnemonic devices or visualization techniques." },
            { question: "What are some ways to stay motivated while learning?", answer: "Set clear goals, reward yourself for progress, find a study buddy or group, and connect the material to real-life applications." },
            { question: "How can I make the most of online learning?", answer: "Create a dedicated study space, stick to a schedule, actively participate in discussions, and take regular breaks." },

            // Creativity and Innovation
            { question: "How can I boost my creativity?", answer: "Expose yourself to new experiences, practice brainstorming, keep a journal, and embrace failure as part of the creative process." },
            { question: "What are some techniques for generating new ideas?", answer: "Try mind mapping, use the SCAMPER technique, practice lateral thinking, and collaborate with others." },
            { question: "How can I overcome creative blocks?", answer: "Change your environment, take breaks, seek inspiration from different sources, and start with small, manageable tasks." },
            { question: "What are some ways to foster innovation in a team?", answer: "Encourage diverse perspectives, create a safe space for sharing ideas, reward creativity, and provide resources for experimentation." },
            { question: "How can I turn my creative ideas into reality?", answer: "Start with a clear plan, break the project into smaller steps, seek feedback, and be persistent in overcoming obstacles." },

            // Environmental Awareness and Sustainability
            { question: "How can I reduce my carbon footprint?", answer: "Use public transportation or carpool, reduce meat consumption, use energy-efficient appliances, and minimize single-use plastics." },
            { question: "What are some easy ways to live more sustainably?", answer: "Recycle and compost, use reusable bags and water bottles, conserve water and energy, and support eco-friendly businesses." },
            { question: "How can I start a home garden?", answer: "Choose a sunny spot, prepare the soil, select plants suitable for your climate, and water and maintain regularly." },
            { question: "What are some renewable energy sources?", answer: "Solar power, wind energy, hydroelectric power, geothermal energy, and biomass are common renewable energy sources." },
            { question: "How can I educate others about environmental issues?", answer: "Share information on social media, organize community events, lead by example, and support environmental education programs." },

            // Cultural Awareness and Diversity
            { question: "How can I become more culturally aware?", answer: "Learn about different cultures, travel if possible, engage with diverse groups of people, and challenge your own biases." },
            { question: "What are some ways to promote diversity and inclusion?", answer: "Educate yourself and others, speak up against discrimination, support diverse businesses and organizations, and practice inclusive language." },
            { question: "How can I overcome language barriers?", answer: "Learn basic phrases in other languages, use translation apps, be patient and respectful, and use non-verbal communication effectively." },
            { question: "What are some benefits of diversity in the workplace?", answer: "Increased creativity and innovation, better problem-solving, improved employee engagement, and enhanced company reputation." },
            { question: "How can I celebrate cultural differences?", answer: "Attend cultural festivals, try foods from different cultures, learn about various holidays and traditions, and engage in cultural exchange programs." },

            // Mental Health and Well-being
            { question: "How can I improve my mental health?", answer: "Practice self-care, maintain social connections, seek professional help when needed, and engage in activities you enjoy." },
            { question: "What are some signs of burnout?", answer: "Exhaustion, cynicism, reduced productivity, irritability, and physical symptoms like headaches or insomnia." },
            { question: "How can I practice mindfulness in daily life?", answer: "Start with short meditation sessions, practice deep breathing, focus on the present moment, and incorporate mindful eating or walking." },
            { question: "What are some ways to cope with anxiety?", answer: "Practice relaxation techniques, challenge negative thoughts, maintain a healthy lifestyle, and consider therapy or counseling." },
            { question: "How can I build resilience?", answer: "Develop a strong support network, maintain a positive outlook, set realistic goals, and learn from past experiences." },

            // Entrepreneurship and Business
            { question: "How can I start my own business?", answer: "Develop a solid business plan, research your market, secure funding, comply with legal requirements, and build a strong network." },
            { question: "What are some key traits of successful entrepreneurs?", answer: "Resilience, adaptability, risk-taking, passion, strong work ethic, and the ability to learn from failures." },
            { question: "How can I fund my startup?", answer: "Consider bootstrapping, seek angel investors or venture capital, apply for loans or grants, or try crowdfunding platforms." },
            { question: "What are some effective marketing strategies for small businesses?", answer: "Utilize social media marketing, content marketing, email campaigns, networking events, and local partnerships." },
            { question: "How can I scale my business?", answer: "Focus on customer retention, automate processes where possible, hire the right team, and consider expanding to new markets or product lines." },

            // Communication Skills
            { question: "How can I become a better listener?", answer: "Practice active listening, avoid interrupting, ask clarifying questions, and provide non-verbal cues of engagement." },
            { question: "What are some tips for public speaking?", answer: "Know your audience, practice your delivery, use visual aids effectively, and engage your listeners with stories or questions." },
            { question: "How can I improve my writing skills?", answer: "Read widely, write regularly, seek feedback, and focus on clarity and conciseness in your writing." },
            { question: "What are some ways to handle difficult conversations?", answer: "Prepare in advance, remain calm and respectful, focus on the issue rather than the person, and seek common ground." },
            { question: "How can I be more assertive in communication?", answer: "Use 'I' statements, set clear boundaries, practice saying no, and express your needs and opinions confidently." },

            // Personal Finance (continued)
            { question: "How can I create a budget?", answer: "Track your income and expenses, categorize your spending, set financial goals, and allocate your money accordingly." },
            { question: "What are some ways to save money on groceries?", answer: "Plan meals in advance, use coupons, buy generic brands, shop seasonally, and avoid impulse purchases." },
            { question: "How can I negotiate a better salary?", answer: "Research industry standards, highlight your achievements, practice your pitch, and be prepared to discuss non-salary benefits." },
            { question: "What are some common investment mistakes to avoid?", answer: "Failing to diversify, trying to time the market, neglecting to rebalance your portfolio, and letting emotions drive investment decisions." },
            { question: "How can I teach my children about money management?", answer: "Give them an allowance, help them set savings goals, teach them about budgeting, and lead by example." },

            // Health and Fitness (continued)
            { question: "What are some tips for maintaining a healthy diet?", answer: "Eat a variety of fruits and vegetables, choose whole grains, limit processed foods, and practice portion control." },
            { question: "How can I start a fitness routine?", answer: "Start slowly, set realistic goals, find activities you enjoy, and gradually increase intensity and duration." },
            { question: "What are some ways to improve sleep quality?", answer: "Maintain a consistent sleep schedule, create a relaxing bedtime routine, limit screen time before bed, and create a comfortable sleep environment." },
            { question: "How can I reduce the risk of chronic diseases?", answer: "Maintain a healthy weight, exercise regularly, don't smoke, limit alcohol consumption, and get regular health check-ups." },
            { question: "What are some effective stress management techniques?", answer: "Practice deep breathing, try progressive muscle relaxation, engage in regular physical activity, and maintain social connections." },

            // Technology and Digital Literacy (continued)
            { question: "How can I protect my computer from viruses?", answer: "Use reputable antivirus software, keep your operating system and applications updated, be cautious when downloading files, and avoid clicking on suspicious links." },
            { question: "What are some tips for creating strong passwords?", answer: "Use a combination of upper and lowercase letters, numbers, and symbols, avoid personal information, and use different passwords for different accounts." },
            { question: "How can I improve my typing speed?", answer: "Practice regularly, use online typing tutorials, focus on accuracy before speed, and learn proper finger placement." },
            { question: "What are some useful keyboard shortcuts?", answer: "Ctrl+C (copy), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+F (find), and Alt+Tab (switch between windows) are common shortcuts." },
            { question: "How can I stay safe on social media?", answer: "Adjust privacy settings, be cautious about sharing personal information, think before posting, and be aware of phishing attempts." },

            // Career Development (continued)
            { question: "How can I write an effective resume?", answer: "Tailor it to the job description, highlight your achievements, use action verbs, keep it concise, and proofread carefully." },
            { question: "What are some tips for acing a job interview?", answer: "Research the company, practice common interview questions, prepare questions to ask, dress appropriately, and follow up with a thank-you note." },
            { question: "How can I improve my networking skills?", answer: "Attend industry events, join professional associations, engage on LinkedIn, and follow up with new connections." },
            { question: "What are some ways to stay motivated at work?", answer: "Set clear goals, celebrate small wins, find meaning in your work, maintain work-life balance, and seek new challenges." },
            { question: "How can I ask for a promotion?", answer: "Document your achievements, research salary ranges, prepare a strong case, and choose the right time to approach your manager." },

            // Relationships and Social Skills (continued)
            { question: "How can I improve my empathy?", answer: "Practice active listening, try to see situations from others' perspectives, read fiction, and volunteer for causes you care about." },
            { question: "What are some ways to build trust in relationships?", answer: "Be reliable, communicate openly and honestly, respect boundaries, and show vulnerability." },
            { question: "How can I make new friends as an adult?", answer: "Join clubs or groups based on your interests, volunteer, take classes, use social apps, and be open to new experiences." },
            { question: "What are some signs of a toxic relationship?", answer: "Lack of respect, constant criticism, controlling behavior, lack of support, and feeling drained after interactions." },
            { question: "How can I improve my conflict resolution skills?", answer: "Stay calm, listen actively, focus on the issue rather than blame, and work together to find mutually beneficial solutions." },

            // Personal Development (continued)
            { question: "How can I build self-confidence?", answer: "Set and achieve small goals, practice positive self-talk, focus on your strengths, and step out of your comfort zone regularly." },
            { question: "What are some ways to overcome procrastination?", answer: "Break tasks into smaller steps, use the 'two-minute rule', eliminate distractions, and reward yourself for completing tasks." },
            { question: "How can I develop a growth mindset?", answer: "Embrace challenges, view failures as learning opportunities, focus on the process rather than just the outcome, and cultivate a love for learning." },
            { question: "What are some effective goal-setting techniques?", answer: "Use the SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound), write down your goals, and review them regularly." },
            { question: "How can I improve my decision-making skills?", answer: "Gather relevant information, consider potential outcomes, trust your instincts, and learn from past decisions." },

            // Time Management and Productivity (continued)
            { question: "How can I create an effective to-do list?", answer: "Prioritize tasks, break larger tasks into smaller steps, be specific, and limit your daily list to 3-5 important items." },
            { question: "What is the Pomodoro Technique?", answer: "A time management method where you work for 25 minutes, then take a 5-minute break, repeating this cycle four times before taking a longer break." },
            { question: "How can I reduce distractions while working?", answer: "Use website blockers, turn off notifications, create a dedicated workspace, and communicate your focus time to others." },
            { question: "What are some ways to improve focus?", answer: "Practice mindfulness, get enough sleep, exercise regularly, and break tasks into smaller, manageable chunks." },
            { question: "How can I balance multiple projects?", answer: "Prioritize tasks across projects, use project management tools, delegate when possible, and communicate clearly with all stakeholders." },

            // Creativity and Problem Solving (continued)
            { question: "What is brainstorming?", answer: "A group creativity technique designed to generate a large number of ideas for solving a specific problem." },
            { question: "How can I think more creatively?", answer: "Expose yourself to new experiences, practice divergent thinking, challenge assumptions, and combine unrelated concepts." },
            { question: "What is lateral thinking?", answer: "A way of solving problems by approaching them from unexpected angles rather than traditional, logical methods." },
            { question: "How can I improve my problem-solving skills?", answer: "Define the problem clearly, gather relevant information, generate multiple solutions, evaluate options, and implement the best solution." },
            { question: "What is the design thinking process?", answer: "A non-linear, iterative process used to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test." },

            // Environmental Sustainability (continued)
            { question: "What is composting?", answer: "The natural process of recycling organic matter, such as leaves and food scraps, into a valuable fertilizer that can enrich soil and plants." },
            { question: "How can I reduce plastic waste?", answer: "Use reusable bags, water bottles, and containers, avoid single-use plastics, and choose products with minimal packaging." },
            { question: "What is a carbon footprint?", answer: "The total amount of greenhouse gases produced to directly and indirectly support human activities, usually expressed in equivalent tons of carbon dioxide (CO2)." },
            { question: "How can I conserve water at home?", answer: "Fix leaks, take shorter showers, use water-efficient appliances, collect rainwater for gardening, and avoid running water unnecessarily." },
            { question: "What are some eco-friendly transportation options?", answer: "Walking, cycling, using public transportation, carpooling, and using electric or hybrid vehicles." },

            // Financial Literacy (continued)
            { question: "What is compound interest?", answer: "Interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan." },
            { question: "How can I improve my credit score?", answer: "Pay bills on time, keep credit card balances low, don't close old credit accounts, and limit new credit applications." },
            { question: "What is diversification in investing?", answer: "The practice of spreading investments among various financial instruments, industries, and other categories to reduce risk." },
            { question: "How can I start saving for retirement?", answer: "Start early, contribute to a 401(k) if available, consider opening an IRA, and increase your savings rate over time." },
            { question: "What is the difference between a debit card and a credit card?", answer: "A debit card withdraws money directly from your checking account, while a credit card allows you to borrow money up to a certain limit." },

            // Health and Wellness (continued)
            { question: "What is mindfulness meditation?", answer: "A mental training practice that involves focusing your mind on your experiences (like your own thoughts, feelings, and sensations) in the present moment." },
            { question: "How can I improve my posture?", answer: "Be mindful of your posture throughout the day, strengthen your core muscles, set up an ergonomic workspace, and take regular breaks to stretch." },
            { question: "What are some signs of dehydration?", answer: "Thirst, dark-colored urine, fatigue, dizziness, and dry skin are common signs of dehydration." },
            { question: "How can I boost my immune system?", answer: "Eat a balanced diet rich in fruits and vegetables, get enough sleep, exercise regularly, manage stress, and stay hydrated." },
            { question: "What are the benefits of regular exercise?", answer: "Improved cardiovascular health, weight management, stronger bones and muscles, better mental health, and reduced risk of chronic diseases." },

            // Communication Skills (continued)
            { question: "What is active listening?", answer: "Fully concentrating on what is being said rather than just passively 'hearing' the message of the speaker. It involves listening with all senses." },
            { question: "How can I give constructive feedback?", answer: "Be specific, focus on the behavior not the person, offer suggestions for improvement, and balance negative feedback with positive observations." },
            { question: "What is nonverbal communication?", answer: "Communication through sending and receiving wordless cues, including facial expressions, body language, tone of voice, and eye contact." },
            { question: "How can I improve my writing skills?", answer: "Read widely, write regularly, seek feedback, focus on clarity and conciseness, and practice different styles of writing." },
            { question: "What are some tips for effective email communication?", answer: "Use clear subject lines, keep messages concise, proofread before sending, use a professional tone, and respond promptly." },

            // Technology and Digital Skills (continued)
            { question: "What is cloud computing?", answer: "The delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')." },
            { question: "How can I protect my online privacy?", answer: "Use strong passwords, enable two-factor authentication, be cautious about sharing personal information, and use privacy settings on social media." },
            { question: "What is phishing?", answer: "A cybercrime in which targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data." },
            { question: "How can I create a strong password?", answer: "Use a mix of uppercase and lowercase letters, numbers, and symbols, make it at least 12 characters long, and avoid using personal information." },
            { question: "What is a VPN?", answer: "A Virtual Private Network creates a secure, encrypted connection over a less secure network, such as the internet, providing privacy and anonymity." },

            // Entrepreneurship and Business (continued)
            { question: "What is a business plan?", answer: "A written document describing in detail how a business—usually a startup—defines its objectives and how it plans to achieve its goals." },
            { question: "What is market research?", answer: "The process of gathering, analyzing and interpreting information about a market, about a product or service to be offered for sale in that market, and about the past, present and potential customers." },
            { question: "What is a startup?", answer: "A company or project initiated by an entrepreneur to seek, effectively develop, and validate a scalable business model." },
            { question: "What is bootstrapping in business?", answer: "Starting and growing a business using only personal finances or operating revenues of the new company." },
            { question: "What is a minimum viable product (MVP)?", answer: "A product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle." },

            // Personal Development (continued)
            { question: "What is emotional intelligence?", answer: "The capacity to be aware of, control, and express one's emotions, and to handle interpersonal relationships judiciously and empathetically." },
            { question: "How can I develop a growth mindset?", answer: "Embrace challenges, persist in the face of setbacks, see effort as the path to mastery, learn from criticism, and find lessons and inspiration in the success of others." },
            { question: "What is self-awareness?", answer: "Conscious knowledge of one's own character, feelings, motives, and desires." },
            { question: "How can I build resilience?", answer: "Develop a strong support network, maintain a positive outlook, set realistic goals, practice self-care, and learn from past experiences." },
            { question: "What is the importance of lifelong learning?", answer: "Continuous, voluntary, and self-motivated pursuit of knowledge for either personal or professional reasons, enhancing social inclusion, active citizenship, and personal development." },

            // Relationships and Social Skills (continued)
            { question: "What is empathy?", answer: "The ability to understand and share the feelings of another." },
            { question: "How can I improve my social skills?", answer: "Practice active listening, show genuine interest in others, learn to read body language, and engage in social activities regularly." },
            { question: "What is conflict resolution?", answer: "The process by which two or more parties reach a peaceful resolution to a dispute." },
            { question: "How can I set healthy boundaries in relationships?", answer: "Identify your limits, communicate them clearly, be consistent, practice self-respect, and learn to say no when necessary." },
            { question: "What is effective teamwork?", answer: "Collaborating with a group of people to achieve a common goal through sharing knowledge, skills and effort." },

            // Career Development (continued)
            { question: "What is a cover letter?", answer: "A letter sent with your resume to provide additional information on your skills and experience relevant to the job you are applying for." },
            { question: "How can I prepare for a job interview?", answer: "Research the company, practice common interview questions, prepare questions to ask, dress appropriately, and bring necessary documents." },
            { question: "What is networking in a professional context?", answer: "The exchange of information and ideas among people with a common profession or special interest, usually in an informal social setting." },
            { question: "How can I ask for a raise?", answer: "Research salary ranges for your position, document your achievements, choose the right time, practice your pitch, and be prepared to negotiate." },
            { question: "What is a career path?", answer: "A sequence of job positions that one undertakes throughout their lifetime, including education, training, and work experience." },

            // Time Management and Productivity (continued)
            { question: "What is the 80/20 rule (Pareto Principle)?", answer: "The idea that 80% of results come from 20% of efforts, suggesting focusing on the most important tasks for maximum productivity." },
            { question: "How can I overcome procrastination?", answer: "Break tasks into smaller steps, use the 'two-minute rule', eliminate distractions, and reward yourself for completing tasks." },
            { question: "What is time blocking?", answer: "A time management method that divides your day into blocks of time, each dedicated to accomplishing a specific task or group of tasks." },
            { question: "How can I improve my focus?", answer: "Minimize distractions, take regular breaks, practice mindfulness, get enough sleep, and break large tasks into smaller, manageable chunks." },
            { question: "What is the importance of taking breaks?", answer: "Breaks help prevent decision fatigue, restore motivation, increase productivity and creativity, and reduce stress." },

            // Creativity and Problem Solving (continued)
            { question: "What is divergent thinking?", answer: "A thought process used to generate creative ideas by exploring many possible solutions." },
            { question: "How can I overcome creative blocks?", answer: "Change your environment, take breaks, seek inspiration from different sources, and start with small, manageable tasks." },
            { question: "What is the SCAMPER technique?", answer: "A creative thinking and brainstorming technique that uses a set of directed questions to come up with new ideas for products, services or processes." },
            { question: "How can I improve my critical thinking skills?", answer: "Question assumptions, reason through logic, diversify your thought processes, and practice evaluating information objectively." },
            { question: "What is design thinking?", answer: "A methodology for creative problem solving that focuses on understanding users, challenging assumptions, redefining problems and creating innovative solutions to prototype and test." },

            // Health and Wellness (continued)
            { question: "What is the importance of sleep?", answer: "Sleep is crucial for physical health, cognitive function, emotional well-being, and overall quality of life." },
            { question: "How can I develop a consistent exercise routine?", answer: "Start small, choose activities you enjoy, schedule workouts like appointments, find an accountability partner, and track your progress." },
            { question: "What is mindful eating?", answer: "The practice of paying attention to your food, on purpose, moment by moment, without judgment." },
            { question: "How can I manage stress effectively?", answer: "Practice relaxation techniques, exercise regularly, maintain a healthy diet, get enough sleep, and seek support when needed." },
            { question: "What are the benefits of meditation?", answer: "Reduced stress, improved concentration, increased self-awareness, better emotional health, and enhanced overall well-being." },

            // Financial Literacy (continued)
            { question: "What is a credit score?", answer: "A numerical expression based on a statistical analysis of a person's credit files, representing their creditworthiness." },
            { question: "How can I create a budget?", answer: "Track your income and expenses, categorize your spending, set financial goals, and allocate your money accordingly." },
            { question: "What is the difference between saving and investing?", answer: "Saving is setting aside money for future use, typically in a low-risk account, while investing involves putting money into assets with the expectation of generating returns over time." },
            { question: "What is compound interest?", answer: "Interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan." },
            { question: "How can I start investing with little money?", answer: "Consider micro-investing apps, low-cost index funds, or setting up a high-yield savings account." },

            // Technology and Digital Skills (continued)
            { question: "What is artificial intelligence (AI)?", answer: "The simulation of human intelligence processes by machines, especially computer systems." },
            { question: "How can I protect my computer from malware?", answer: "Use reputable antivirus software, keep your operating system and applications updated, be cautious when downloading files, and avoid clicking on suspicious links." },
            
            { question: "How can I boost my self-confidence?", answer: "Set achievable goals, practice positive self-talk, and focus on your strengths and accomplishments." },
            { question: "What are some ways to develop emotional intelligence?", answer: "Practice self-awareness, empathy, and active listening. Reflect on your emotions and those of others." },
            { question: "How can I become more creative?", answer: "Expose yourself to new experiences, practice brainstorming, and don't fear failure when trying new ideas." },
            { question: "What are some effective ways to learn a new skill?", answer: "Break the skill into smaller parts, practice regularly, seek feedback, and be patient with your progress." },
            { question: "How can I improve my decision-making skills?", answer: "Gather relevant information, consider potential outcomes, trust your instincts, and learn from past decisions." },
            { question: "How can I be more productive?", answer: "Set clear goals, break tasks into smaller steps, minimize distractions, and prioritize important tasks." },
            { question: "What are some ways to reduce stress?", answer: "Practice deep breathing, exercise, maintain a healthy diet, and take breaks when necessary." },
            { question: "How can I improve my time management?", answer: "Use a to-do list, set priorities, and allocate specific time slots for each task." },
            { question: "What’s the best way to stay motivated?", answer: "Set small, achievable goals and reward yourself for progress. Stay positive and visualize success." },
            { question: "How can I build good habits?", answer: "Start small, be consistent, track your progress, and hold yourself accountable." },

            // Health and Wellness
            { question: "How can I improve my sleep quality?", answer: "Establish a regular sleep routine, limit screen time before bed, and create a calm sleep environment." },
            { question: "What are the best ways to stay physically active?", answer: "Incorporate exercise into your daily routine, like walking, jogging, or strength training." },
            { question: "How much water should I drink each day?", answer: "It’s recommended to drink about 8 glasses of water per day, but individual needs may vary." },
            { question: "What’s the healthiest way to lose weight?", answer: "Focus on a balanced diet, regular exercise, and portion control rather than quick-fix diets." },
            { question: "How can I manage anxiety?", answer: "Practice mindfulness, deep breathing exercises, and seek professional help if necessary." },

            // Career and Work
            { question: "How can I improve my work-life balance?", answer: "Set boundaries, learn to say no, and allocate time for relaxation and personal interests." },
            { question: "What are some tips for acing a job interview?", answer: "Research the company, practice common questions, dress appropriately, and follow up after the interview." },
            { question: "How do I ask for a raise or promotion?", answer: "Prepare evidence of your achievements, schedule a meeting, and confidently present your case." },
            { question: "How can I make my resume stand out?", answer: "Tailor your resume to the job description, highlight key achievements, and keep it concise." },
            { question: "What’s the best way to deal with workplace stress?", answer: "Take regular breaks, communicate effectively with your team, and set realistic goals." },

            // Finance
            { question: "How do I start saving money?", answer: "Create a budget, cut unnecessary expenses, and set up automatic savings transfers." },
            { question: "How can I create a budget that works for me?", answer: "Track your income and expenses, categorize your spending, and allocate money to savings." },
            { question: "What are some good ways to invest money?", answer: "Consider diversifying your portfolio with stocks, bonds, and other long-term investment options." },
            { question: "How can I pay off my debt faster?", answer: "Focus on high-interest debt first, make extra payments when possible, and avoid new debt." },
            { question: "How can I build a good credit score?", answer: "Pay your bills on time, keep credit card balances low, and avoid applying for too much credit." },

            // Technology
            { question: "How do I keep my phone battery healthy?", answer: "Avoid overcharging, keep your phone cool, and turn off unnecessary apps running in the background." },
            { question: "How can I improve my internet speed?", answer: "Restart your router, update your hardware, and reduce the number of devices connected." },
            { question: "How do I protect my personal data online?", answer: "Use strong, unique passwords, enable two-factor authentication, and be cautious of phishing scams." },
            { question: "What are some essential apps for productivity?", answer: "Try using apps like Todoist, Trello, or Evernote to manage tasks and improve time management." },
            { question: "How do I troubleshoot slow computer performance?", answer: "Clear your cache, remove unnecessary programs, and consider upgrading your hardware." },

            // Parenting and Family
            { question: "How can I help my child do better in school?", answer: "Create a consistent study routine, be supportive, and encourage regular reading." },
            { question: "What’s the best way to discipline children?", answer: "Set clear boundaries, use positive reinforcement, and be consistent with rules." },
            { question: "How can I encourage my children to read more?", answer: "Introduce them to books that match their interests and read together regularly." },
            { question: "How do I handle sibling rivalry?", answer: "Encourage cooperation, treat each child fairly, and avoid comparisons." },
            { question: "How do I deal with picky eaters?", answer: "Offer a variety of healthy foods, avoid pressuring them to eat, and be patient." },

            // Travel and Leisure
            { question: "What are some tips for budget travel?", answer: "Book flights and accommodations in advance, look for deals, and travel during off-peak seasons." },
            { question: "How can I pack efficiently for a trip?", answer: "Make a checklist, roll your clothes to save space, and bring only what you need." },
            { question: "How do I find the best travel deals?", answer: "Use comparison websites, sign up for airline newsletters, and be flexible with your dates." },
            { question: "How can I stay healthy while traveling?", answer: "Stay hydrated, avoid street food if unsure about hygiene, and keep a basic first aid kit." },
            { question: "How do I deal with travel anxiety?", answer: "Plan your trip in detail, practice mindfulness, and stay focused on the positive experiences." }

        ];

        const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeatherMap API key




        // Send message and simulate a response
        document.getElementById('send-btn').addEventListener('click', sendMessage);

        function sendMessage() {
            const userInput = document.getElementById('user-input').value.trim();
            if (userInput === "") return;

            addMessage("You: " + userInput, "user-message");
            document.getElementById('user-input').value = "";

            if (userInput.toLowerCase().startsWith("weather")) {
                const city = userInput.split(' ')[1];
                if (city) {
                    getWeather(city);
                } else {
                    addMessage("AI: Please provide a city name to get the weather.", "ai-message");
                }
            } else {
                const aiResponse = findAnswer(userInput);
                if (typeof aiResponse === "function") {
                    addMessage("AI: " + aiResponse(), "ai-message");
                } else {
                    addMessage("AI: " + aiResponse, "ai-message");
                }
            }
        }

        function addMessage(message, className) {
            const chatBox = document.getElementById('chat-box');
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add(className);
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        }

        // Find the answer based on user input
        function findAnswer(userQuestion) {
            const result = qaDatabase.find(qa => userQuestion.toLowerCase().includes(qa.question.toLowerCase()));
            return result ? result.answer : "Sorry, I don't have an answer for that.";
        }

        // Get the current time
        function getTime() {
            const now = new Date();
            return now.toLocaleTimeString();
        }

        // Get the current date
        function getDate() {
            const now = new Date();
            return now.toDateString();
        }

        // Get weather for a specific city using OpenWeatherMap API
        function getWeather(city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const weather = `The current temperature in ${data.name} is ${data.main.temp}°C with ${data.weather[0].description}.`;
                        addMessage("AI: " + weather, "ai-message");
                    } else {
                        addMessage("AI: I couldn't find weather information for that city.", "ai-message");
                    }
                })
                .catch(() => addMessage("AI: There was an error retrieving the weather data.", "ai-message"));
        }
        const chatBox = document.getElementsByClassName('loding');
        window.addEventListener("load" ,function(chatBox){
            chatBox.style.display = 'block'
        })

    