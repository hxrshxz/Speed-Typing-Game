const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Success usually comes to those who are too busy to be looking for it. Stay focused and keep working hard.",
    "Opportunities don't happen. You create them by being persistent and working toward what you want to achieve.",
    "Don't watch the clock; do what it does. Keep going. Time waits for no one, so make the most of it.",
    "The future belongs to those who believe in the beauty of their dreams and are willing to chase them.",
    "It's not whether you get knocked down, it's whether you get up and keep moving forward despite the challenges.",
    "The only way to do great work is to love what you do. Follow your passion and success will follow.",
    "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
    "You are never too old to set another goal or to dream a new dream. Keep dreaming and keep growing.",
    "If you want to fly, give up everything that weighs you down and focus on what's truly important.",
    "Believe you can, and you're halfway there. Confidence and belief in yourself are the keys to success.",
    "The harder you work for something, the greater you'll feel when you achieve it. Effort always leads to results.",
    "Perseverance is not a long race; it's many short races one after the other. Keep running toward your goals.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Life is what happens when you're busy making other plans. Don't forget to live in the moment as well.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful and fulfilling.",
    "It does not matter how slowly you go as long as you do not stop. Persistence is the key to success.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Your limitation is only your imagination. Don't let self-doubt hold you back from achieving the impossible.",
    "Push yourself, because no one else is going to do it for you. Success starts with you.",
    "Great things never come from comfort zones. Embrace discomfort, take risks, and challenge yourself to grow.",
    "Dream big and dare to fail. The bigger your dreams, the more resilient you must be in achieving them.",
    "Don't stop when you're tired. Stop when you're done. Keep pushing until you've reached your goals.",
    "Hard work beats talent when talent doesn’t work hard. Consistent effort will always outshine natural ability.",
    "Success is not how high you have climbed, but how you make a positive difference in the world.",
    "Start where you are. Use what you have. Do what you can. Every small step leads to greater things.",
    "The best way to succeed in life is to act on the advice you give to others. Lead by example.",
    "Don’t be afraid to give up the good to go for the great. Excellence often requires letting go of comfort.",
    "Your life only gets better when you get better. Focus on personal growth and everything else will follow.",
    "Success is the sum of small efforts, repeated day in and day out. Stay consistent, and the results will come.",
    "You miss 100% of the shots you don't take. Take the risk or lose the chance.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "We may encounter many defeats, but we must not be defeated. Persistence and resilience always lead to victory.",
    "Life is 10% what happens to you and 90% how you react to it. Choose a positive attitude.",
    "Good things come to those who wait, but better things come to those who go out and get them.",
    "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do as well.",
    "Don't be afraid to fail. Be afraid not to try. Failure is a stepping stone to greater achievements.",
    "Success is not the key to happiness. Happiness is the key to success. Love what you do and success will follow.",
    "Failure is simply the opportunity to begin again, this time more intelligently. Learn from mistakes and keep going.",
    "Your attitude, not your aptitude, will determine your altitude. Keep a positive mindset no matter what.",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
    "The only place where success comes before work is in the dictionary. Hard work always precedes great results.",
    "Your time is limited, so don't waste it living someone else's life. Follow your own path and passions.",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "The purpose of our lives is to be happy. Happiness is a choice you make every day.",
    "Success is not the absence of failure; it’s the persistence through failure that leads to success.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The biggest risk is not taking any risk. In a world that's changing so quickly, the only strategy is to take risks.",
    "Success is not in what you have, but who you are. Focus on becoming the best version of yourself.",
    "The secret to getting ahead is getting started. Take the first step, no matter how small, and momentum will follow.",
    "Don’t let yesterday take up too much of today. Learn from the past, but don’t dwell on it.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
    "You can’t control everything, but you can control how you respond. Your response determines your outcome.",
    "The best revenge is massive success. Let your achievements speak louder than words.",
    "Don’t wait for opportunity. Create it by taking action and being proactive in achieving your dreams.",
    "The road to success and the road to failure are almost exactly the same. It’s how you navigate them that matters.",
    "Your mindset can either be your greatest asset or your biggest limitation. Choose to think in possibilities.",
    "The best way to predict the future is to create it. Take control of your destiny and shape your own path.",
    "Success is the ability to go from one failure to another with no loss of enthusiasm.",
    "The man who has confidence in himself gains the confidence of others. Believe in yourself, and others will too.",
    "Don’t count the days; make the days count. Focus on making the most out of every moment.",
    "Sometimes later becomes never. Do it now. Procrastination is the enemy of progress.",
    "It’s not about having time, it’s about making time. Prioritize your goals and make them a reality.",
    "Keep going. Everything you need will come to you at the perfect time. Patience and persistence pay off.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Success is the result of preparation, hard work, and learning from failure. Keep improving, keep learning.",
    "Be so good they can’t ignore you. Excellence will always get noticed in the long run.",
    "Don’t let small minds convince you that your dreams are too big. Follow your heart and think big.",
    "The distance between dreams and reality is action. Take the steps necessary to bring your dreams to life.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "Motivation gets you started. Habit keeps you going. Focus on building good habits for long-term success.",
    "Action is the foundational key to all success. Without action, dreams remain dreams. Make them a reality.",
    "The only way to do great work is to love what you do. Passion fuels achievement.",
    "Your potential is endless. Go do what you were created to do. The sky is the limit.",
    "It always seems impossible until it’s done. With enough effort and persistence, anything is achievable.",
    "Dream big, work hard, stay focused, and surround yourself with good people. Success is inevitable with the right support.",
    "Success is not about being the best. It’s about always getting better. Continuous improvement leads to greatness.",
    "Don’t be afraid to give up the good to go for the great. Reach beyond your comfort zone.",
    "If you want to achieve greatness, stop asking for permission. Just go for it and make it happen.",
    "Your energy introduces you before you even speak. Carry yourself with confidence and positivity.",
    "Believe in your dreams and fight for them. Hard work and dedication will make them a reality.",
    "Your passion is waiting for your courage to catch up. Take the leap and pursue what you love.",
    "Discipline is the bridge between goals and accomplishment. Stay disciplined, and the results will follow.",
    "Success doesn't just find you. You have to go out and get it. Take the initiative and make things happen.",
    "Small progress is still progress. Celebrate every step forward, no matter how small it may seem."]


const timer = document.getElementById("timer");
const typingText = document.querySelector(".typing-text");
const typingArea = document.querySelector(".typing-area");
const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");

let quote = "";
let randomIndex = 0;


startButton.addEventListener("click", () => {
    timer.classList.remove("hide");
    startTimer();
    startButton.classList.toggle("hide");
    container.classList.toggle("hide");
    randomIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[randomIndex];
    typingText.innerText = quote;
    typingArea.value = ""; // Clear the typing area before starting
});

function startTimer() {
    let timePassed = 0;
    setInterval(() => {
        timer.innerText = timePassed++;
    }, 1000);
}

// Typing event listener
typingArea.addEventListener("input", () => {
    const typedText = typingArea.value;

    // Highlight the correct part of the quote
    if (quote.startsWith(typedText)) {
        typingText.style.color = "green";  // Correct so far
    } else {
        typingText.style.color = "red";    // Incorrect typing
    }

    // Check if the user has finished typing the entire quote
    if (typedText === quote) {
        alert(`${timer.innerText} seconds!`);
    }
});
