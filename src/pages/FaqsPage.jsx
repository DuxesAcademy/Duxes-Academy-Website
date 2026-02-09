
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; 
import { HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";



const faqs = [
  {
    id: 'faq1',
    question: 'How do I enroll in a course?',
    answer: 'To enroll, simply navigate to the course page you\'re interested in and click the "Enroll Now" button. You may need to create an account or log in first. Follow the on-screen instructions to complete the payment process (if applicable).',
  },
  {
    id: 'faq2',
    question: 'Are the courses self-paced?',
    answer: 'Yes, most of our courses are self-paced, allowing you to learn according to your own schedule. Some courses might have suggested timelines or live sessions, which will be clearly indicated on the course page.',
  },
  {
    id: 'faq3',
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes, upon successful completion of most courses, you will receive a digital certificate that you can share on your LinkedIn profile or resume.',
  },
  {
    id: 'faq4',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express) and PayPal. Specific payment options may vary depending on your region.',
  },
  {
    id: 'faq5',
    question: 'Is there support available if I get stuck?',
    answer: 'Absolutely! Our courses include access to instructor support through Q&A forums or direct messaging. We also have a vibrant student community where you can ask questions and collaborate with peers.',
  },
   {
    id: 'faq6',
    question: 'Can I access course materials after completion?',
    answer: 'Yes, you generally have lifetime access to the course materials, including videos and resources, even after you complete the course.',
  },
];

const FaqsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our platform and courses.</p>
      </motion.section>

      {/* FAQ Accordion */}
      <section className="container max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AccordionItem value={faq.id} className="border bg-card rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </section>

      {/* Contact Support Section */}
      <section className="text-center container border-t pt-16">
         <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4"/>
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          If you couldn't find the answer you were looking for, please feel free to reach out to our support team.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
          <Link to="/contact">Contact Support</Link>
        </Button>
      </section>
    </div>
  );
};

export default FaqsPage;
  