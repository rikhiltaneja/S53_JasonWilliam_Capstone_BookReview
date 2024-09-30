import { useState } from "react";

const faqData = [
  {
    question: "What is a book summary?",
    answer:
      "A book summary is a brief overview of the key ideas and concepts from a book, typically highlighting the most important points to save you time.",
  },
  {
    question: "How often are new book summaries added?",
    answer:
      "We add new book summaries every week, covering a wide range of genres, including fiction, non-fiction, self-help, and more.",
  },
  {
    question: "Do I need a subscription to access the summaries?",
    answer: "NO, it is completely free",
  },
  {
    question: "Can I suggest a book for summarizing?",
    answer:
      "Yes! We encourage our users to suggest books they'd like to see summarized. You can submit your suggestions through the mail.",
  },
  {
    question: "Do you offer audio summaries?",
    answer: "No, we do not offer it.",
  },
  {
    question: "What genres of books are summarized?",
    answer:
      "We cover a variety of genres including business, self-help, psychology, science, history, and fiction. There's something for everyone!",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
          >
            <h2
              className="flex justify-between items-center text-lg font-medium cursor-pointer text-gray-800 dark:text-gray-100"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </h2>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
